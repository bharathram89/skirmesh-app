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

#RUNNING LOCALLY
if 'DATABASE_URL' in os.environ:

    DATABASE_URL = os.environ['DATABASE_URL']

else:

    DATABASE_URL = "postgres://mzyxzrexzzswvj:382b5066ff809bbc8c9c8b3767499604cd107fd43615a301011c99ed23ea6cf3@ec2-52-6-75-198.compute-1.amazonaws.com:5432/d2j7fdi5l857i"
    #DATABASE_URL = 'sqlite:////tmp/test.postgres'

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

# print(json.dumps(CMD_ARGS, indent=4, sort_keys=True))

SET_LOCATION = 0xFF
BROADCAST    = "FFFF"



application = Flask(__name__)
application.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URL
application.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
application.secret_key = 'a secret'



DB = SQLAlchemy(application)

import db_models as PG
from controller import CONTROL_POINT, END_NODE

# Creates/initializes the databases - not really necessary here...could
# manually initialize the database once, separately.
DB.create_all()


# This is awkward but necessary to prevent a circular import
if __name__ == '__main__':

    serial = '/dev/ttyUSB0'
    baud   = 115200

    CP = CONTROL_POINT(serial, baud, database=DB)



@application.route('/index/is_change', methods=['GET'])
def is_change():

    if request.method == 'GET':

        to_update = dict()

        for n in CP.end_nodes:

            cap_status  = PG.get_capture_status(n)
            node_status = PG.get_node_status(n)

            if node_status and cap_status:

                to_update[n] = {
                                'id'    : node_status.location,
                                'team'  : cap_status.team,
                                'color' : CP.TEAM_CMAP[cap_status.team],
                                'stable': cap_status.stable
                                }

        if to_update: return make_response(jsonify(to_update), 200)

    return make_response(jsonify(""), 200)



@application.route('/')
@application.route('/index')
def main_page():
    """
    Establish main page.
    """
    reg_teams = PG.get_registered_teams()
    teams = [PG.get_team_members(t) for t in reg_teams if reg_teams]
    _players_ = PG.get_player_names()

    #TODO circle back on this once we register players to see if it works...
    players =  {p.uid:p.lname for p in _players_ if p.uid}

    kwargs = {'author'     : "Brandon Zoss and Dustin Kuchenbecker",
              'name'       : "Battlefield Gaming Systems",
              'team_col'   : ['player'],
              'reg_teams'  : reg_teams,
              'teams'      : teams,
              'team_cmap'  : CP.TEAM_CMAP,
              'team_name'  : CP.TEAM_NAME,
              'players'    : players,
               }

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

            users = PG.AuthUsers(**data)

            DB.session.add(users)
            DB.session.commit()

            flash("Account Successfully Created")
            return redirect(url_for('main_page'))

        except Exception as E:

            error = 'That account already exists'
            flash(error)
            return render_template('registration.html', form=form, error=error)

    return render_template('registration.html', form=form)



@application.route('/login', methods=['POST','GET'])
def login():

    form = LoginForm(request.form)

    if request.method == 'POST' and form.validate():

        username = form.username.data
        password = form.password.data

        users = PG.get_auth_users()

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


    reg_teams  = PG.get_registered_teams()
    team_times = {tt[0]:tt[1] for tt in PG.get_time_held_by_team()}
    team_score = {ts[0]:ts[1] for ts in PG.get_score_by_team()}
    plyr_score = {ps[0]:ps[1] for ps in PG.get_score_by_uid()}

    _players_ = PG.get_player_names()
    players =  {p.uid:p.lname for p in _players_ if p.uid}

    nd_times = dict()
    for n in CP.end_nodes:

        times = PG.get_times_for_node(n)
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
              'players'    : players}

    return render_template('players.html', **kwargs)



