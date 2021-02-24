from database import db_session
from models.db_models import (UID, Team, Field, Score, Game, NodeStatus,
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
            'SET ASSIST %': json.load(open("json/percent_values.json")),
            'SCALE DATA'  : json.load(open("json/time_to_points.json"))}

# print(json.dumps(CMD_ARGS, indent=4, sort_keys=True))

BROADCAST    = "FFFF"


@bp.route('/node_admin')
def node_admin():


    field = session.get('field', CP.field)

    if not field:

        error = "Please select a Field and return to Node Admin"
        flash(error)

        return render_template('field_chooser.html', error=error)

    avail_addr = [str(xb.get_64bit_addr()) for xb in CP.XB_net.get_devices()]
    nodes = NodeStatus.query.filter(NodeStatus.node.in_(avail_addr)).all()

    # Use this to update the field status and ensure nodes are on the
    # right field, but I don't want to do it all the time...need a better way
    if CP.field != field:

        for node in nodes: node.field = field
        CP.field = field

    soup = SOUP(open('templates/fields/' + field + '.html'), 'html.parser')
    paths = soup.find_all('path')
    loc_json = json.dumps([{"text":path['id'],"value":(0,0)} for path in paths] + [{"text":"SWAP","value":(0,0)}])

    # Pull specific arguments for the field
    CMD_ARGS['SET LOCATION'] = json.loads(loc_json)
    field_cmd_args = json.load(open("json/fields/" + field + ".json"))
    CMD_ARGS['REGISTER'] = CMD_ARGS['SET TEAM'] = field_cmd_args

    team_name = {n['value']:n['text'] for n in field_cmd_args}

    _avail_teams_ = Team.query.all()
    for _team_ in [c['value'] for c in field_cmd_args]:

        if _team_ not in [t.team for t in _avail_teams_]:
            db_session.add(Team(**{'team':_team_}))

    kwargs = {
             'cmd_dict'    : CP.CMD_DICT if CP.end_nodes else None,
             'cmd_args'    : CMD_ARGS,
             'node_cols'   : ['node id', 'location', 'config', 'team',
                              'Capture\nTime', 'Capture\nAssist %', 'Point\nScale',
                              'Medic\nTime', 'Medic',
                              'Bomb\nFUS  |  ARM  |  DIS'],
             'node_status' : nodes,
             'print_time'  : print_time,
             'print_perc'  : print_perc,
             'field'       : field,
             'is_paused'   : CP.is_paused,
             'team_name'   : team_name,
             }

    db_session.commit()

    return render_template('node_admin.html', **kwargs)
    # return render_template('fields/' + field +'.html', admin=True, **kwargs)



