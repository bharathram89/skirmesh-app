"""
BALLAHACK POINT CONTROL

@Author: Brandon Zoss, Dustin Kuchenbecker
@Date:   October, 2020

Setup and run on any Raspberry Pi model.
This code proves the minimum viable functions of a
nodes from which complex realworld gaming scenarios
can be launched and validated.
"""

from flask import Flask, render_template, flash, jsonify
from flask import request, redirect, url_for, make_response
from flask_sqlalchemy import SQLAlchemy

from datetime import datetime
from bs4 import BeautifulSoup as SOUP
import time, json

from digi.xbee.devices import XBeeDevice, XBee64BitAddress

import sqlite_functions as SQL

from forms import RegistrationForm, RegisterAccountForm, LoginForm

#DATABASE_URL = "postgres://wsdhikwqyjmawy:0ecec5742e44f0dc4a9f30c4288bbfe7f2d62047eacfb0880e1c7c1685a1ab41@ec2-23-20-70-32.compute-1.amazonaws.com:5432/ddijsq2vaoqd9a"
DATABASE_URL = 'sqlite:////home/kuch/Projects/battlefield/database.db'

soup = SOUP(open('templates/field.html'), 'html.parser')
paths = soup.find_all('path')
loc_json = json.dumps([{"text":path['id'],"value":(0,0)} for path in paths] + [{"text":"SWAP","value":(0,0)}])


CMD_ARGS = {
            'REGISTER'    : json.load(open("json/teams.json")),
            'SET TEAM'    : json.load(open("json/teams.json")),
            'SET LOCATION': json.loads(loc_json),
            'TIME DATA'   : json.load(open("json/timer_values.json"))
            }

# print(json.dumps(CMD_ARGS, indent=4, sort_keys=True))

SET_LOCATION = 0xFF
BROADCAST    = "FFFF"



application = Flask(__name__)
application.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URL
application.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
application.secret_key = 'a secret'



DB = SQLAlchemy(application)
from db_models import *
import db_models as PG
from controller import CONTROL_POINT, END_NODE

DB.create_all()

serial = '/dev/ttyUSB0'
baud   = 115200
if __name__ == '__main__':
    CP = CONTROL_POINT(serial, baud, database=DB)



@application.route('/index/is_change', methods=['GET'])
def is_change():

    if request.method == 'GET':

        # conn = SQL.create_connection(CP.DB_NAME)
        to_update = dict()

        for n in CP.end_nodes:

            # cap_status = SQL._get_capture_status(conn, n)
            # nod_status = SQL._get_nod_status(conn, n)

            cap_status  = PG.get_capture_status(n)
            node_status = PG.get_node_status(n)

            if node_status and cap_status:

                to_update[n] = {
                                'id'    : node_status.location,
                                'team'  : cap_status.team,
                                'color' : CP.TEAM_CMAP[cap_status.team],
                                'stable': cap_status.stable
                                }

        # conn.close()

        if to_update: return make_response(jsonify(to_update), 200)

    return make_response(jsonify(""), 200)



@application.route('/')
@application.route('/index')
def main_page():
    """
    Establish main page.
    """
    # conn = SQL.create_connection(CP.DB_NAME)

    # reg_teams = [i[0] for i in SQL._get_registered_teams(conn)]
    reg_teams = [t.team for t in PG.get_registered_teams()]
    # teams = [SQL._get_team_members(conn, t) for t in reg_teams if reg_teams]
    teams = [PG.get_team_members(t) for t in reg_teams if reg_teams]
    # _players_ = SQL._get_player_names(conn)
    _players_ = PG.get_player_names()

    # players =  {p.pop('uid'):p for p in _players_ if p.get('uid')}
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

    # conn.close()

    return render_template('field.html', **kwargs)



@application.route('/registration', methods=['POST','GET'])
def registration():

    form = RegisterAccountForm(request.form)

    if request.method == 'POST' and form.validate():

        username = form.username.data
        email = form.email.data
        password = form.password.data


        data = {'username':username,
                'email'   :email,
                'password':password,
               }

        try:
            # conn = SQL.create_connection(CP.DB_NAME)
            # SQL.add_row(conn, 'users', data)
            # conn.close()

            users = AuthUsers(**data)

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

        # conn = SQL.create_connection(CP.DB_NAME)
        # users = SQL._get_auth_users(conn)
        # conn.close()

        users = PG.get_auth_users()

        # valid_users = {k.pop('username'):k['password'] for k in users}
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



