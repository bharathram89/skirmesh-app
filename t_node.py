import sqlite_functions as SQL
import time
from datetime import datetime

class END_NODE():

    def __init__(self, host, node):

        self.host = host

        self.location   = (50,50)
        self.__64bit_addr = node
        self.__loc_name = None

        self.location = (50,50)
        self.loc_name = None
        self.status   = None

    @property
    def _get_64bit_addr(self):
        return self.__64bit_addr



class CONTROL_POINT():

    # Some import string conversions for the datetime object
    TIME_FMTR = '%Y-%m-%d %H:%M:%S'
    TIME_DISP = '%d %b %Y  %H:%M:%S'

    # Configuration codes
    CONFIGURE = 0x00
    REGISTER  = 0x01
    QUERY     = 0x02
    CAPTURE   = 0x0A
    MEDIC     = 0x0E
    BOMB      = 0xBB

    # Status requests
    ND_STATUS = 0x53

    # Time setters
    CAPT_TIME = 0x8A
    BOMB_TIME = 0x8B
    MED_TIME  = 0x8E

    # Color assignments
    RED    = 0x01
    BLUE   = 0x02
    YELLOW = 0x03
    GREEN  = 0x04
    PURPLE = 0x05

    # Define teams by color, but this could change...
    TEAM_CMAP = {RED    : '#FF0000',
                 BLUE   : '#00FF00',
                 YELLOW : '#FFFF00',
                 GREEN  : '#008000',
                 PURPLE : '#3333CC'}

    TEAM_NAME = {RED    : 'RED',
                 BLUE   : 'BLUE',
                 YELLOW : 'YELLOW',
                 GREEN  : 'GREEN',
                 PURPLE : 'PURPLE'}

    # This is primarly used to set the menu options in
    # the node configuration page
    CMD_DICT = {
                CONFIGURE : 'CONFIGURE',
                REGISTER  : 'REGISTER',
                QUERY     : 'QUERY',
                CAPTURE   : 'CAPTURE',
                MEDIC     : 'MEDIC',
                BOMB      : 'BOMB',
                CAPT_TIME : 'SET CAPTURE TIME',
                BOMB_TIME : 'SET BOMB TIMER',
                MED_TIME  : 'SET MEDIC TIME',
                }

    DB_NAME    = "database.sqlite"
    MEDIC_TIME = int(60)

    def __init__(self, serial, baud):

        self.serial = serial
        self.baud = baud

        conn = SQL.create_connection(CONTROL_POINT.DB_NAME)
        SQL.init_tables(conn)
        conn.close()

        self.DB = None

        self.end_nodes = {}

    def send_data_broadcast(self, pkt):

        print(pkt)

    def transmit_pkt(self, dest, pkt):

        print(pkt)

    def find_nodes(self):

        for node in range(5):

            self.end_nodes[str(node)] = END_NODE(self, node)
