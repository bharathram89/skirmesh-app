"""
BALLAHACK POINT CONTROL

@Author: Brandon Zoss, Dustin Kuchenbecker
@Date:   October, 2020

Setup and run on any Raspberry Pi model.
This code proves the minimum viable functions of a
nodes from which complex realworld gaming scenarios
can be launched and validated.
"""

from flask import Flask, render_template, flash, request, redirect, url_for
from datetime import datetime
import time

from digi.xbee.devices import XBeeDevice, XBee64BitAddress

import sqlite_functions as SQL
#from controller import CONTROL_POINT, END_NODE
from t_node import CONTROL_POINT, END_NODE

application = Flask(__name__)


serial = '/dev/ttyUSB0'
baud   = 115200
CP = CONTROL_POINT(serial, baud)


SET_LOCATION = 0xFF
BROADCAST    = "FFFF"

@application.route('/')
@application.route('/index')
def main_page():
    """
    Establish main page.
    """
    conn = SQL.create_connection(CP.DB_NAME)

    reg_teams = [i[0] for i in SQL._get_registered_teams(conn)]
    teams = [SQL._get_team_members(conn, t) for t in reg_teams]

    colors = {
                1:'#FF0000',
                2:'#0000FF',
                3:'#FFFF00',
                4:'#008000',
                5:'#3333CC'
             }

    node_status, centers = dict(), dict()

    for n in CP.node_dict:

        #status = SQL._get_capture_status(conn, n)
        status = True

        if status:
            #node_status[n] = status
            node_status[n] = (0,2,1)
            centers[n] = CP.node_dict[n].location


    kwargs = {'author'     : "Brandon Zoss and Dustin Kuchenbecker",
              'name'       : "Ballahack | Swamp Sniper",
              'team_col'   : ['player'],
              'reg_teams'  : reg_teams,
              'teams'      : teams,
              'team_cmap'  : CP.TEAM_CMAP,
              'node_status': node_status,
              'centers'    : centers,
              'colors'     : colors,
               }

    conn.close() #My functions close connections

    return render_template('index.html', **kwargs)



@application.route('/node_admin')
def node_admin():

    kwargs = {
             'node_dict':CP.node_dict,
             'cmd_dict' :CP.CMD_DICT if CP.node_dict else None
             }

    return render_template('node_admin.html', **kwargs)



@application.route('/issue_command', methods=['POST','GET'])
def issue_command():

    if request.method == 'POST':

        dest = request.form['dest']
        args = request.form['args']

        pkt = bytearray(3)
        pkt[0] = CP.CONFIGURE
        pkt[1] = int(request.form['conf'], 16)

        if pkt[1] == SET_LOCATION:

            if dest != BROADCAST:

                CP.node_dict[dest].location = eval(args)
                return redirect(url_for('node_admin'))

        elif request.form['action'] == 'Issue Command':

            pkt[2] = int(args, 16)

            if dest == BROADCAST: CP.send_data_broadcast(pkt)

            else: CP.transmit_pkt(CP.node_dict[dest]._64bit_addr, pkt)

        elif request.form['action'] == 'End Game':

            for node in CP.node_dict:

                own_uid, own_team, cap_stable, cap_time = CP.exec_sql(SQL._get_capture_status, node)

                if cap_stable:

                    begin = CP.exec_sql(SQL._get_time_capture_complete)

                    if begin:

                        begin = datetime.strptime(begin[0], CP.TIME_FMTR)
                        lost  = datetime.utcnow()
                        held  = int((lost - begin).total_seconds())

                        tdat = {'team':own_team,'time_held':held,'action':node}
                        CP.exec_sql(SQL.add_row, 'score', tdat)

        elif request.form['action'] == 'Discover Network':

            CP.find_nodes()
            return redirect(url_for('node_admin'))

    return redirect(url_for('node_admin'))



@application.route('/players')
def players():

    conn = SQL.create_connection(CP.DB_NAME)

    reg_teams = [i[0] for i in SQL._get_registered_teams(conn)]

    tm_times = SQL._get_time_held_by_team(conn)
    team_times = {tt['team']:tt['time'] for tt in tm_times}

    node_times = dict()
    for n in CP.node_dict:

        times = SQL._get_time_held_for_node(conn, n)
        node_times[n] = times if times else None

    kwargs = {'t_sc_cols'  : ['team', 'points', 'time'],
              'team_score' : SQL._score_by_team(conn),
              'p_sc_cols'  : ['player', 'points'],
              'plyr_score' : SQL._score_by_uid(conn),
              'nodes'      : CP.node_dict.keys(),
              't_tm_cols'  : ['team', 'time'],
              'team_times' : team_times,
              'node_times' : node_times}

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

    print("Finding nodes in the network")
    t = time.monotonic()
    while not CP.node_dict and (time.monotonic() - t) < 10:
        CP.find_nodes()

    #print("Network:")
    #print(CP.XB_net.get_devices())

    # Configure and start the flask application
    application.jinja_env.auto_reload = True
    application.config['TEMPLATES_AUTO_RELOAD'] = True
    application.run(host='0.0.0.0')
