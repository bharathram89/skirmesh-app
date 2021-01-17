"""
IRL Systems - Battlefield  (C)

@Author: Brandon Zoss, Dustin Kuchenbecker
@Date:   October, 2020 - Present

Setup and run on any Raspberry Pi model.
This code proves the minimum viable functions of a
nodes from which complex realworld gaming scenarios
can be launched and validated.
"""

from flask import Flask, render_template, flash, jsonify
from flask import request, redirect, url_for, make_response
from flask_sqlalchemy import SQLAlchemy

import os
from datetime import datetime
from bs4 import BeautifulSoup as SOUP
import time, json

from forms import RegistrationForm, RegisterAccountForm, LoginForm
from pretty_print import print_time, print_perc

from dotenv import load_dotenv
load_dotenv(verbose=True)
DATABASE_URL = os.environ['DATABASE_URL']


soup = SOUP(open('templates/field.html'), 'html.parser')
paths = soup.find_all('path')
loc_json = json.dumps([{"text":path['id'],"value":(0,0)} for path in paths] + [{"text":"SWAP","value":(0,0)}])


CMD_ARGS = {
            'REGISTER'    : json.load(open("json/teams.json")),
            'SET TEAM'    : json.load(open("json/teams.json")),
            'SET LOCATION': json.loads(loc_json),
            'TIME DATA'   : json.load(open("json/timer_values.json")),
            'SET ASSIST %': json.load(open("json/percent_values.json"))
            }

TEAM_NAME = {int(t['value'], 16):t['text'] for t in CMD_ARGS['SET TEAM']}
TEAM_CMAP = {int(c['value'], 16):c['text'] for c in json.load(open("json/team_colors.json"))}

# print(json.dumps(CMD_ARGS, indent=4, sort_keys=True))

SET_LOCATION = 0xFF
BROADCAST    = "FFFF"



application = Flask(__name__)
application.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URL
application.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
application.secret_key = 'a secret'



DB = SQLAlchemy(application)



# This is awkward but necessary to prevent a circular import
if __name__ == '__main__':

    from db_models import *
    from controller import CONTROL_POINT

    serial = '/dev/ttyUSB0'
    baud   = 115200

    CP = CONTROL_POINT(serial, baud, database=DB)



@application.route('/index/is_change', methods=['GET'])
def is_change():

    if request.method == 'GET':

        to_update = dict()

        for n in CP.end_nodes:

            cap_status  = get_capture_status(n)
            node_status = get_node_status(n)

            if node_status and cap_status:

                to_update[n] = {
                                'id'    : node_status.location,
                                'team'  : cap_status.team,
                                'color' : CP.TEAM_CMAP[cap_status.team],
                                'stable': cap_status.stable
                                }

            DB.session.commit()

        if to_update: return make_response(jsonify(to_update), 200)

    return make_response(jsonify(""), 200)



@application.route('/')
@application.route('/index')
def main_page():
    """
    Establish main page.
    """
    reg_teams = get_registered_teams()
    teams = [get_team_members(t) for t in reg_teams if reg_teams]
    _players_ = get_player_names()

    #TODO circle back on this once we register players to see if it works...
    players =  {p.uid:p.lname for p in _players_ if p.uid}

    kwargs = {'author'     : "Brandon Zoss and Dustin Kuchenbecker",
              'name'       : "Battlefield Gaming Systems",
              'team_col'   : ['player'],
              'reg_teams'  : reg_teams,
              'teams'      : teams,
              'team_cmap'  : TEAM_CMAP,
              'team_name'  : TEAM_NAME,
              'players'    : players,
               }

    DB.session.commit()

    return render_template('field.html', **kwargs)



@application.route('/registration', methods=['POST','GET'])
def registration():

    form = RegisterAccountForm(request.form)

    if request.method == 'POST' and form.validate():

        data = {'username':form.username.data,
                'email'   :form.email.data,
                'password':form.password.data,
               }

        try:

            users = AuthUsers(**data)
            DB.session.add(users)
            DB.session.commit()

            flash("Account Successfully Created")
            return redirect(url_for('main_page'))

        except Exception as E:

            error = 'That account already exists'
            flash(error)

        finally:

            DB.session.commit()

            return render_template('registration.html', form=form, error=error)

    return render_template('registration.html', form=form)



@application.route('/login', methods=['POST','GET'])
def login():

    form = LoginForm(request.form)

    if request.method == 'POST' and form.validate():

        username = form.username.data
        password = form.password.data

        users = get_auth_users()
        DB.session.commit()

        valid_users = {k.username:k.password for k in users}

        if username in valid_users.keys():

            if password == valid_users[username]:

                print('You are logged in')
                flash(f'Welcome, {username}!')

                session['logged_in'] = True
                session['username'] = username

                return redirect(url_for('main_page'))

            else:

                error = 'Invalid Password'
                print(error)
                flash(error)

                return render_template('login.html', form=form, error=error)

        else:

            error = 'No account exists'
            print(error)
            flash(error)

            return render_template('login.html', form=form, error=error)

        return redirect(url_for('login'))

    return render_template('login.html', form=form)