@application.route('/node_admin')
def node_admin():

    node_status = {n:PG.get_node_status(n) for n in CP.end_nodes}
    print(node_status)

    kwargs = {
             'node_dict'   : CP.end_nodes,
             'cmd_dict'    : CP.CMD_DICT if CP.end_nodes else None,
             'cmd_args'    : CMD_ARGS,
             'node_cols'   : ['node id','location','configuration'],
             'node_status' : node_status,
             }

    return render_template('node_admin.html', **kwargs)



@application.route('/players')
def players():

    # conn = SQL.create_connection(CP.DB_NAME)

    # reg_teams = [i[0] for i in SQL._get_registered_teams(conn)]
    reg_teams = [T.team for T in PG.get_registered_teams()]

    # tm_times = SQL._get_time_held_by_team(conn)
    tm_times = PG.get_time_held_by_team()
    # team_times = {tt['team']:tt['time'] for tt in tm_times}
    team_times = {tt[0]:tt[1] for tt in tm_times}

    # _players_ = SQL._get_player_names(conn)
    _players_ = PG.get_player_names()
    # players =  {p.pop('uid'):p for p in _players_ if p.get('uid')}
    players =  {p.uid:p.lname for p in _players_ if p.uid}

    nd_times = dict()
    for n in CP.end_nodes:
        # times = SQL._get_times_for_node(conn, n)
        times = PG.get_times_for_node(n)
        if times: nd_times[CP.end_nodes[n].location] = times

    kwargs = {'t_sc_cols'  : ['team', 'points', 'time'],
              # 'team_score' : SQL._score_by_team(conn),
              'team_score' : PG.get_score_by_team(),
              'p_sc_cols'  : ['player', 'points'],
              # 'plyr_score' : SQL._score_by_uid(conn),
              'plyr_score' : PG.get_score_by_uid(),
              'nodes'      : CP.end_nodes.keys(),
              't_tm_cols'  : ['team', 'time'],
              'team_times' : team_times,
              'nd_tm_cols' : ['team', 'time'],
              'node_times' : nd_times,
              'players'    : players}

    # conn.close()

    return render_template('players.html', **kwargs)