@bp.route('/node_admin/issue_command', methods=['POST'])
def issue_command():

    data = json.loads(request.data)
    field = session.get('field', CP.field)

    if request.method == 'POST':

        dest   = data['dest']
        config = data['conf']
        args   = data['args']
        button = data['button']

        avail_addr = [str(xb.get_64bit_addr()) for xb in CP.XB_net.get_devices()]

        pkt    = bytearray(3)
        pkt[0] = CP.CONFIGURE
        pkt[1] = int(config, 16)

        if int(config, 16) == CP.SET_LOCATION and dest != BROADCAST:

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

            try:
                pkt[2:] = bytearray.fromhex(args)  #Grab the team
                print('tried', pkt)

            # Catch the case where we pass a single byte-like object for pretty
            # much everything  besides the team stuff and it can't get parsed
            # into a bytearray
            except ValueError:
                pkt[2] = int(args, 16)              #Pull int arguments
                print('failed', pkt)

            _config = int(config, 16)

            # If just setting the configuration for one node
            if _config in CP.CONFIGURATIONS:

                if dest == BROADCAST:

                    nodes = NodeStatus.query.filter(NodeStatus.node.in_(avail_addr)).all()

                    for node in nodes:

                        node.config = _config

                        if _config == CP.REGISTER:

                            node.team = pkt[2:].hex()

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
                            node.team = pkt[2:].hex()
                            data['team'] = pkt[2:].hex()

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
                    for node in nodes: setattr(node, val_map[val], arg)

                else:

                    data = {'node':dest, val_map[val]:arg, 'field':field}

                    node = NodeStatus.query.filter(NodeStatus.node == dest).first()
                    if node: setattr(node, val_map[val], arg)
                    else: db_session.add(NodeStatus(**data))

                db_session.commit()

            # medic is handled at the controller level
            if _config == CP.MED_TIME:

                # Return here because nothing gets sent to the node for this
                return make_response(jsonify({"message": "OK"}), 200)


            if _config == CP.SCALE_PTS:

                node = NodeStatus.query.filter(NodeStatus.node == dest).first()

                if node:

                    if node.stable and node.team:

                        begin = get_time_capture_complete(node.node)
                        # If a capture started and was not closed out normally
                        # then close it out
                        if begin and not get_is_capture_closed(node.node):

                            held  = int((datetime.now() - begin).total_seconds())

                            tdat = {'node':node.node,'team':node.team,'field':field,
                                    'points':held//node.point_scale,'time_held':held,
                                    'action':'SET SCALE'}
                            db_session.add(Score(**tdat))

                    _64bit_addr = XBee64BitAddress.from_hex_string(dest)
                    _pkt = CP._status(CP.XB_net.get_device_by_64(_64bit_addr), bytearray([]))
                    CP.transmit_pkt(CP.XB_net.get_device_by_64(_64bit_addr), _pkt)
                    # Only stop points if node was controlled by a team, otherwise
                    # it will prevent the next capture action from earning points
                    CP.halt_points = True if node.team else False

                    node.point_scale = int(args, 16)

                    db_session.commit()

                return make_response(jsonify({"message": "OK"}), 200)

            # Blast a few necessary commands to push the node into a
            # specicic capture configuration
            if _config == CP.SET_TEAM:

                if dest == BROADCAST:

                    nodes = NodeStatus.query.filter(NodeStatus.node.in_(avail_addr)).all()

                    for node in nodes:
                        # Skip nodes that are not in capture
                        if node.config != CP.CAPTURE: continue

                        node.team      = pkt[2:].hex()
                        node.stable    = 1

                        data = {'node':node.node, 'team':node.team, 'field':field, 'action':'CAPTURE'}
                        db_session.add(Score(**data))

                        db_session.commit()

                        # Send command to set the status to desired team in control
                        _64bit_addr = XBee64BitAddress.from_hex_string(node.node)
                        _pkt = CP._status(CP.XB_net.get_device_by_64(_64bit_addr), bytearray([]))
                        CP.transmit_pkt(CP.XB_net.get_device_by_64(_64bit_addr), _pkt)
                        CP.halt_points = True

                else:

                    data = {'node':dest, 'team':pkt[2:].hex(), 'field':field, 'action':'CAPTURE'}
                    db_session.add(Score(**data))

                    data = {'node':dest,'team':pkt[2:].hex()}
                    node = NodeStatus.query.filter(NodeStatus.node == dest).first()

                    if node:
                        node.team      = pkt[2:].hex()
                        node.stable    = 1
                    else:
                        node = NodeStatus(**data)
                        db_session.add(node)

                    db_session.commit()

                    _64bit_addr = XBee64BitAddress.from_hex_string(dest)
                    _pkt = CP._status(CP.XB_net.get_device_by_64(_64bit_addr), bytearray([]))
                    CP.transmit_pkt(CP.XB_net.get_device_by_64(_64bit_addr), _pkt)
                    CP.halt_points = True

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



        elif button == 'Pause Game':

            CP.is_paused = True

            nodes = NodeStatus.query.filter(NodeStatus.node.in_(avail_addr)).all()

            # This closes out the times for all open nodes
            for node in nodes:

                if node.stable and node.team:

                    begin  = get_time_capture_complete(node.node)
                    closed = get_is_capture_closed(node.node)

                    # If a capture started and was not closed out normally
                    # then close it out
                    if begin and not closed:

                        held  = int((datetime.now() - begin).total_seconds())

                        tdat = {'node':node.node,'team':node.team,'field':field,
                                'points':held//node.point_scale, 'time_held':held,
                                'action':'PAUSE GAME'}
                        db_session.add(Score(**tdat))

                        print(f"Ended timer count for {node.node}")

            db_session.commit()



        elif button == 'Resume Game':

            CP.is_paused = False

            nodes = NodeStatus.query.filter(NodeStatus.node.in_(avail_addr)).all()

            for node in nodes:

                if node.config == CP.CAPTURE:

                    _64bit_addr = XBee64BitAddress.from_hex_string(node.node)
                    pkt = CP._status(CP.XB_net.get_device_by_64(_64bit_addr), bytearray([]))

                    CP.transmit_pkt(CP.XB_net.get_device_by_64(_64bit_addr), pkt)
                    CP.halt_points = True



        elif button == 'Start Game':

            _field = Field.query.filter(Field.field == field).first()
            _teams = set([Team.query.filter(Team.team == u.team).first() for u in _field.uids])

            plyr_score = {u:sum((s.points or 0) for s in u.scores) for u in _field.uids}

            team_times = {t.team:sum((s.time_held or 0) if not s.uid else 0 for s in t.scores) for t in _teams}
            team_score = {t.team:sum((s.points or 0) if not s.uid else 0 for s in t.scores) for t in _teams}

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
                    team_times[node.team] += held
                    team_score[node.team] += held//node.point_scale

                # Verify node in available addresses in the event it's not...
                if node.config == CP.CAPTURE and node.node in avail_addr:

                    node.team = None;

                    _64bit_addr = XBee64BitAddress.from_hex_string(node.node)
                    CP.transmit_pkt(CP.XB_net.get_device_by_64(_64bit_addr), bytearray([CP.CONFIGURE, CP.CAPTURE]))

            db_session.commit()

            team_data = json.load(open("json/fields/" + field + ".json"))
            team_name = {n['value']:n['text'] for n in team_data}

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
