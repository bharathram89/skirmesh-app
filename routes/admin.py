from database import db_session
from models.db_models import (UID, Team, Field, Score, Game, NodeStatus,
                              get_time_capture_complete, get_is_capture_closed,
                              get_field_scores)

from sqlalchemy import null
from flask import render_template, flash, jsonify, session, request, make_response
from flask import Blueprint

bp = Blueprint('admin', __name__, url_prefix='')

from datetime import datetime
from bs4 import BeautifulSoup as SOUP
import json

from pretty_print import print_time, print_perc


CMD_ARGS = {'TIME DATA'       : json.load(open("json/timer_values.json")),
            'SET ASSIST %'    : json.load(open("json/percent_values.json")),
            'SET POINT SCALE' : json.load(open("json/time_to_points.json")),
            'ALLOW MEDIC'     : json.load(open("json/yes_no.json"))}

# print(json.dumps(CMD_ARGS, indent=4, sort_keys=True))


# █▀▀ █▀█ █▄░█ █▀▀ █ █▀▀ █░█ █▀█ ▄▀█ ▀█▀ █ █▀█ █▄░█ █▀
# █▄▄ █▄█ █░▀█ █▀░ █ █▄█ █▄█ █▀▄ █▀█ ░█░ █ █▄█ █░▀█ ▄█

CONFIGURE = 0x00
REGISTER  = 0x01
QUERY     = 0x02
PAIR_UID  = 0x03
SET_TEAM  = 0x04
CAPTURE   = 0x0A
MEDIC     = 0x0E
BOMB      = 0xBB

BOMB_ARMED    = 0xBA
BOMB_DISARMED = 0xBD
BOMB_DETONATE = 0xDD


# █▀ ▀█▀ ▄▀█ ▀█▀ █░█ █▀   █▀█ █▀▀ █▀█ █░█ █▀▀ █▀ ▀█▀ █▀
# ▄█ ░█░ █▀█ ░█░ █▄█ ▄█   █▀▄ ██▄ ▀▀█ █▄█ ██▄ ▄█ ░█░ ▄█

ND_STATUS = 0x53


# ▀█▀ █ █▀▄▀█ █▀▀   █▀ █▀▀ ▀█▀ ▀█▀ █▀▀ █▀█ █▀
# ░█░ █ █░▀░█ ██▄   ▄█ ██▄ ░█░ ░█░ ██▄ █▀▄ ▄█

CAPT_TIME = 0x8A
BOMB_TIME = 0x8B
CAP_PERC  = 0x8C
DIFF_TIME = 0x8D
ARM_TIME  = 0x8F
MED_TIME  = 0x8E

SCALE_PTS = 0x9a
ALLOW_MED = 0X9b


SET_LOCATION = 0xff


# █▀▄▀█ █▀▀ █▄░█ █░█   █▀ █▀▀ ▀█▀ ▀█▀ █▀▀ █▀█ █▀
# █░▀░█ ██▄ █░▀█ █▄█   ▄█ ██▄ ░█░ ░█░ ██▄ █▀▄ ▄█
# This is primarly used to set the menu options
CMD_DICT = {
            REGISTER    : 'REGISTER',
            QUERY       : 'QUERY',
            CAPTURE     : 'CAPTURE',
            MEDIC       : 'MEDIC',
            BOMB        : 'BOMB',
            PAIR_UID    : 'PAIR UID',
            }


@bp.route('/node_admin')
def node_admin():

    field = session.get('field', None)

    error = None
    if not field:

        error = "Please select a Field and return to Node Admin"
        flash(error)

        return render_template('field_chooser.html', error=error)


    nodes = NodeStatus.query.filter(NodeStatus.field == field).all()

    # If initializing the field, we need to add the first game
    _field = Field.query.filter(Field.field == field).first()
    if not _field.games: db_session.add(Game(field=field))

    soup = SOUP(open('templates/fields/' + field + '.html'), 'html.parser')
    paths = soup.find_all('path')
    loc_json = json.dumps([{"text":path['id'],"value":(0,0)} for path in paths])

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
             'cmd_dict'    : CMD_DICT if nodes else None,
             'cmd_args'    : CMD_ARGS,
             'node_cols'   : ['node id', 'location', 'config', 'team',
                              'Capture\nTime', 'Capture\nAssist %', 'Point\nScale',
                              'Medic\nTime', 'Medic',
                              'Bomb\nFUS  |  ARM  |  DIS'],
             'node_status' : nodes,
             'print_time'  : print_time,
             'print_perc'  : print_perc,
             'field'       : field,
             'is_paused'   : False,
             'team_name'   : team_name,
             'error'       : error,
             }

    db_session.commit()

    return render_template('node_admin.html', **kwargs)



@bp.route('/node_admin/set_param', methods=['POST'])
def set_param():

    data = json.loads(request.data)
    field = session.get('field')

    val_map = {CAPT_TIME:'cap_time',
               BOMB_TIME:'bomb_time',
               CAP_PERC :'cap_asst',
               DIFF_TIME:'diff_time',
               ARM_TIME :'arm_time'}

    if request.method == 'POST':

        dest = data['dest']
        cmd  = int(data['cmd'], 16)
        arg  = int(data['arg'], 16)

        node = NodeStatus.query.filter(NodeStatus.node == dest).first()

        setattr(node, val_map[cmd], arg)

        db_session.commit()

    return make_response(jsonify({"message": "OK"}), 200)



@bp.route('/node_admin/send_broadcast', methods=['POST'])
def send_broadcast():

    data = json.loads(request.data)
    field = session.get('field')

    if request.method == 'POST':

        cmd  = int(data['cmd'], 16)
        arg  = int(data['arg'], 16)

        if data['bcst']:

            pass

    return make_response(jsonify({"message": "OK"}), 200)