@application.route('/user_reg', methods=['POST', 'GET'])
def user_reg(uid=None):

    form    = RegistrationForm(request.form)
    players = PG.get_player_names()

    if request.method == "POST" and form.validate():

        fname = form.fname.data
        lname = form.lname.data

        print("First name is: ", fname.upper())
        print("Last name is: ", lname.upper())

        data = {'fname':fname.upper(),
                'lname':lname.upper(),
               }

        try:

            DB.session.add(PG.Player(**data))
            DB.session.commit()

        except:

            error = 'Name already exists in database'
            print(error)
            flash(error)

            return render_template('user_reg.html', error=error)

        return redirect(url_for('user_reg'))

    return render_template('user_reg.html', form=form, Players=players)



@application.route('/node_admin')
def node_admin():

    nodes = PG.get_nodes()
    node_status = {n:PG.get_node_status(n) for n in nodes}

    kwargs = {

             'cmd_dict'    : CP.CMD_DICT if nodes else None,
             'cmd_args'    : CMD_ARGS,
             'node_cols'   : ['node id','location','configuration'],
             'node_status' : node_status,
             }

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


        if int(config, 16) == SET_LOCATION and dest != BROADCAST:

            print(f"Setting {dest} Location to: {data['location']}")

            CP.end_nodes[dest].location = data['location']

            data = {'location': CP.end_nodes[dest].location,
                    'config'  : CP.end_nodes[dest].configuration,
                    'node'    : dest}

            exists = PG.get_node_status(dest)
            if exists: exists.location = data['location']
            else: DB.session.add(PG.NodeStatus(**data))

            DB.session.commit()


        elif button == 'Issue Command':

            pkt[2] = int(args, 16)

            # If just setting the configuration for one node
            if int(config, 16) in CP.CONFIGURATIONS and dest in CP.end_nodes:

                data = {'location': CP.end_nodes[dest].location,
                        'config'  : int(config, 16),
                        'node'    : dest}

                exists = PG.get_node_status(dest)
                if exists: exists.config = int(config, 16)
                else: DB.session.add(PG.NodeStatus(**data))

                DB.session.commit()

            # If setting a BROADCAST configuration - apply to all nodes
            if int(config, 16) in CP.CONFIGURATIONS and dest == BROADCAST:

                for n in CP.end_nodes:

                    data = {'location': CP.end_nodes[n].location,
                            'config'  : int(config, 16),
                            'node'    : n}

                    exists = PG.get_node_status(n)
                    if exists: exists.config = int(config, 16)
                    else: DB.session.add(PG.NodeStatus(**data))

                    DB.session.commit()

            # Shift the pkt left to remove reconfigure command byte when
            # setting attributes like timers
            if CP.CAPT_TIME <= int(config, 16) <= CP.MED_TIME: pkt.pop(0)

            # Set medic times globally, because all nodes are handled the
            # same at the controller level
            if int(config, 16) == CP.MED_TIME:

                print(f"Updating MEDIC TIME to {pkt[1]*10} seconds")

                CP.MEDIC_TIME = int(pkt[1]*10)
                dest = BROADCAST


            # Blast a few necessary commands to push the node into a
            # specicic capture configuration
            if int(config, 16) == CP.SET_TEAM:

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

                cap_status = PG.get_capture_status(node)

                if cap_status and cap_status.stable:

                    begin  = PG.get_time_capture_complete(node)
                    closed = PG.get_is_capture_closed(node)

                    # If a capture started and was not closed out normally
                    # then close it out
                    if begin and not closed:

                        held  = int((datetime.now() - begin).total_seconds())

                        tdat = {'node':node,'team':cap_status.team,'time_held':held,'action':'END GAME'}
                        DB.session.add(PG.Score(**tdat))
                        DB.session.commit()

                        print(f"Ended timer count for {node}")


        elif button == 'Discover Network':

            print("Discovering Network")
            CP.find_nodes()

    return make_response(jsonify({"message": "OK"}), 200)



@application.route('/comms')
def comms_log():

    kwargs = {'cols_data' : PG.CommsData.__table__.columns.keys(),
              'data_data' : DB.session.query(PG.CommsData).order_by(PG.CommsData.id.desc()).all(),
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

        player = PG.get_player(player)
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
