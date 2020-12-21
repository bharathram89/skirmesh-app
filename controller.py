from digi.xbee.devices import XBeeDevice, RemoteZigBeeDevice, RemoteXBeeDevice
import sqlite_functions as SQL
import time
from datetime import datetime


class END_NODE(RemoteXBeeDevice):

    def __init__(self, host, device):

        RemoteXBeeDevice.__init__(self, host, device)

        self.host = host

        self.location = (50,50)
        self.loc_name = None
        self.status   = None



class CONTROL_POINT(XBeeDevice):
    """
    This class will be the interface to the contoller
    """

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
                 BLUE   : '#0000FF',
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


    def __init__(self, serial, baud ):

        XBeeDevice.__init__(self, serial, baud)
        #database location/name
        conn = SQL.create_connection(CONTROL_POINT.DB_NAME)
        SQL.init_tables(conn)
        conn.close()

        self.DB = None

        self.end_nodes = {}
        self.configure_XB()


    def configure_XB(self):

        self.open()
        self.set_pan_id(bytearray([0x06, 0x01]))
        self.set_parameter('NI', bytearray('CONTROLLER', 'utf8'))
        self.set_parameter('CE', bytearray([0x01]))
        self.set_parameter('NJ', bytearray([0xFF]))
        self.apply_changes()
        self.write_changes()

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

        print("Finding nodes in the network")

        self.XB_net.start_discovery_process()

        while self.XB_net.is_discovery_running():
            time.sleep(0.1)

        for node in self.XB_net.get_devices():

            if node not in self.end_nodes:

                self.end_nodes[str(node.get_64bit_addr())] = END_NODE(self, node)


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

        payload = xb_msg.data
        sender = xb_msg.remote_device

        print(f'Received (payload): {payload}')

        if str(sender.get_64bit_addr()) not in self.end_nodes:
            self.find_nodes()

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



    @property
    def parse_message(self):

        msg_dict = {CONTROL_POINT.REGISTER  : self.__register,
                    CONTROL_POINT.CAPTURE   : self.__capture,
                    CONTROL_POINT.MEDIC     : self.__medic,
                    CONTROL_POINT.QUERY     : self.__query,
                    CONTROL_POINT.ND_STATUS : self.__status}

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
        cap_status = self.exec_sql(SQL._get_capture_status, node)

        if len(payload[1:5]) == 1 and cap_status:
            # If the payload does not contain a UID, it's passing the status
            # byte to indicate that capture is complete
            # Get the most recent team interaction with the node and set the
            # node as stable with the prosecuting team as owning
            stable   = payload[1]

            own_uid, own_team, cap_stable, cap_time = cap_status

            data = {'node':node, 'tag':own_uid, 'team':own_team, 'stable':stable}
            self.exec_sql(SQL.add_row, 'capture_status', data)

            orig_captor = self.exec_sql(SQL._get_last_captor)

            if orig_captor:

                orig_uid, orig_team = orig_captor

                data = {'tag':orig_uid, 'team':orig_team,'points':2, 'action':'CAPTURE COMPLETE'}
                self.exec_sql(SQL.add_row, 'score', data)

        if len(payload[1:5]) == 4:

            uid = payload[1:5].hex()
            team = self.exec_sql(SQL._get_team, uid)

            if team:

                team = team[0]
                print(f'Team {team} is prosecuting Node_{node}')

                data = {'tag':uid, 'team':team}

                if cap_status:

                    own_uid, own_team, cap_stable, cap_time = cap_status
                    # If no one owns the node, the attacker captures immediately
                    # If his teams was already there, he only assists
                    data['action'] = 'CAPTURE' if team != own_team else 'ASSIST'
                    data['points'] = 2 if team != own_team else 1

                    if data['action'] == 'CAPTURE':

                        begin = self.exec_sql(SQL._get_time_capture_complete)

                        if begin:

                            begin = datetime.strptime(begin[0], CONTROL_POINT.TIME_FMTR)
                            lost  = datetime.utcnow()
                            held  = int((lost - begin).total_seconds())

                            tdat = {'team':own_team,'time_held':held,'action':node}
                            self.exec_sql(SQL.add_row, 'score', tdat)

                else:

                    data['action'] = 'CAPTURE'
                    data['points'] = 2

                self.exec_sql(SQL.add_row, 'score', data)

                data = {'node':node, 'tag':uid, 'team':team}
                # If the node is not currently owned, then it's immediately stable
                # If the prosecuting team is the same team, keep it stable
                data['stable'] = 1 if not cap_status else 0

                self.exec_sql(SQL.add_row, 'capture_status', data)

                return bytearray([CONTROL_POINT.CAPTURE, team])

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


    def __status(self, sender, payload):

        node = str(sender.get_64bit_addr())
        status = self.exec_sql(SQL._get_capture_status, node)

        if not status: return None

        cmd    = bytearray([CONTROL_POINT.ND_STATUS])
        uid    = bytearray.fromhex(status[0])
        team   = bytearray([status[1]])
        stable = bytearray([status[2]])

        return cmd + uid + team + stable


    def uid_handler(self, uid):

        print(f'NFC Reader found: {bytearray(uid).hex(): <20}')

        if self.team_register and self.configuration == CONTROL_POINT.REGISTER:
            pass