@bp.route('/node_admin/set_config', methods=['POST'])
def set_config():

    data = json.loads(request.data)
    field = session.get('field')

    if request.method == 'POST':

        _field = Field.query.filter(Field.field == field).first()
        _game  = _field.games[-1]

        dest = data['dest']
        conf = int(data['conf'], 16)

        node = NodeStatus.query.filter(NodeStatus.node == dest).first()

        # If shifting away from capture, closeout the capture to award points/time
        if node.config == CAPTURE and node.stable and node.team:

            begin = get_time_capture_complete(node.node)
            # If a capture started and was not closed out normally
            # then close it out
            if begin and not node.scores[-1].time_held:

                held  = int((datetime.utcnow() - begin).total_seconds())

                tdat = {'node':node.node,
                        'team':node.team,
                        'field':field,
                        'points':held//node.point_scale,
                        'time_held':held,
                        'action':'RECONFIGURE',
                        'game':_game.id}

                db_session.add(Score(**tdat))

        node.config = conf
        node.team   = None if not 'team' in data else data['team']
        node.field  = field

        db_session.commit()

    return make_response(jsonify({"message": "OK"}), 200)



@bp.route('/node_admin/set_team', methods=['POST'])
def set_team():

    data = json.loads(request.data)
    field = session.get('field')

    if request.method == 'POST':

        _field = Field.query.filter(Field.field == field).first()
        _game  = _field.games[-1]

        dest = data['dest']
        team = data['team']

        score = {'node':dest,
                 'team':team,
                 'field':field,
                 'action':'CAPTURE',
                 'game':_game.id}

        db_session.add(Score(**score))

        node = NodeStatus.query.filter(NodeStatus.node == dest).first()

        node.team   = team
        node.stable = 1
        node.field  = field

        db_session.commit()

    return make_response(jsonify({"message": "OK"}), 200)



@bp.route('/node_admin/set_controller_data', methods=['POST'])
def set_controller_data():

    data = json.loads(request.data)
    field = session.get('field')

    _field = Field.query.filter(Field.field == field).first()
    _game  = _field.games[-1]

    val_map = {SET_LOCATION :'location',
               SCALE_PTS    :'point_scale',
               ALLOW_MED    :'allow_medic',
               MED_TIME     :'med_time',
               }

    if request.method == 'POST':

        dest = data['dest']
        cmd  = int(data['cmd'], 16)

        if cmd == SET_LOCATION:

            arg = data['arg'] if data['arg'] else null()

        else:

            arg  = int(data['arg'], 16) 

        node = NodeStatus.query.filter(NodeStatus.node == dest).first()

        setattr(node, val_map[cmd], arg)
        node.field = field

        if cmd == SCALE_PTS:

            if node.stable and node.team:

                begin = get_time_capture_complete(node.node)
                # If a capture started and was not closed out normally
                # then close it out
                if begin and not get_is_capture_closed(node.node):

                    held  = int((datetime.utcnow() - begin).total_seconds())

                    tdat = {'node':node.node,
                            'team':node.team,
                            'field':field,
                            'points':held//node.point_scale,
                            'time_held':held,
                            'action':'SET SCALE',
                            'game':_game.id}

                    db_session.add(Score(**tdat))

        db_session.commit()

    return make_response(jsonify({"message": "OK"}), 200)



@bp.route('/node_admin/issue_command', methods=['POST'])
def issue_command():

    data = json.loads(request.data)
    field = session.get('field')

    _field = Field.query.filter(Field.field == field).first()
    _game  = _field.games[-1]

    if request.method == 'POST':

        button = data['button']

        if button == 'Pause Game':

            # This closes out the times for all open nodes
            for node in _field.nodes:

                if node.stable and node.team:

                    begin  = get_time_capture_complete(node.node)
                    # If a capture started and was not closed out normally
                    # then close it out
                    if begin and not node.scores[-1].time_held:

                        held  = int((datetime.utcnow() - begin).total_seconds())

                        tdat = {'node':node.node,
                                'team':node.team,
                                'field':field,
                                'points':held//node.point_scale,
                                'time_held':held,
                                'action':'PAUSE GAME',
                                'game':_game.id}

                        db_session.add(Score(**tdat))

                        print(f"Ended timer count for {node.node}")

            db_session.commit()



        elif button == 'Resume Game':

            nodes = NodeStatus.query.filter(NodeStatus.field == field).all()

            for node in nodes:

                if node.config == CP.CAPTURE and node.team:

                    node.timestamp = datetime.utcnow()




        elif button == 'Start Game':

            db_session.add(Game(field=field))

            _field = Field.query.filter(Field.field == field).first()

            for node in _field.nodes:
                # Verify node in available addresses in the event it's not...
                if node.config == CAPTURE and node.location:

                    node.team = None

            db_session.commit()



    return make_response(jsonify({"message": "OK"}), 200)




# @bp.route('/pair_uid/get_uid', methods=['POST','GET'])
# def get_uid():
#
#     # PN532 IRQ pulls LOW  when ready
#     if not CP.NFC_IRQ.value:
#         # Pull the queue regardless of whether we keep it to clear the buffer
#         packet = CP.NFC.get_passive_target()
#         # Make sure the reader is looking for the next card
#         CP.NFC.listen_for_passive_target()
#
#         if packet and len(packet) == 4:
#             CP.user_reg = packet.hex()
#
#     uid = CP.user_reg
#     CP.user_reg = None
#
#     if uid: return make_response(jsonify({"uid": uid}), 200)
#
#     return make_response(jsonify({"message": "OK"}), 200)
