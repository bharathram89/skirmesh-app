from database import db_session
from models.db_models import (UID, Field, Score, Game, NodeStatus,
                              get_time_capture_complete, get_is_capture_closed)

from flask import render_template, flash, jsonify, session, request, make_response
from flask import Blueprint

bp = Blueprint('admin', __name__, url_prefix='')

from datetime import datetime
from bs4 import BeautifulSoup as SOUP
import json

from pretty_print import print_time, print_perc

from digi.xbee.models.address import XBee64BitAddress
from controller import CONTROL_POINT

serial = '/dev/ttyUSB0'
baud   = 115200
CP = CONTROL_POINT(serial, baud, database=db_session)

CMD_ARGS = {'TIME DATA'   : json.load(open("json/timer_values.json")),
            'SET ASSIST %': json.load(open("json/percent_values.json"))}

# print(json.dumps(CMD_ARGS, indent=4, sort_keys=True))

SET_LOCATION = 0xFF
BROADCAST    = "FFFF"


@bp.route('/node_admin')
def node_admin():

    field = session.get('field', None)

    if not field:

        error = "Please select a Field and return to Node Admin"
        flash(error)

        return render_template('field_chooser.html', error=error)

    avail_addr = [str(xb.get_64bit_addr()) for xb in CP.XB_net.get_devices()]
    nodes = NodeStatus.query.filter(NodeStatus.node.in_(avail_addr)).all()

    # Use this to update the field status and ensure nodes are on the
    # right field, but I don't want to do it all the time...need a better way
    if CP.field != field:
        for node in nodes:
            node.field = field

    CP.field = field

    soup = SOUP(open('templates/fields/' + field + '.html'), 'html.parser')
    paths = soup.find_all('path')
    loc_json = json.dumps([{"text":path['id'],"value":(0,0)} for path in paths] + [{"text":"SWAP","value":(0,0)}])

    # Pull specific arguments for the field
    CMD_ARGS['SET LOCATION'] = json.loads(loc_json)
    field_cmd_args = json.load(open("json/fields/" + field + ".json"))
    CMD_ARGS['REGISTER'] = CMD_ARGS['SET_LOCATION'] = CMD_ARGS['SET TEAM'] = field_cmd_args

    kwargs = {
             'cmd_dict'    : CP.CMD_DICT if CP.end_nodes else None,
             'cmd_args'    : CMD_ARGS,
             'node_cols'   : ['node id','location','config',
                              'Capture\nTime','Medic\nTime','Bomb\nFUS  |  ARM  |  DIS',
                              'Capture\nAssist %'],
             'node_status' : nodes,
             'print_time'  : print_time,
             'print_perc'  : print_perc,
             'field'       : field,
             }

    db_session.commit()

    return render_template('node_admin.html', **kwargs)
    # return render_template('fields/' + field +'.html', admin=True, **kwargs)



