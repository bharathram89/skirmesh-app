from digi.xbee.devices import XBeeDevice, RemoteZigBeeDevice, RemoteXBeeDevice
import sqlite_functions as SQL
import time
from datetime import datetime


class END_NODE(RemoteXBeeDevice):

    #transition states
    STABLE    = 0
    CAPTURE   = 1
    RECAPTURE = 2

    #Node CONFIGURATION values
    CAPTURE_POINT = 0
    TEAM_REGISTER = 1
    QUERY_STATION = 2



    def __init__(self, host, device):

        super().__init__(host, device)

        self.host = host

        self.configuration = END_NODE.CAPTURE_POINT
        self.owner         = None
        self.attacker      = None

        self.initiator     = None
        self.status        = None

        self.location = (50,50)
        self.name = None


    def stabilize(self):

        self.initiator = None
        self.owner     = self.attacker or None
        self.attacker  = None
        self.defender  = None
        self.status    = END_NODE.STABLE


    def initiate_capture(self, uid, attacking_team):

        self.status    = END_NODE.CAPTURE
        self.attacker  = attacking_team

        self.initiator = uid


    def reset(self, config, owner = None):

        if (config == CONTROL_POINT.SET_REGISTER or
            config == CONTROL_POINT.SET_CAPTURE or
            config == CONTROL_POINT.SET_TEAM or
            config == CONTROL_POINT.SET_QUERY):

            self.owner    = owner
            self.attacker = None

            self.status   = END_NODE.STABLE