@application.route('/user_reg', methods=['POST', 'GET'])
def user_reg(uid=None):

    form = RegistrationForm(request.form)

    # conn = SQL.create_connection(CP.DB_NAME)
    # players = SQL._get_player_names(conn)
    players = PG.get_player_names()
    # conn.close()


    if request.method == "POST" and form.validate():
        fname = form.fname.data
        lname = form.lname.data

        print("First name is: ", fname.upper())
        print("Last name is: ", lname.upper())

        data = {'fname':fname.upper(),
                'lname':lname.upper(),
               }

        try:

            # conn = SQL.create_connection(CP.DB_NAME)
            # SQL.add_row(conn, 'player', data)
            DB.session.add(Player(**data))
            # conn.close()

        except:

            error = 'Name already exists in database'
            print(error)
            flash(error)
            # conn.close()

            return render_template('user_reg.html', error=error)

        return redirect(url_for('user_reg'))

    return render_template('user_reg.html', form=form, Players=players)



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

            # CP.exec_sql(SQL.add_row, 'node_status', data)
            DB.session.add(PG.NodeStatus(**data))
            DB.session.commit()


        elif button == 'Issue Command':

            pkt[2] = int(args, 16)

            # If just setting the configuration for one node
            if int(config, 16) in CP.CONFIGURATIONS and dest in CP.end_nodes:

                data = {'location': CP.end_nodes[dest].location,
                        'config'  : int(config, 16),
                        'node'    : dest}

                # CP.exec_sql(SQL.add_row, 'node_status', data)
                DB.session.add(PG.NodeStatus(**data))
                DB.session.commit()

            # If setting a BROADCAST configuration - apply to all nodes
            if int(config, 16) in CP.CONFIGURATIONS and dest == BROADCAST:

                for n in CP.end_nodes:

                    data = {'location': CP.end_nodes[n].location,
                            'config'  : int(config, 16),
                            'node'    : n}

                    # CP.exec_sql(SQL.add_row, 'node_status', data)
                    DB.session.add(PG.NodeStatus(**data))
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

            if dest == BROADCAST:

                print(f"BROADCASTING: ", *pkt)

                CP.send_data_broadcast(pkt)

            else:

                if int(config, 16) == CP.SET_TEAM:

                    CP.transmit_pkt(CP.end_nodes[dest]._64bit_addr,
                                    bytearray([CP.CAPT_TIME, 0]))
                    CP.transmit_pkt(CP.end_nodes[dest]._64bit_addr,
                                    bytearray([CP.CAPTURE, pkt[2]]))
                    CP.transmit_pkt(CP.end_nodes[dest]._64bit_addr,
                                    bytearray([CP.CAPT_TIME, 6]))

                else:

                    print(f"Sending {dest}:", *pkt)

                    CP.transmit_pkt(CP.end_nodes[dest]._64bit_addr, pkt)


        elif button == 'End Game':

            for node in CP.end_nodes:

                cap_status = CP.exec_sql(SQL._get_capture_status, node)
                cap_status = PG.get_capture_status(node)

                if cap_status and cap_status.stable:

                    # begin = CP.exec_sql(SQL._get_time_capture_complete, node)
                    begin = PG.get_time_capture_complete(node)
                    # open = CP.exec_sql(SQL._is_capture_open, node)
                    closed = PG.get_is_capture_closed(node)

                    if begin and not closed:

                        lost  = datetime.now()
                        held  = int((lost - begin).total_seconds())

                        tdat = {'node':node,'team':cap_status.team,'time_held':held,'action':'END GAME'}
                        # CP.exec_sql(SQL.add_row, 'score', tdat)
                        DB.session.add(PG.Score(**tdat))
                        DB.session.commit()

                        print(f"Ended timer count for {node}")


        elif button == 'Discover Network':

            print("Discovering Network")
            CP.find_nodes()

    return make_response(jsonify({"message": "OK"}), 200)



@application.route('/comms')
def comms_log():

    # conn = SQL.create_connection(CP.DB_NAME)

    kwargs = {'cols_data' : PG.CommsData.__table__.columns.keys(),
              'data_data' : DB.session.query(PG.CommsData).order_by(PG.CommsData.id.desc()).all(),
              'datetime'  : datetime,
              'time_fmt'  : CP.TIME_FMTR,
              'time_disp' : CP.TIME_DISP,
             }

    # conn.close()

    return render_template('comms.html', **kwargs)



@application.route('/user_reg/get_uid', methods=['POST','GET'])
def get_uid():

    while not CP.user_reg:
        pass

    uid = CP.user_reg
    CP.user_reg = None

    return make_response(jsonify({"uid": uid}), 200)



@application.route('/register_user', methods=['POST','GET'])
def register_user():

    while not CP.user_reg:
        pass

    uid = CP.user_reg.pop()

    return make_response(jsonify({"uid": uid}), 200)



@application.route('/user_reg/assign_uid', methods=['POST'])
def assign_uid():

    data = json.loads(request.data)

    if request.method == 'POST':

        player = data['player']
        uid = data['uid']

    conn = SQL.create_connection(CP.DB_NAME)

    data = {'id'  : player,
            'uid' : uid,
           }

    try:
        # CP.exec_sql(SQL.edit_row, 'player', data)
        player = PG.get_player(player)
        player.uid = uid
        DB.session.commit()

    except:
        print('UID already assigned to player')
        # conn.close()
        return redirect(url_for('user_reg'))

    # conn.close()

    return redirect(url_for('user_reg'))




if __name__ == '__main__':

    print("Initializing host controller")

    t = time.monotonic()
    while not CP.end_nodes and (time.monotonic() - t) < 10:
        CP.find_nodes()

    #print("Network:")
    #print(CP.XB_net.get_devices())

    # Configure and start the flask application
    application.jinja_env.auto_reload = True
    application.config['TEMPLATES_AUTO_RELOAD'] = True
    application.run(host='0.0.0.0')
