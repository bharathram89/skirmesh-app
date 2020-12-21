import sqlite_functions as SQL
import time
from datetime import datetime

class END_NODE():

    def __init__(self, host, node):

        self.host = host

        self.location   = (50,50)
        self.__64bit_addr = node
        self.__loc_name = None

    @property
    def location(self):
        return self.__location

    @location.setter
    def location(self, loc):

        self.__location = loc

        for key in CONTROL_POINT._NODE_LOC_DICT:
            if CONTROL_POINT._NODE_LOC_DICT[key] == loc:
                self.__loc_name = key

    @property
    def loc_name(self):
        return self.__loc_name

    @property
    def _get_64bit_addr(self):
        return self.__64bit_addr

class CONTROL_POINT():

    TIME_FMTR = '%Y-%m-%d %H:%M:%S'
    TIME_DISP = '%d %b %Y  %H:%M:%S'

    CONFIGURE = 0x00
    REGISTER  = 0x01
    QUERY     = 0x02
    CAPTURE   = 0x0A
    MEDIC     = 0x0E
    BOMB      = 0xBB
    DISCOVERY = 0xDD
    ND_STATUS = 0x53

    # Addressing
    BROADCAST  = 0xFF
    CONTROLLER = 0x00

    CMD_DICT = {
                CONFIGURE : 'CONFIGURE',
                REGISTER  : 'REGISTER',
                QUERY     : 'QUERY',
                CAPTURE   : 'CAPTURE',
                MEDIC     : 'MEDIC',
                DISCOVERY : 'DISCOVERY',
                BOMB      : 'BOMB',
                # ND_STATUS : 'NODE STATUS'
                }

    TEAM_CMAP = {0x01:'red',
                 0x02:'blue',
                 0x03:'yellow',
                 0x04:'green',
                 0x05:'purple'}

    CAPTURE_GRACE_PERIOD = int(60)
    MEDIC_TIME           = int(60)

    _NODE_LOC_DICT = {'KINGDOM'             :(10.6,69.3),
                      'NORTH FIREBASE'      :(23,52),
                      'MOSES TRAIL'         :(27.5,35.1),
                      'NORTH SAM SITE'      :(32.4,69.6),
                      'HALFBACK'            :(42,71.4),
                      'RANGE'               :(45.1,60.6),
                      'NORTH POND TRAIL'    :(47.7,44.3),
                      'BAT HOUSE'           :(52.9,42.7),
                      'BLACK THORN RAVINES' :(57.7,22),
                      'SAAB'                :(53.5,61.3),
                      'RIGHT HOOK TRAIL'    :(52.7,84.6),
                      'BARRIER WOODS'       :(63.4,52.8),
                      'CANNIBAL VILLAGE'    :(64.3,14.9),
                      'CUT THROAT TRAILS'   :(72.6,53.6),
                      'TOWN'                :(65.3,64),
                      'SOUTH BUNKER'        :(76.9,61.6),
                      'AMMO DEPOT'          :(91.2,18),
                      'THE LZ'              :(88.1,56.8),
                      'BIG DIP'             :(96,55.1),
                      'POND'                :(55.8,37.3)}

    DB_NAME = "database.sqlite"

    def __init__(self, serial, baud):

        self.serial = serial
        self.baud = baud

        conn = SQL.create_connection(CONTROL_POINT.DB_NAME)
        SQL.init_tables(conn)
        conn.close()

        self.DB = None

        self.node_dict = {}

    def send_data_broadcast(self, pkt):

        print(pkt)

    def transmit_pkt(self, dest, pkt):

        print(pkt)

    def find_nodes(self):

        for node in range(5):

            self.node_dict[str(node)] = END_NODE(self, node)