class CONTROL_POINT(XBeeDevice):
    """
    This class will be the interface to each individual control point
    """


    TIME_FMTR  = '%Y-%m-%d %H:%M:%S'
    TIME_DISP = '%d %b %Y  %H:%M:%S'

    CONFIGURE = 0x00
    REGISTER  = 0x01
    QUERY     = 0x02
    CAPTURE   = 0x0A
    MEDIC     = 0x0E
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
                # ND_STATUS : 'NODE STATUS'
                }

    TEAM_CMAP = {0x01:'red',
                 0x02:'blue',
                 0x03:'yellow',
                 0x04:'green',
                 0x05:'purple'}

    CAPTURE_GRACE_PERIOD = int(60)
    MEDIC_TIME           = int(60)


    CONTROLLER_CONFIG = {'ID': [0x05,0x45],  # TODO: What is this?
                         'CE': 1,
                         'NI': 'CONTROLLER',
                         'SP': 0x1F4,
                         }

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


    def __init__(self, serial, baud ):

        XBeeDevice.__init__(self, serial, baud)
        #database location/name
        conn = SQL.create_connection(CONTROL_POINT.DB_NAME)
        SQL.init_tables(conn)
        conn.close()

        self.DB = None

        self.node_dict = {}
        self.configure_XB()


    def configure_XB(self):

        self.open()
        self.set_pan_id(bytearray([0x06, 0x01]))
        self.set_parameter('NI', bytearray('CONTROLLER', 'utf8'))
        self.set_parameter('CE', bytearray([0x01]))
        self.set_parameter('NJ', bytearray([0xFF]))

        self.XB_net = self.get_network()

        self.XB_net.add_network_modified_callback(self.net_mod_callback)
        self.add_data_received_callback(self.data_received_callback)


    @staticmethod
    def __make_bytearray(payload):

        if not hasattr(payload, '__len__'):
            return bytearray([payload])

        elif not isinstance(payload, bytearray):
            return bytearray(payload)

        else: return payload


    def assemble_pkt(self, *args):
        """
        Takes any number of arguments and assembles them
        into a bytearray.
        """
        pkt = bytearray()
        for arg in args:
            pkt = pkt + self.__make_bytearray(arg)

        return pkt


    @staticmethod
    def exec_sql(sql_fun, *args):

        conn = SQL.create_connection(CONTROL_POINT.DB_NAME)
        result = sql_fun(conn, *args)
        conn.close()

        return result


    def find_nodes(self):

        self.XB_net.start_discovery_process()

        while self.XB_net.is_discovery_running():
            time.sleep(0.1)

        for node in self.XB_net.get_devices():

            self.node_dict[str(node.get_64bit_addr())] = END_NODE(self, node)



    def transmit_pkt(self, dest, pkt):

        self.log_comm(dest, pkt)
        self.send_data(dest, pkt)

        print(f"Sent {pkt.hex()} to {dest}")


    def log_comm(self, dest, pkt):

        data = {'sender':str(self.get_64bit_addr()),
                'destination':str(dest.get_64bit_addr()),
                'command':pkt[0],
                'payload':pkt[1:].hex(),
               }

        self.exec_sql(SQL.add_row, 'data', data)


    @staticmethod
    def net_mod_callback(event, reason, node):

        print('Network Event:')
        print("Type: %s (%d)" % (event.description, event.code))
        print("Reason: %s (%d)" % (reason.description, reason.code))

        if node: print(f"Node: {node}")


    def data_received_callback(self, xb_msg):

        self.DB = SQL.create_connection(CONTROL_POINT.DB_NAME)

        payload = xb_msg.data
        sender = xb_msg.remote_device

        print(f'Received (payload): {payload}')

        data = {
                'sender'     :str(sender.get_64bit_addr()),
                'destination':str(self.get_64bit_addr()),
                'command'    :payload[0],
                'payload'    :payload[1:].hex(),
               }

        self.exec_sql(SQL.add_row, 'data', data)

        cmd = payload[0]

        if payload[1:] and cmd in self.parse_message:

            pkt = self.parse_message[cmd](sender, payload)

            if pkt: self.transmit_pkt(sender, pkt)

        self.DB.close()


    @property
    def parse_message(self):

        msg_dict = {CONTROL_POINT.REGISTER  : self.__register,
                    CONTROL_POINT.CAPTURE   : self.__capture,
                    CONTROL_POINT.MEDIC     : self.__medic,
                    CONTROL_POINT.QUERY     : self.__query}

        return msg_dict


    def __register(self, sender, payload):

        uid = payload[2:6].hex()
        team = payload[1]

        print(f'Registering {uid} to team {team}')
        data = {'uid':uid,'team':team}
        self.exec_sql(SQL.add_row, 'team', data)

        data = {'uid':uid,'alive':1}
        self.exec_sql(SQL.add_row, 'medic', data)

        return None


    def __capture(self, sender, payload):

        node = str(sender.get_64bit_addr())
        owning = self.exec_sql(SQL._get_node_status, node)

        if len(payload[1:5]) == 1 and owning:
            # If the payload does not contain a UID, it's passing the status
            # byte to indicate that capture is complete
            # Get the most recent team interaction with the node and set the
            # node as stable with the prosecuting team as owning
            stable = payload[1]

            data = {'node':node, 'tag':owning[0], 'team':owning[1], 'stable':stable}
            self.exec_sql(SQL.add_row, 'node_status', data)

            orig_captor = self.exec_sql(SQL._get_last_captor)

            if orig_captor:

                data = {'tag':orig_captor[0], 'team':orig_captor[1],'points':2, 'action':'CAPTURE COMPLETE'}
                self.exec_sql(SQL.add_row, 'score', data)

        if len(payload[1:5]) == 4:

            uid = payload[1:5].hex()
            team = self.exec_sql(SQL._get_team, uid)

            if team:

                print(f'Team {team[0]} is prosecuting Node_{node}')

                data = {'tag':uid, 'team':team[0]}

                if owning:
                    # If no one owns the node, the attacker captures immediately
                    # If his teams was already there, he only assists
                    data['action'] = 'CAPTURE' if team[0] != owning[1] else 'ASSIST'
                    data['points'] = 2 if team[0] != owning[1] else 1

                else:

                    data['action'] = 'CAPTURE'
                    data['points'] = 2

                self.exec_sql(SQL.add_row, 'score', data)

                data = {'node':node, 'tag':uid, 'team':team[0]}
                # If the node is not currently owned, then it's immediately stable
                # If the prosecuting team is the same team, keep it stable
                data['stable'] = 1 if not owning else 0

                self.exec_sql(SQL.add_row, 'node_status', data)

                return bytearray([CONTROL_POINT.CAPTURE, team[0]])

            print(f'{uid} is not registered to a team')

        return None


    def __medic(self, sender, payload):

        uid = payload[1:5].hex()
        row = self.exec_sql(SQL._get_is_alive, uid)

        DEAD  = 0x00
        ALIVE = 0x01

        if row:

            id, __uid__, alive, timestamp = row
            timestamp = datetime.strptime(timestamp, CONTROL_POINT.TIME_FMTR)
            d_t = datetime.utcnow() - timestamp

            if not alive and d_t.total_seconds() >= CONTROL_POINT.MEDIC_TIME:
                # If he was dead and has waited the correct amount of time,
                # bring him back to life

                print(f'{uid} is ALIVE')

                data = {'uid':uid,'alive':1}
                self.exec_sql(SQL.add_row, 'medic', data)

                return bytearray([CONTROL_POINT.MEDIC, ALIVE, 0x00])

            # If he's DEAD and not enough time has passed to bring him back
            # to life, then let him knows how close he is to being alive.
            if not alive and d_t.total_seconds() < CONTROL_POINT.MEDIC_TIME:

                time_remaining = CONTROL_POINT.MEDIC_TIME - d_t.total_seconds()
                time_remaining = min(max(0, time_remaining), CONTROL_POINT.MEDIC_TIME)

                return bytearray([CONTROL_POINT.MEDIC, DEAD, int(time_remaining)])

            if alive:
                # If he was alive, and he's back at the medic, he probably died
                print(f'{uid} is now DEAD')

                data = {'uid':uid,'alive':0}
                self.exec_sql(SQL.add_row, 'medic', data)

                return bytearray([CONTROL_POINT.MEDIC, DEAD, CONTROL_POINT.MEDIC_TIME])

        else:
            # If he didn't exist at all then register him and asume he's checking
            # in for the first time because he's dead.
            print(f'{uid} is registered DEAD')

            data = {'uid':uid,'alive':0}
            self.exec_sql(SQL.add_row, 'medic', data)

            return bytearray([CONTROL_POINT.MEDIC, DEAD, CONTROL_POINT.MEDIC_TIME])


    def __query(self, sender, payload):

        uid = payload[1:5].hex()
        row = self.exec_sql(SQL._get_is_alive, uid)

        alive = 0x00
        team = None

        if row: id, __uid__, alive, timestamp = row

        team = self.exec_sql(SQL._get_team, uid)

        if team: pkt = bytearray([CONTROL_POINT.QUERY, team[0], alive])
        else: pkt = bytearray([CONTROL_POINT.QUERY, 0x00, 0x00])

        return pkt


    def uid_handler(self, uid):

        print(f'NFC Reader found: {bytearray(uid).hex(): <20}')

        if self.team_register and self.configuration == CONTROL_POINT.REGISTER:
            pass
