from database import db_session
from models.db_models import (UID, Team, Field, Score, Game, NodeStatus,
                              get_time_capture_complete, get_is_capture_closed,
                              get_field_scores)

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

CMD_ARGS = {'TIME DATA'       : json.load(open("json/timer_values.json")),
            'SET ASSIST %'    : json.load(open("json/percent_values.json")),
            'SET POINT SCALE' : json.load(open("json/time_to_points.json")),
            'ALLOW MEDIC'     : json.load(open("json/yes_no.json"))}

# print(json.dumps(CMD_ARGS, indent=4, sort_keys=True))


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



@bp.route('/node_admin/set_param', methods=['POST'])
def set_param():

    data = json.loads(request.data)
    field = session.get('field', CP.field)

    val_map = {CP.CAPT_TIME:'cap_time',
               CP.BOMB_TIME:'bomb_time',
               CP.CAP_PERC :'cap_asst',
               CP.DIFF_TIME:'diff_time',
               CP.ARM_TIME :'arm_time'}

    if request.method == 'POST':

        dest = data['dest']
        cmd  = int(data['cmd'], 16)
        arg  = int(data['arg'], 16)

        pkt = bytearray([cmd, arg])

        if not data['bcst']:
            _64bit_addr = XBee64BitAddress.from_hex_string(dest)
            CP.transmit_pkt(CP.XB_net.get_device_by_64(_64bit_addr), pkt)

        node = NodeStatus.query.filter(NodeStatus.node == dest).first()

        setattr(node, val_map[cmd], arg)

        db_session.commit()

    return make_response(jsonify({"message": "OK"}), 200)



@bp.route('/node_admin/send_broadcast', methods=['POST'])
def send_broadcast():

    data = json.loads(request.data)
    field = session.get('field', CP.field)


    if request.method == 'POST':

        cmd  = int(data['cmd'], 16)
        arg  = int(data['arg'], 16)

        if data['bcst']:

            CP.send_data_broadcast(bytearray([cmd, arg]))

    return make_response(jsonify({"message": "OK"}), 200)



@bp.route('/node_admin/set_config', methods=['POST'])
def set_config():

    data = json.loads(request.data)
    field = session.get('field', CP.field)

    print(data)
    if request.method == 'POST':

        dest = data['dest']
        conf = int(data['conf'], 16)

        pkt = bytearray([0x00, conf])

        node = NodeStatus.query.filter(NodeStatus.node == dest).first()

        if conf == CP.REGISTER:

            pkt = pkt +  bytearray().fromhex(data['team'])

        _64bit_addr = XBee64BitAddress.from_hex_string(dest)
        CP.transmit_pkt(CP.XB_net.get_device_by_64(_64bit_addr), pkt)

        node.config = conf
        node.team   = None if not 'team' in data else data['team']

        db_session.commit()

    return make_response(jsonify({"message": "OK"}), 200)



@bp.route('/node_admin/set_team', methods=['POST'])
def set_team():

    data = json.loads(request.data)
    field = session.get('field', CP.field)

    if request.method == 'POST':

        dest = data['dest']
        team = data['team']

        pkt = bytearray([0x04]) + bytearray().fromhex(team)

        score = {'node':dest, 'team':team, 'field':field, 'action':'CAPTURE'}
        db_session.add(Score(**score))

        node = NodeStatus.query.filter(NodeStatus.node == dest).first()

        node.team   = team
        node.stable = 1

        db_session.commit()

        _64bit_addr = XBee64BitAddress.from_hex_string(dest)
        _pkt = CP._status(CP.XB_net.get_device_by_64(_64bit_addr), bytearray([]))
        CP.transmit_pkt(CP.XB_net.get_device_by_64(_64bit_addr), _pkt)

        CP.halt_points = True

    return make_response(jsonify({"message": "OK"}), 200)



@bp.route('/node_admin/set_controller_data', methods=['POST'])
def set_controller_data():

    data = json.loads(request.data)
    field = session.get('field', CP.field)

    val_map = {CP.SET_LOCATION :'location',
               CP.SCALE_PTS    :'point_scale',
               CP.ALLOW_MED    :'allow_medic',
               CP.MED_TIME     :'med_time',
               }

    if request.method == 'POST':

        dest = data['dest']
        cmd  = int(data['cmd'], 16)
        arg  = int(data['arg'], 16) if cmd != CP.SET_LOCATION else data['arg']

        node = NodeStatus.query.filter(NodeStatus.node == dest).first()

        setattr(node, val_map[cmd], arg)

        if cmd == CP.SCALE_PTS:

            if node.stable and node.team:

                begin = get_time_capture_complete(node.node)
                # If a capture started and was not closed out normally
                # then close it out
                if begin and not get_is_capture_closed(node.node):

                    held  = int((datetime.utcnow() - begin).total_seconds())

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

        db_session.commit()

    return make_response(jsonify({"message": "OK"}), 200)



@bp.route('/node_admin/issue_command', methods=['POST'])
def issue_command():

    data = json.loads(request.data)
    field = session.get('field', CP.field)

    if request.method == 'POST':

        button = data['button']

        avail_addr = [str(xb.get_64bit_addr()) for xb in CP.XB_net.get_devices()]


        if button == 'Pause Game':

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

                        held  = int((datetime.utcnow() - begin).total_seconds())

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

            plyr_score, team_score, team_times, nd_times = get_field_scores(field)

            _field = Field.query.filter(Field.field == field).first()

            for node in _field.nodes if _field else []:
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

                for score in _field.scores:
                    db_session.delete(score)
                db_session.commit()

            except Exception as E:

                print(E)
                db_session.rollback()

            finally:

                db_session.commit()


        elif button == 'Discover Network':

            print("Discovering Network")
            CP.find_nodes()


    return make_response(jsonify({"message": "OK"}), 200)




@bp.route('/pair_uid/get_uid', methods=['POST','GET'])
def get_uid():

    uid = CP.user_reg
    CP.user_reg = None

    if uid: return make_response(jsonify({"uid": uid}), 200)

    return make_response(jsonify({"message": "OK"}), 200)