@application.route('/logout')
def logout():

    session['logged_in'] = False
    flash('Logged Out')

    return redirect(url_for('main_page'))



@application.route('/players')
def players():

    reg_teams  = get_registered_teams()
    team_times = {tt[0]:tt[1] for tt in get_time_held_by_team()}
    team_score = {ts[0]:ts[1] for ts in get_score_by_team()}
    plyr_score = {ps[0]:ps[1] for ps in get_score_by_uid()}

    _players_ = get_player_names()
    players =  {p.uid:p.lname for p in _players_ if p.uid}

    nd_times = dict()
    for n in CP.end_nodes:

        times = get_times_for_node(n)
        if times: nd_times[CP.end_nodes[n].location] = times

    kwargs = {'t_sc_cols'  : ['team', 'points', 'time'],
              'team_score' : team_score,
              'p_sc_cols'  : ['player', 'points'],
              'plyr_score' : plyr_score,
              'nodes'      : CP.end_nodes.keys(),
              't_tm_cols'  : ['team', 'time'],
              'team_times' : team_times,
              'nd_tm_cols' : ['team', 'time'],
              'node_times' : nd_times,
              'players'    : players,
              'print_time' : print_time,
              'team_name'  : TEAM_NAME}

    DB.session.commit()

    return render_template('players.html', **kwargs)



@application.route('/user_reg', methods=['POST', 'GET'])
def user_reg(uid=None):

    form  = RegistrationForm(request.form)
    error = None

    players = get_player_names()
    DB.session.commit()

    if request.method == "POST" and form.validate():

        fname = form.fname.data
        lname = form.lname.data

        data = {'fname':fname.upper(),
                'lname':lname.upper(),
               }

        try:

            DB.session.add(Player(**data))

        except:

            error = 'Name already exists in database'
            print(error)
            flash(error)

        finally:

            DB.session.commit()

            return render_template('user_reg.html', form=form, error=error)

    return render_template('user_reg.html', form=form, Players=players)



@application.route('/node_admin')
def node_admin():

    node_status = {n:get_node_status(n) for n in CP.end_nodes}

    kwargs = {
             'node_dict'   : CP.end_nodes,
             'cmd_dict'    : CP.CMD_DICT if CP.end_nodes else None,
             'cmd_args'    : CMD_ARGS,
             'node_cols'   : ['node id','location','configuration',
                              'Capture Time', 'Medic Time', 'Bomb Time',
                              'Capture Assist %'],
             'node_status' : node_status,
             'print_time'  : print_time,
             'print_perc'  : print_perc,
             }

    DB.session.commit()

    return render_template('node_admin.html', **kwargs)



