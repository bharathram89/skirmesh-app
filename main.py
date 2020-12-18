"""
BALLAHACK POINT CONTROL
@Author: Brandon Zoss, Dustin Kuchenbecker
@Date:   October, 2020
Setup and run on any Raspberry Pi model.
This code proves the minimum viable functions of an
NFC reader and LoRa radio combination to act as a
nodes from which complex realworld gaming scenarios
can be launched and validated.
Adafruit's libraries have been very helpful in the
overall proof of concept.
"""

from flask import Flask, render_template, flash, request, redirect, url_for
from datetime import datetime

from digi.xbee.devices import XBeeDevice, XBee64BitAddress

import sqlite_functions as SQL

application = Flask(__name__)

#import board
#from node import node, controller
from controller import CONTROL_POINT, END_NODE

serial = '/dev/ttyUSB0'
baud   = 115200
CP = CONTROL_POINT(serial, baud)

#node_kwargs = {'RADIO_pin':board.CE1,
#               'address':0x00,
#               'dest':0x01,
#               'tx_power':21}

#node = controller(**node_kwargs)
#node.daemon = True

db_link = 'database.sqlite'

@application.route('/')
@application.route('/index')
def main_page():
    """
    Establish main page.
    """
    conn = SQL.create_connection(db_link)

    reg_teams = [i[0] for i in SQL._get_registered_teams(conn)]
    teams = [SQL._get_team_members(conn, t) for t in reg_teams]

    colors = {1:'#FF0000',2:'#0000FF',3:'#FFFF00',4:'#008000',5:'#3333CC'}

    node_status, centers = dict(), dict()

    print(CP.node_dict)

    for n in CP.node_dict:

        status = SQL._get_node_status(conn, n)
        print(status)

        if status:
            node_status[n] = status
            centers[n] = CP.node_dict[n].location

    # for key in CP.node_dict.keys():

        # stability = 1 or CP.node_dict[key].node_status
        # node_status[key] = (0, CP.node_dict[key].owner, stability)
        #
        # centers[key] = CP.node_dict[key].location

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

    kwargs = {'node_dict' : CP.node_dict,
              'cmd_dict'  : CP.CMD_DICT}

    return render_template('node_admin.html', **kwargs)


@application.route('/issue_command', methods=['POST','GET'])
def issue_command():

    if request.method == 'POST':

        pkt = bytearray(3)

        pkt[0] = CP.CONFIGURE
        pkt[1] = int(request.form['conf'], 16)

        if pkt[1] == 255 and request.form['dest'] != 'FF FF':

            dest = XBee64BitAddress.from_hex_string(request.form['dest'])
            CP.node_dict[str(dest)].location = eval(request.form['args'])

            return redirect(url_for('node_admin'))

        pkt[2] = int(request.form['args'], 16)

        if pkt[1] == CP.DISCOVERY and request.form['dest'] == 'FF FF':

            CP.find_nodes()

            return redirect(url_for('node_admin'))

        # TODO: Add check for command in node_dict otherwise do something else
        if request.form['dest'] == 'FF FF':
            CP.send_data_broadcast(pkt)
        else:
            dest = XBee64BitAddress.from_hex_string(request.form['dest'])
            CP.transmit_pkt(dest, pkt)

    return redirect(url_for('node_admin'))

@application.route('/players')
def players():

    conn = SQL.create_connection(db_link)

    kwargs = {'t_sc_cols'  : ['team', 'points'],
              'team_score' : SQL._score_by_team(conn),
              'p_sc_cols'  : ['player', 'team', 'points'],
              'plyr_score' : SQL._score_by_uid(conn)}

    #kwargs = {'cols_team':SQL.get_col_names(conn,'team'),
    #          'data_team':SQL._get_table(conn,'team'),
    #          'datetime'   :   datetime,
    #          'time_fmt'   :   controller.control_point.TIME_FMTR,
    #          'time_disp'  :   controller.control_point.TIME_DISP,
    #         }

    conn.close() #My functions close connections

    return render_template('players.html', **kwargs)

@application.route('/comms')
def comms_log():

    conn = SQL.create_connection(db_link)

    kwargs = {'cols_data'  :   SQL.get_col_names(conn,'data'),
              'data_data'  :   SQL._get_table(conn,'data'),
              'datetime'   :   datetime,
              'time_fmt'   :   CP.TIME_FMTR,
              'time_disp'  :   CP.TIME_DISP,
             }

    conn.close() #My functions close connections

    return render_template('comms.html', **kwargs)

# Run the app when this script executes.
if __name__ == '__main__':

    print("Initializing host controller")

    # local_host = controller.configure_host_controller(serial)
    # battle_net = local_host.get_network()
    # controller.control_point.battlefield_network = battle_net
    # controller.control_point.battlefield_network.add_network_modified_callback(
                                      # controller.cb_network_modified)
    # local_host.add_data_received_callback(controller.my_data_received_callback)
    # CP.set_node_controller(local_host)

    print("Finding nodes in the network")
    while not CP.node_dict.keys():

        CP.find_nodes()

    print("Network:")
    print(CP.node_dict)

    # Configure and start the flask application
    application.jinja_env.auto_reload = True
    application.config['TEMPLATES_AUTO_RELOAD'] = True
    application.run(host='0.0.0.0')
