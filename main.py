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
from wtforms import Form, BooleanField, TextField, PasswordField, validators
from datetime import datetime
from bs4 import BeautifulSoup as SOUP
import time, json

from digi.xbee.devices import XBeeDevice, XBee64BitAddress

soup = SOUP(open('templates/field.html'), 'html.parser')
paths = soup.find_all('path')
loc_json = json.dumps([{"text":path['id'],"value":(0,0)} for path in paths] + [{"text":"SWAP","value":(0,0)}])

import sqlite_functions as SQL
from controller import CONTROL_POINT, END_NODE

class RegistrationForm(Form):
    fname = TextField('First Name', [validators.Length(min=2, max=20)])
    lname = TextField('Last Name', [validators.Length(min=2, max=20)])

application = Flask(__name__)
application.secret_key = 'a secret'

serial = '/dev/ttyUSB0'
baud   = 115200
CP = CONTROL_POINT(serial, baud)

CMD_ARGS = {
            'REGISTER'    : json.load(open("json/teams.json")),
            'SET LOCATION': json.loads(loc_json),
            'TIME DATA'   : json.load(open("json/timer_values.json"))
            }

# print(json.dumps(CMD_ARGS, indent=4, sort_keys=True))

SET_LOCATION = 0xFF
BROADCAST    = "FFFF"


@application.route('/index/is_change', methods=['GET'])
def is_change():

    if request.method == 'GET':

        conn = SQL.create_connection(CP.DB_NAME)
        to_update = dict()

        for n in CP.end_nodes:

            status = SQL._get_capture_status(conn, n)

            if CP.end_nodes[n].location and status:

                to_update[n] = {
                                'id'    : CP.end_nodes[n].location,
                                'team'  : status[1],
                                'color' : CP.TEAM_CMAP[status[1]],
                                'stable': status[2]
                                }

        conn.close()

        if to_update: return make_response(jsonify(to_update), 200)

    return make_response(jsonify(""), 200)


@application.route('/')
@application.route('/index')
def main_page():
    """
    Establish main page.
    """
    conn = SQL.create_connection(CP.DB_NAME)

    reg_teams = [i[0] for i in SQL._get_registered_teams(conn)]
    teams = [SQL._get_team_members(conn, t) for t in reg_teams]

    _players_ = SQL._get_player_names(conn)
    players =  {p.pop('uid'):p for p in _players_ if p.get('uid')}

    kwargs = {'author'     : "Brandon Zoss and Dustin Kuchenbecker",
              'name'       : "Battlefield Gaming Systems",
              'team_col'   : ['player'],
              'reg_teams'  : reg_teams,
              'teams'      : teams,
              'team_cmap'  : CP.TEAM_CMAP,
              'team_name'  : CP.TEAM_NAME,
              'players'    : players,
               }

    conn.close()

    return render_template('field.html', **kwargs)