@application.route('/node_admin/issue_command', methods=['POST'])
def issue_command():

    data = json.loads(request.data)

    if request.method == 'POST':

        dest   = data['dest']
        config = data['conf']
        args   = data['args']
        button = data['button']

        pkt    = bytearray(3)
        pkt[0] = CP.CONFIGURE
        pkt[1] = int(config, 16)


        node_status = {n:get_node_status(n) for n in CP.end_nodes}
        capture_status = {c:get_capture_status(c) for c in CP.end_nodes}

        if int(config, 16) == SET_LOCATION and dest != BROADCAST:

            print(f"Setting {dest} Location to: {data['location']}")

            CP.end_nodes[dest].location = data['location']

            data = {
                    'location' : CP.end_nodes[dest].location,
                    'node'     : dest,
                   }

            exists = get_node_status(dest)
            if exists: exists.location = data['location']
            else: DB.session.add(NodeStatus(**data))

            DB.session.commit()


        elif button == 'Issue Command':

            pkt[2] = int(args, 16)

            # If just setting the configuration for one node
            if int(config, 16) in CP.CONFIGURATIONS:

                for node in CP.end_nodes if dest == BROADCAST else [dest]:

                    CP.end_nodes[node].configuration = int(config, 16)

                    data = {
                            'config'   : int(config, 16),
                            'node'     : node,
                           }

                    exists = get_node_status(node)
                    if exists: exists.config = int(config, 16)
                    else: DB.session.add(NodeStatus(**data))

                    DB.session.commit()

            # Shift the pkt left to remove reconfigure command byte when
            # setting attributes like timers
            if CP.CAPT_TIME <= int(config, 16) <= CP.MED_TIME:

                pkt.pop(0)

                val_map = {CP.CAPT_TIME:'cap_time',
                           CP.BOMB_TIME:'bomb_time',
                           CP.MED_TIME :'med_time',
                           CP.CAP_PERC :'cap_asst'}

                val, arg = int(config, 16), int(args, 16)

                for node in CP.end_nodes if dest == BROADCAST else [dest]:

                    data = {'node':node,val_map[val]:arg}

                    exists = get_node_status(node)
                    if exists:

                        if val == CP.CAPT_TIME:

                            exists.cap_time  = arg
                            data['cap_time'] = arg

                        elif val == CP.BOMB_TIME:

                            exists.bomb_time  = arg
                            data['bomb_time'] = arg

                        elif val == CP.MED_TIME:

                            exists.med_time  = arg
                            data['med_time'] = arg

                        elif val == CP.CAP_PERC:

                            exists.cap_asst  = arg
                            data['cap_asst'] = arg

                    else:

                        DB.session.add(NodeStatus(**data))

                    DB.session.commit()
            # Set medic times globally, because all nodes are handled the
            # same at the controller level
            if int(config, 16) == CP.MED_TIME:

                print(f"Updating MEDIC TIME to {pkt[1]*10} seconds")

                CP.MEDIC_TIME = int(pkt[1]*10)
                dest = BROADCAST


            # Blast a few necessary commands to push the node into a
            # specicic capture configuration
            if int(config, 16) == CP.SET_TEAM:

                for node in CP.end_nodes if dest == BROADCAST else [dest]:

                    data = {'node':node, 'team':pkt[2], 'action':'CAPTURE'}
                    DB.session.add(Score(**data))

                    data = {'node':node, 'team':pkt[2], 'stable':1}
                    exists = get_capture_status(node)
                    if exists:
                        exists.team      = pkt[2]
                        exists.stable    = 1
                        exists.timestamp = datetime.now()
                    else: DB.session.add(CaptureStatus(**data))

                    data = {'node':node, 'config':CP.CAPTURE, 'cap_time':6}
                    exists = get_node_status(node)
                    if exists:
                        exists.cap_time  = 6
                        exists.timestamp = datetime.now()
                    else: DB.session.add(NodeStatus(**data))

                    DB.session.commit()
                    
                if dest == BROADCAST:

                    CP.send_data_broadcast(bytearray([CP.CAPT_TIME, 0]))
                    CP.send_data_broadcast(bytearray([CP.CAPTURE, pkt[2]]))
                    CP.send_data_broadcast(bytearray([CP.CAPT_TIME, 6]))

                else:

                    _64bit_addr = CP.end_nodes[dest]._64bit_addr

                    CP.transmit_pkt(_64bit_addr, bytearray([CP.CAPT_TIME, 0]))
                    CP.transmit_pkt(_64bit_addr, bytearray([CP.CAPTURE, pkt[2]]))
                    CP.transmit_pkt(_64bit_addr, bytearray([CP.CAPT_TIME, 6]))

                # Return here to prevent sending the final
                return make_response(jsonify({"message": "OK"}), 200)


            if dest == BROADCAST:

                print(f"BROADCASTING: ", *pkt)

                CP.send_data_broadcast(pkt)

            else:

                print(f"Sending {dest}:", *pkt)

                CP.transmit_pkt(CP.end_nodes[dest]._64bit_addr, pkt)


        elif button == 'End Game':

            for node in CP.end_nodes:

                cap_status = get_capture_status(node)

                if cap_status and cap_status.stable:

                    begin  = get_time_capture_complete(node)
                    closed = get_is_capture_closed(node)

                    # If a capture started and was not closed out normally
                    # then close it out
                    if begin and not closed:

                        held  = int((datetime.now() - begin).total_seconds())

                        tdat = {'node':node,'team':cap_status.team,'time_held':held,'action':'END GAME'}
                        DB.session.add(Score(**tdat))
                        DB.session.commit()

                        print(f"Ended timer count for {node}")

                DB.session.commit()


        elif button == 'Discover Network':

            print("Discovering Network")
            CP.find_nodes()

    return make_response(jsonify({"message": "OK"}), 200)



@application.route('/comms')
def comms_log():

    kwargs = {'cols_data' : CommsData.__table__.columns.keys(),
              'data_data' : DB.session.query(CommsData).order_by(CommsData.id.desc()).all(),
              'datetime'  : datetime,
              'time_disp' : CP.TIME_DISP,
             }

    return render_template('comms.html', **kwargs)



# TODO: Make this a listener function and just pop the UID if it gets one
@application.route('/user_reg/get_uid', methods=['POST','GET'])
def get_uid():

    while not CP.user_reg:

        pass

    uid = CP.user_reg
    CP.user_reg = None

    return make_response(jsonify({"uid": uid}), 200)



# TODO: I don't understand the need for all of these exact same functions
@application.route('/register_user', methods=['POST','GET'])
def register_user():

    while not CP.user_reg:

        pass

    uid = CP.user_reg.pop()

    return make_response(jsonify({"uid": uid}), 200)



# TODO: I have no idea if all this still works
@application.route('/user_reg/assign_uid', methods=['POST'])
def assign_uid():

    data = json.loads(request.data)

    if request.method == 'POST':

        player = data['player']
        uid = data['uid']

    data = {'id'  : player,
            'uid' : uid,
           }

    try:

        player = get_player(player)
        player.uid = uid
        DB.session.commit()

    except:

        print('UID already assigned to player')
        return redirect(url_for('user_reg'))

    return redirect(url_for('user_reg'))




if __name__ == '__main__':

    print("Initializing host controller")

    t = time.monotonic()
    while not CP.end_nodes and (time.monotonic() - t) < 10:

        CP.find_nodes()

    # Configure and start the flask application
    application.jinja_env.auto_reload = True
    application.config['TEMPLATES_AUTO_RELOAD'] = True
    application.run(host='0.0.0.0')