@bp.route('/node_admin/issue_command', methods=['POST'])
def issue_command():

    data = json.loads(request.data)
    field = session.get('field')

    if request.method == 'POST':

        dest   = data['dest']
        config = data['conf']
        args   = data['args']
        button = data['button']

        avail_addr = [str(xb.get_64bit_addr()) for xb in CP.XB_net.get_devices()]

        pkt    = bytearray(3)
        pkt[0] = CP.CONFIGURE
        pkt[1] = int(config, 16)

        if int(config, 16) == SET_LOCATION and dest != BROADCAST:

            print(f"Setting {dest} Location to: {data['location']}")

            data = {'location' : data['location'],
                    'node'     : dest,
                    'field'    : field}

            node = NodeStatus.query.filter(NodeStatus.node == dest).first()
            if node:
                node.field     = field
                node.location  = data['location']
            else: db_session.add(NodeStatus(**data))

            db_session.commit()


        elif button == 'Issue Command':

            pkt[2]  = int(args, 16)
            _config = int(config, 16)

            # If just setting the configuration for one node
            if _config in CP.CONFIGURATIONS:

                if dest == BROADCAST:

                    nodes = NodeStatus.query.filter(NodeStatus.node.in_(avail_addr)).all()

                    for node in nodes:

                        node.config = _config

                        if _config == CP.REGISTER:

                            node.team = pkt[2]

                        if _config == CP.CAPTURE:

                            node.team = None

                else:

                    data = {'config'   : _config,
                            'node'     : dest,
                            'field'    : field}

                    node = NodeStatus.query.filter(NodeStatus.node == dest).first()
                    if node:

                        node.config    = _config

                        if _config == CP.REGISTER:
                            node.team = pkt[2]
                            data['team'] = pkt[2]

                        if _config == CP.CAPTURE:
                            node.team = None

                    else: db_session.add(NodeStatus(**data))

                db_session.commit()

            # Shift the pkt left to remove reconfigure command byte when
            # setting attributes like timers
            if CP.CAPT_TIME <= _config <= CP.ARM_TIME:

                pkt.pop(0)

                val_map = {CP.CAPT_TIME:'cap_time',
                           CP.BOMB_TIME:'bomb_time',
                           CP.MED_TIME :'med_time',
                           CP.CAP_PERC :'cap_asst',
                           CP.DIFF_TIME:'diff_time',
                           CP.ARM_TIME :'arm_time'}

                val, arg = _config, int(args, 16)

                if dest == BROADCAST:

                    nodes = NodeStatus.query.filter(NodeStatus.node.in_(avail_addr)).all()

                    for node in nodes:

                        setattr(node, val_map[val], arg)

                else:

                    data = {'node':dest, val_map[val]:arg, 'field':field}

                    node = NodeStatus.query.filter(NodeStatus.node == dest).first()
                    if node: setattr(node, val_map[val], arg)
                    else: db_session.add(NodeStatus(**data))

                db_session.commit()

            # Set medic times globally, because all nodes are handled the
            # same at the controller level
            if _config == CP.MED_TIME:

                print(f"Updating MEDIC TIME to {pkt[1]*10} seconds")

                # Return here because nothing gets sent to the node for this
                return make_response(jsonify({"message": "OK"}), 200)

            # Blast a few necessary commands to push the node into a
            # specicic capture configuration
            if _config == CP.SET_TEAM:

                if dest == BROADCAST:

                    nodes = NodeStatus.query.filter(NodeStatus.node.in_(avail_addr)).all()

                    for node in nodes:

                        node.team      = pkt[2]
                        node.stable    = 1
                        node.cap_time  = 6

                        data = {'node':node.node, 'team':pkt[2], 'field':field, 'action':'CAPTURE'}
                        db_session.add(Score(**data))

                    CP.send_data_broadcast(bytearray([CP.CAPT_TIME, 0]))
                    CP.send_data_broadcast(bytearray([CP.CAPTURE, pkt[2]]))
                    CP.send_data_broadcast(bytearray([CP.CAPT_TIME, 6]))

                else:

                    data = {'node':dest, 'team':pkt[2], 'field':field, 'action':'CAPTURE'}
                    db_session.add(Score(**data))

                    data = {'node':dest,'team':pkt[2]}
                    node = NodeStatus.query.filter(NodeStatus.node == dest).first()
                    if node:
                        node.team      = pkt[2]
                        node.stable    = 1
                        node.cap_time  = 6
                    else: db_session.add(NodeStatus(**data))

                    _64bit_addr = CP.XB_net.get_device_by_64(XBee64BitAddress.from_hex_string(dest))

                    CP.transmit_pkt(_64bit_addr, bytearray([CP.CAPT_TIME, 0]))
                    CP.transmit_pkt(_64bit_addr, bytearray([CP.CAPTURE, pkt[2]]))
                    CP.transmit_pkt(_64bit_addr, bytearray([CP.CAPT_TIME, 6]))

                db_session.commit()
                # Return here to prevent sending the final
                return make_response(jsonify({"message": "OK"}), 200)


            if dest == BROADCAST:

                print(f"BROADCASTING: ", *pkt)

                CP.send_data_broadcast(pkt)

            else:

                print(f"Sending {dest}:", *pkt)
                _64bit_addr = XBee64BitAddress.from_hex_string(dest)
                CP.transmit_pkt(CP.XB_net.get_device_by_64(_64bit_addr), pkt)


        elif button == 'End Game':

            nodes = NodeStatus.query.filter(NodeStatus.node.in_(avail_addr)).all()

            for node in nodes:

                if node.stable and node.team:

                    begin  = get_time_capture_complete(node.node)
                    closed = get_is_capture_closed(node.node)

                    # If a capture started and was not closed out normally
                    # then close it out
                    if begin and not closed:

                        held  = int((datetime.now() - begin).total_seconds())

                        tdat = {'node':node.node,'team':node.team,'field':field,'time_held':held,'action':'END GAME'}
                        db_session.add(Score(**tdat))

                        print(f"Ended timer count for {node.node}")

            db_session.commit()


        elif button == 'Start Game':

            _field = Field.query.filter(Field.field == field).first()

            team_times, team_score = {}, {}
            for score in _field.scores:

                team_times.setdefault(score.team, []).append(score.time_held or 0)
                team_score.setdefault(score.team, []).append(score.points or 0)

            plyr_score = {u:sum((s.points or 0) for s in u.scores) for u in _field.uids}

            for team in team_times:
                team_times[team] = sum(team_times[team])
                team_score[team] = sum(team_score[team])

            nd_times = {}
            for node in _field.nodes:

                times = {}
                for score in node.scores:
                    times.setdefault(score.team, []).append(score.time_held or 0)

                for team in times: times[team] = sum(times[team])
                nd_times[node] = times

                # Add time for nodes that are still under control
                begin = get_time_capture_complete(node.node)
                if node.stable and begin and not get_is_capture_closed(node.node) and node.team in times:

                    times[node.team]
                    held  = int((datetime.now() - begin).total_seconds())

                    nd_times[node][node.team] += held
                    team_times[node.team]     += held


                if node.config == CP.CAPTURE:

                    node.team = None;

                    _64bit_addr = CP.XB_net.get_device_by_64(XBee64BitAddress.from_hex_string(node.node))
                    CP.transmit_pkt(_64bit_addr, bytearray([CP.CONFIGURE, CP.CAPTURE]))


            db_session.commit()

            team_data = json.load(open("json/fields/" + field + ".json"))
            team_name = {int(n['value'], 16):n['text'] for n in team_data}

            data = {'field'        :field,
                    'teams'        :str([team_score.keys()]),
                    'team_name_map':str(team_name),
                    'times_by_team':str(team_times),
                    'times_by_node':str(nd_times),
                    'score_by_team':str(team_score),
                    'score_by_uid' :str(plyr_score),
                    }

            db_session.add(Game(**data))
            db_session.commit()

            # Delete the scores table data for the next game
            # use try/except to allow a rollback option if it gets sideways
            try:
                q = Score.query.filter(Score.node.in_(avail_addr))
                q.delete(synchronize_session='fetch')
                db_session.commit()
            except Exception as E:
                print(E)
                db_session.rollback()


        elif button == 'Discover Network':

            print("Discovering Network")
            CP.find_nodes()

    db_session.commit()

    return make_response(jsonify({"message": "OK"}), 200)




@bp.route('/pair_uid/get_uid', methods=['POST','GET'])
def get_uid():

    uid = CP.user_reg
    CP.user_reg = None

    if uid:

        print(uid)
        return make_response(jsonify({"uid": uid}), 200)

    return make_response(jsonify({"message": "OK"}), 200)