@application.route('/node_admin')
def node_admin():


    kwargs = {
             'node_dict':CP.end_nodes,
             'cmd_dict' :CP.CMD_DICT if CP.end_nodes else None,
             'cmd_args' :CMD_ARGS
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

            CP.exec_sql(SQL.add_row, 'node_status', data)


        elif button == 'Issue Command':

            pkt[2] = int(args, 16)

            if int(config, 16) in CP.CONFIGURATIONS and dest in CP.end_nodes:

                data = {'location': CP.end_nodes[dest].location,
                        'config'  : config,
                        'node'    : dest}

                CP.exec_sql(SQL.add_row, 'node_status', data)

            # Shift the pkt left to remove reconfigure command byte when
            # setting attributes like timers
            if CP.CAPT_TIME <= int(config, 16) <= CP.MED_TIME: pkt.pop(0)

            # Set medic times globally, because all nodes are handled the
            # same at the controller level
            if int(config, 16) == CP.MED_TIME:

                print(f"Updating MEDIC TIME to {pkt[1]*10} seconds")

                CONTROL_POINT.MEDIC_TIME = int(pkt[1]*10)
                dest = BROADCAST

            if dest == BROADCAST:

                print(f"BROADCASTING: ", *pkt)

                CP.send_data_broadcast(pkt)

            else:

                print(f"Sending {dest}:", *pkt)

                CP.transmit_pkt(CP.end_nodes[dest]._64bit_addr, pkt)


        elif button == 'End Game':

            for node in CP.end_nodes:

                cap_status = CP.exec_sql(SQL._get_capture_status, node)

                if cap_status and cap_status[2]:

                    begin = CP.exec_sql(SQL._get_time_capture_complete, node)
                    open = CP.exec_sql(SQL._is_capture_open, node)

                    if begin and open:

                        begin = datetime.strptime(begin[0], CP.TIME_FMTR)
                        lost  = datetime.now()
                        held  = int((lost - begin).total_seconds())

                        tdat = {'node':node,'team':cap_status[1],'time_held':held,'action':'END GAME'}
                        CP.exec_sql(SQL.add_row, 'score', tdat)

                        print(f"Ended timer count for {node}")


        elif button == 'Discover Network':

            print("Discovering Network")
            CP.find_nodes()

    return make_response(jsonify({"message": "OK"}), 200)


@application.route('/players')
def players():

    conn = SQL.create_connection(CP.DB_NAME)

    reg_teams = [i[0] for i in SQL._get_registered_teams(conn)]

    tm_times = SQL._get_time_held_by_team(conn)
    team_times = {tt['team']:tt['time'] for tt in tm_times}

    _players_ = SQL._get_player_names(conn)
    players = {p.pop('uid'):p for p in _players_ if p.get('uid')}

    nd_times = dict()
    for n in CP.end_nodes:
        times = SQL._get_times_for_node(conn, n)
        if times: nd_times[CP.end_nodes[n].location] = times

    kwargs = {'t_sc_cols'  : ['team', 'points', 'time'],
              'team_score' : SQL._score_by_team(conn),
              'p_sc_cols'  : ['player', 'points'],
              'plyr_score' : SQL._score_by_uid(conn),
              'nodes'      : CP.end_nodes.keys(),
              't_tm_cols'  : ['team', 'time'],
              'team_times' : team_times,
              'nd_tm_cols' : ['team', 'time'],
              'node_times' : nd_times,
              'players'    : players}

    conn.close()

    return render_template('players.html', **kwargs)


@application.route('/comms')
def comms_log():

    conn = SQL.create_connection(CP.DB_NAME)

    kwargs = {'cols_data'  :   SQL.get_col_names(conn,'data'),
              'data_data'  :   SQL._get_table(conn,'data'),
              'datetime'   :   datetime,
              'time_fmt'   :   CP.TIME_FMTR,
              'time_disp'  :   CP.TIME_DISP,
             }

    conn.close()

    return render_template('comms.html', **kwargs)


@application.route('/user_reg/get_uid', methods=['POST','GET'])
def get_uid():

    while not CP.user_reg:
        pass

    uid = CP.user_reg
    CP.user_reg = None

    return make_response(jsonify({"uid": uid}), 200)


@application.route('/user_reg', methods=['POST', 'GET'])
def user_reg(uid=None):

    form = RegistrationForm(request.form)

    conn = SQL.create_connection(CP.DB_NAME)

    players = SQL._get_player_names(conn)
    print(players)

    if request.method == "POST" and form.validate():
        fname = form.fname.data
        lname = form.lname.data

        print("First name is: ", fname.upper())
        print("Last name is: ", lname.upper())

        data = {'fname':fname.upper(),
                'lname':lname.upper(),
               }

        try:

            SQL.add_row(conn, 'player', data)

        except:

            print('Name already exists in database')
            flash('Name already exists in database')
            conn.close()
            return redirect(url_for('user_reg'))

        conn.close()

        return redirect(url_for('user_reg'))

    conn.close()

    return render_template('user_reg.html',
                           form=form,
                           Players=players,
                          )


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
        CP.exec_sql(SQL.edit_row, 'player', data)
    except:
        print('UID already assigned to player')
        conn.close()
        return redirect(url_for('user_reg'))

    conn.close()

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
