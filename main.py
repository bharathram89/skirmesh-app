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
from datetime import datetime
import time, json

from digi.xbee.devices import XBeeDevice, XBee64BitAddress

import sqlite_functions as SQL
from controller import CONTROL_POINT, END_NODE

application = Flask(__name__)


serial = '/dev/ttyUSB0'
baud   = 115200
CP = CONTROL_POINT(serial, baud)

# Load location data
LOCATION_DATA = json.load(open("locations.json"))
_LOC_NAMES = {loc['value'] : loc['text'] for loc in LOCATION_DATA}

CMD_ARGS = {
            'REGISTER'    : json.load(open("teams.json")),
            'SET LOCATION': LOCATION_DATA,
            'TIME DATA'   : json.load(open("timer_values.json"))
            }

# print(json.dumps(CMD_ARGS, indent=4, sort_keys=True))

SET_LOCATION = 0xFF
BROADCAST    = "FFFF"

@application.route('/index/is_change', methods=['POST','GET'])
def is_change():

    if request.method == 'GET':

        conn = SQL.create_connection(CP.DB_NAME)

        change = False
        to_update = dict()

        for n in CP.end_nodes:

            status = SQL._get_capture_status(conn, n)
            change = True if CP.end_nodes[n].status != status else False
            CP.end_nodes[n].status = status

            if change:

                to_update[n] = {
                                'color' : CP.TEAM_CMAP[status[1]],
                                'stable': status[2]
                                }

        conn.close()

        if to_update:

            return jsonify(to_update)

        else:

            return jsonify("")

    return redirect(url_for('index'))



@application.route('/')
@application.route('/index')
def main_page():
    """
    Establish main page.
    """
    conn = SQL.create_connection(CP.DB_NAME)

    reg_teams = [i[0] for i in SQL._get_registered_teams(conn)]
    teams = [SQL._get_team_members(conn, t) for t in reg_teams]

    node_status, centers = dict(), dict()

    for n in CP.end_nodes:

        status = SQL._get_capture_status(conn, n)

        if status:
            node_status[n] = status
            CP.end_nodes[n].status = status
            centers[n] = CP.end_nodes[n].location


    kwargs = {'author'     : "Brandon Zoss and Dustin Kuchenbecker",
              'name'       : "Battlefield Gaming Systems",
              'team_col'   : ['player'],
              'reg_teams'  : reg_teams,
              'teams'      : teams,
              'team_cmap'  : CP.TEAM_CMAP,
              'team_name'  : CP.TEAM_NAME,
              'node_status': node_status,
              'centers'    : centers,
               }

    conn.close() #My functions close connections

    return render_template('index.html', **kwargs)



@application.route('/node_admin')
def node_admin():


    kwargs = {
             'node_dict':CP.end_nodes,
             'cmd_dict' :CP.CMD_DICT if CP.end_nodes else None,
             'cmd_args' :CMD_ARGS
             }

    return render_template('node_admin.html', **kwargs)



@application.route('/node_admin/issue_command', methods=['POST','GET'])
def issue_command():

    data = json.loads(request.data)

    if request.method == 'POST':

        dest   = data['dest']
        config = data['conf']
        args   = data['args']
        button = data['button']

        pkt = bytearray(3)
        pkt[0] = CP.CONFIGURE
        pkt[1] = int(config, 16)

        if pkt[1] == SET_LOCATION and dest != BROADCAST:

            CP.end_nodes[dest].location = eval(args)
            CP.end_nodes[dest].loc_name = _LOC_NAMES[args]

        elif button == 'Issue Command':

            pkt[2] = int(args, 16)

            # Shift the pkt left to remove reconfigure command byte when
            # setting attributes like timers
            if CP.CAPT_TIME <= pkt[1] <= CP.MED_TIME: pkt.pop(0)

            # Set medic times globally, because all nodes are handled the
            # same at the controller level
            if pkt[0] == CP.MED_TIME:

                CONTROL_POINT.MEDIC_TIME = int(pkt[1]*10)
                dest = BROADCAST

            if dest == BROADCAST: CP.send_data_broadcast(pkt)

            else: CP.transmit_pkt(CP.end_nodes[dest]._64bit_addr, pkt)

        elif button == 'End Game':

            for node in CP.end_nodes:

                own_uid, own_team, cap_stable, cap_time = CP.exec_sql(SQL._get_capture_status, node)

                if cap_stable:

                    begin = CP.exec_sql(SQL._get_time_capture_complete)

                    if begin:

                        begin = datetime.strptime(begin[0], CP.TIME_FMTR)
                        lost  = datetime.utcnow()
                        held  = int((lost - begin).total_seconds())

                        tdat = {'team':own_team,'time_held':held,'action':node}
                        CP.exec_sql(SQL.add_row, 'score', tdat)

        elif button == 'Discover Network':

            CP.find_nodes()

    return make_response(jsonify({"message": "OK"}), 200)



@application.route('/players')
def players():

    conn = SQL.create_connection(CP.DB_NAME)

    reg_teams = [i[0] for i in SQL._get_registered_teams(conn)]

    tm_times = SQL._get_time_held_by_team(conn)
    team_times = {tt['team']:tt['time'] for tt in tm_times}

    nd_times = {CP.end_nodes[n].loc_name: SQL._get_times_for_node(conn, n) for n in CP.end_nodes}

    kwargs = {'t_sc_cols'  : ['team', 'points', 'time'],
              'team_score' : SQL._score_by_team(conn),
              'p_sc_cols'  : ['player', 'points'],
              'plyr_score' : SQL._score_by_uid(conn),
              'nodes'      : CP.end_nodes.keys(),
              't_tm_cols'  : ['team', 'time'],
              'team_times' : team_times,
              'nd_tm_cols' : ['team', 'time'],
              'node_times' : nd_times}

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




if __name__ == '__main__':

    print("Initializing host controller")

    t = time.monotonic()
    while not CP.end_nodes and (time.monotonic() - t) < 10:
        CP.find_nodes()

    print("Network:")
    print(CP.XB_net.get_devices())

    # Configure and start the flask application
    application.jinja_env.auto_reload = True
    application.config['TEMPLATES_AUTO_RELOAD'] = True
    application.run(host='0.0.0.0')
