from digi.xbee.devices import XBeeDevice, RemoteZigBeeDevice, RemoteXBeeDevice
from datetime import datetime

import db_models as PG
import time


# ██████╗░███████╗░██████╗░██╗███╗░░██╗  ███╗░░██╗░█████╗░██████╗░███████╗
# ██╔══██╗██╔════╝██╔════╝░██║████╗░██║  ████╗░██║██╔══██╗██╔══██╗██╔════╝
# ██████╦╝█████╗░░██║░░██╗░██║██╔██╗██║  ██╔██╗██║██║░░██║██║░░██║█████╗░░
# ██╔══██╗██╔══╝░░██║░░╚██╗██║██║╚████║  ██║╚████║██║░░██║██║░░██║██╔══╝░░
# ██████╦╝███████╗╚██████╔╝██║██║░╚███║  ██║░╚███║╚█████╔╝██████╔╝███████╗
# ╚═════╝░╚══════╝░╚═════╝░╚═╝╚═╝░░╚══╝  ╚═╝░░╚══╝░╚════╝░╚═════╝░╚══════╝


class END_NODE(RemoteXBeeDevice):

    def __init__(self, host, device):

        RemoteXBeeDevice.__init__(self, host, device)

        self.location       = None
        self.configuration  = None
        self.capture_status = None
        self.cap_time       = 60
        self.med_time       = 60
        self.cap_asst       = 5
        self.bomb_time      = 120



# ███████╗███╗░░██╗██████╗░  ███╗░░██╗░█████╗░██████╗░███████╗
# ██╔════╝████╗░██║██╔══██╗  ████╗░██║██╔══██╗██╔══██╗██╔════╝
# █████╗░░██╔██╗██║██║░░██║  ██╔██╗██║██║░░██║██║░░██║█████╗░░
# ██╔══╝░░██║╚████║██║░░██║  ██║╚████║██║░░██║██║░░██║██╔══╝░░
# ███████╗██║░╚███║██████╔╝  ██║░╚███║╚█████╔╝██████╔╝███████╗
# ╚══════╝╚═╝░░╚══╝╚═════╝░  ╚═╝░░╚══╝░╚════╝░╚═════╝░╚══════╝




# ██████╗░███████╗░██████╗░██╗███╗░░██╗
# ██╔══██╗██╔════╝██╔════╝░██║████╗░██║
# ██████╦╝█████╗░░██║░░██╗░██║██╔██╗██║
# ██╔══██╗██╔══╝░░██║░░╚██╗██║██║╚████║
# ██████╦╝███████╗╚██████╔╝██║██║░╚███║
# ╚═════╝░╚══════╝░╚═════╝░╚═╝╚═╝░░╚══╝
#
# ░█████╗░░█████╗░███╗░░██╗████████╗██████╗░░█████╗░██╗░░░░░██╗░░░░░███████╗██████╗░
# ██╔══██╗██╔══██╗████╗░██║╚══██╔══╝██╔══██╗██╔══██╗██║░░░░░██║░░░░░██╔════╝██╔══██╗
# ██║░░╚═╝██║░░██║██╔██╗██║░░░██║░░░██████╔╝██║░░██║██║░░░░░██║░░░░░█████╗░░██████╔╝
# ██║░░██╗██║░░██║██║╚████║░░░██║░░░██╔══██╗██║░░██║██║░░░░░██║░░░░░██╔══╝░░██╔══██╗
# ╚█████╔╝╚█████╔╝██║░╚███║░░░██║░░░██║░░██║╚█████╔╝███████╗███████╗███████╗██║░░██║
# ░╚════╝░░╚════╝░╚═╝░░╚══╝░░░╚═╝░░░╚═╝░░╚═╝░╚════╝░╚══════╝╚══════╝╚══════╝╚═╝░░╚═╝


class CONTROL_POINT(XBeeDevice):
    """
    This class will be the interface to the contoller
    """

    # █▀▀ █▀█ █▄░█ █▀▀ █ █▀▀ █░█ █▀█ ▄▀█ ▀█▀ █ █▀█ █▄░█ █▀
    # █▄▄ █▄█ █░▀█ █▀░ █ █▄█ █▄█ █▀▄ █▀█ ░█░ █ █▄█ █░▀█ ▄█

    CONFIGURE = 0x00
    REGISTER  = 0x01
    QUERY     = 0x02
    USER_REG  = 0x03
    SET_TEAM  = 0x04
    CAPTURE   = 0x0A
    MEDIC     = 0x0E
    BOMB      = 0xBB


    # █▀ ▀█▀ ▄▀█ ▀█▀ █░█ █▀   █▀█ █▀▀ █▀█ █░█ █▀▀ █▀ ▀█▀ █▀
    # ▄█ ░█░ █▀█ ░█░ █▄█ ▄█   █▀▄ ██▄ ▀▀█ █▄█ ██▄ ▄█ ░█░ ▄█

    ND_STATUS = 0x53


    # ▀█▀ █ █▀▄▀█ █▀▀   █▀ █▀▀ ▀█▀ ▀█▀ █▀▀ █▀█ █▀
    # ░█░ █ █░▀░█ ██▄   ▄█ ██▄ ░█░ ░█░ ██▄ █▀▄ ▄█

    CAPT_TIME = 0x8A
    BOMB_TIME = 0x8B
    CAP_PERC  = 0x8C
    MED_TIME  = 0x8E


    # █▀▀ █▀█ █░░ █▀█ █▀█   █▀▄▀█ ▄▀█ █▀█
    # █▄▄ █▄█ █▄▄ █▄█ █▀▄   █░▀░█ █▀█ █▀▀

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

    #TODO This needs to be JSON file based for ease of swap
    TEAM_NAME = {RED    : 'RED',
                 BLUE   : 'BLUE',
                 YELLOW : 'YELLOW',
                 GREEN  : 'GREEN',
                 PURPLE : 'PURPLE'}


    # █▀▄▀█ █▀▀ █▄░█ █░█   █▀ █▀▀ ▀█▀ ▀█▀ █▀▀ █▀█ █▀
    # █░▀░█ ██▄ █░▀█ █▄█   ▄█ ██▄ ░█░ ░█░ ██▄ █▀▄ ▄█
    # This is primarly used to set the menu options
    CMD_DICT = {
                CONFIGURE : 'CONFIGURE',
                REGISTER  : 'REGISTER',
                QUERY     : 'QUERY',
                CAPTURE   : 'CAPTURE',
                MEDIC     : 'MEDIC',
                BOMB      : 'BOMB',
                CAPT_TIME : 'SET CAPTURE TIME',
                BOMB_TIME : 'SET BOMB TIMER',
                USER_REG  : 'REGISTER PLAYERS',
                MED_TIME  : 'SET MEDIC TIME',
                SET_TEAM  : 'SET TEAM',
                CAP_PERC  : 'SET ASSIST %',
                }



    # ▄▀█ █░░ █░░ █▀█ █░█░█ █▀▀ █▀▄   █▀▀ █▀█ █▄░█ █▀▀ █ █▀▀ █▀
    # █▀█ █▄▄ █▄▄ █▄█ ▀▄▀▄▀ ██▄ █▄▀   █▄▄ █▄█ █░▀█ █▀░ █ █▄█ ▄█

    CONFIGURATIONS = [REGISTER,
                      QUERY,
                      CAPTURE,
                      MEDIC,
                      BOMB]


    # █▀▄▀█ █ █▀ █▀▀   ▄▀█ ▀█▀ ▀█▀ █▀█ █ █▄▄ █░█ ▀█▀ █▀▀ █▀
    # █░▀░█ █ ▄█ █▄▄   █▀█ ░█░ ░█░ █▀▄ █ █▄█ █▄█ ░█░ ██▄ ▄█

    TIME_DISP = '%d %b %Y  %H:%M:%S'
    MEDIC_TIME = int(60)



    # █▀▀▄ █▀▀ █▀▀▀ ░▀░ █▀▀▄ 　 █▀▀▄ █▀▀█ █▀▀▄ █▀▀ 　
    # █▀▀▄ █▀▀ █░▀█ ▀█▀ █░░█ 　 █░░█ █░░█ █░░█ █▀▀ 　
    # ▀▀▀░ ▀▀▀ ▀▀▀▀ ▀▀▀ ▀░░▀ 　 ▀░░▀ ▀▀▀▀ ▀▀▀░ ▀▀▀ 　
    #
    # ░▀░ █▀▀▄ ░▀░ ▀▀█▀▀ ░▀░ █▀▀█ █░░ ░▀░ ▀▀█ ▀▀█▀▀ ░▀░ █▀▀█ █▀▀▄
    # ▀█▀ █░░█ ▀█▀ ░░█░░ ▀█▀ █▄▄█ █░░ ▀█▀ ▄▀░ ░░█░░ ▀█▀ █░░█ █░░█
    # ▀▀▀ ▀░░▀ ▀▀▀ ░░▀░░ ▀▀▀ ▀░░▀ ▀▀▀ ▀▀▀ ▀▀▀ ░░▀░░ ▀▀▀ ▀▀▀▀ ▀░░▀

    def __init__(self, serial, baud, database):

        XBeeDevice.__init__(self, serial, baud)

        self.DB = database

        self.end_nodes = {}
        self.user_reg  = None

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


    def find_nodes(self):

        print("Finding nodes in the network")

        self.XB_net.start_discovery_process()

        while self.XB_net.is_discovery_running():
            time.sleep(0.1)


    # █▀▀ █▀▀▄ █▀▀▄ 　 █▀▀▄ █▀▀█ █▀▀▄ █▀▀ 　
    # █▀▀ █░░█ █░░█ 　 █░░█ █░░█ █░░█ █▀▀ 　
    # ▀▀▀ ▀░░▀ ▀▀▀░ 　 ▀░░▀ ▀▀▀▀ ▀▀▀░ ▀▀▀ 　
    #
    # ░▀░ █▀▀▄ ░▀░ ▀▀█▀▀ ░▀░ █▀▀█ █░░ ░▀░ ▀▀█ ▀▀█▀▀ ░▀░ █▀▀█ █▀▀▄
    # ▀█▀ █░░█ ▀█▀ ░░█░░ ▀█▀ █▄▄█ █░░ ▀█▀ ▄▀░ ░░█░░ ▀█▀ █░░█ █░░█
    # ▀▀▀ ▀░░▀ ▀▀▀ ░░▀░░ ▀▀▀ ▀░░▀ ▀▀▀ ▀▀▀ ▀▀▀ ░░▀░░ ▀▀▀ ▀▀▀▀ ▀░░▀



    # █▀▀▄ █▀▀ █▀▀▀ ░▀░ █▀▀▄ 　 ▀▀█▀▀ █░█ ░░ █▀▀█ █░█
    # █▀▀▄ █▀▀ █░▀█ ▀█▀ █░░█ 　 ░░█░░ ▄▀▄ ▀▀ █▄▄▀ ▄▀▄
    # ▀▀▀░ ▀▀▀ ▀▀▀▀ ▀▀▀ ▀░░▀ 　 ░░▀░░ ▀░▀ ░░ ▀░▀▀ ▀░▀
    #
    # █░░█ █▀▀█ █▀▀▄ █▀▀▄ █░░ █▀▀ █▀▀█
    # █▀▀█ █▄▄█ █░░█ █░░█ █░░ █▀▀ █▄▄▀
    # ▀░░▀ ▀░░▀ ▀░░▀ ▀▀▀░ ▀▀▀ ▀▀▀ ▀░▀▀


    def transmit_pkt(self, dest, pkt):

        self.log_comm(dest, pkt)
        self.send_data(dest, pkt)

        print(f"Sent {pkt.hex()} to {dest}")


    def log_comm(self, dest, pkt):

        data = {'sender' : str(self.get_64bit_addr()),
                'dest'   : str(dest.get_64bit_addr()),
                'command': pkt[0],
                'payload': pkt[1:].hex(),
               }

        # self.exec_sql(SQL.add_row, 'data', data)
        self.DB.session.add(PG.CommsData(**data))
        self.DB.session.commit()


    def net_mod_callback(self, event, reason, node):

        print('Network Event:')
        print("Type: %s (%d)" % (event.description, event.code))
        print("Reason: %s (%d)" % (reason.description, reason.code))

        if node and node.get_64bit_addr() not in self.end_nodes:

            print(f"Adding {node} to Network")

            end_node = END_NODE(self, node)
            node_addr = str(node.get_64bit_addr())

            nd_status = PG.get_node_status(node_addr)

            if nd_status:

                end_node.location      = nd_status.location
                end_node.configuration = nd_status.config

                # Set recent timestamp to now to show last time on the Network
                # This matters for selecting nodes that are "available" when
                # filtering for nodes active "today"
                nd_status.timestamp = datetime.now()

                if nd_status.config == CONTROL_POINT.CAPTURE:

                    end_node.capture_status = PG.get_capture_status(node_addr)
            else:

                self.DB.session.add(PG.NodeStatus(**{'node':node_addr}))

            self.end_nodes[node_addr] = end_node
            self.DB.session.commit()


    def data_received_callback(self, xb_msg):

        payload = xb_msg.data
        sender  = xb_msg.remote_device

        print(f'Received (payload): {payload}')

        if str(sender.get_64bit_addr()) not in self.end_nodes:

            self.find_nodes()

        data = {
                'sender' : str(sender.get_64bit_addr()),
                'dest'   : str(self.get_64bit_addr()),
                'command': payload[0],
                'payload': payload[1:].hex(),
               }

        self.DB.session.add(PG.CommsData(**data))
        self.DB.session.commit()

        cmd = payload[0]

        if payload[1:] and cmd in self.parse_message:

            pkt = self.parse_message[cmd](sender, payload)

            if pkt: self.transmit_pkt(sender, pkt)


    # █▀▀ █▀▀▄ █▀▀▄ 　 ▀▀█▀▀ █░█ ░░ █▀▀█ █░█
    # █▀▀ █░░█ █░░█ 　 ░░█░░ ▄▀▄ ▀▀ █▄▄▀ ▄▀▄
    # ▀▀▀ ▀░░▀ ▀▀▀░ 　 ░░▀░░ ▀░▀ ░░ ▀░▀▀ ▀░▀
    #
    # █░░█ █▀▀█ █▀▀▄ █▀▀▄ █░░ █▀▀ █▀▀█
    # █▀▀█ █▄▄█ █░░█ █░░█ █░░ █▀▀ █▄▄▀
    # ▀░░▀ ▀░░▀ ▀░░▀ ▀▀▀░ ▀▀▀ ▀▀▀ ▀░▀▀



    # █▀▀▄ █▀▀ █▀▀▀ ░▀░ █▀▀▄ 　 █▀▄▀█ █▀▀ █▀▀▀
    # █▀▀▄ █▀▀ █░▀█ ▀█▀ █░░█ 　 █░▀░█ ▀▀█ █░▀█
    # ▀▀▀░ ▀▀▀ ▀▀▀▀ ▀▀▀ ▀░░▀ 　 ▀░░░▀ ▀▀▀ ▀▀▀▀
    #
    # █▀▀█ █▀▀ ▀▀█▀▀ ░▀░ █▀▀█ █▀▀▄
    # █▄▄█ █░░ ░░█░░ ▀█▀ █░░█ █░░█
    # ▀░░▀ ▀▀▀ ░░▀░░ ▀▀▀ ▀▀▀▀ ▀░░▀

    @property
    def parse_message(self):

        msg_dict = {CONTROL_POINT.REGISTER  : self.__register,
                    CONTROL_POINT.CAPTURE   : self.__capture,
                    CONTROL_POINT.MEDIC     : self.__medic,
                    CONTROL_POINT.QUERY     : self.__query,
                    CONTROL_POINT.ND_STATUS : self.__status,
                    CONTROL_POINT.USER_REG  : self.__user_reg}

        return msg_dict


    def __register(self, sender, payload):

        uid = payload[2:6].hex()
        team = payload[1]

        print(f'Registering {uid} to team {team}')

        exists = PG.get_uid_in_team(uid)
        self.DB.session.commit()
        # If the player already exists, update his information
        if exists:
            exists.team      = team
            exists.timestamp = datetime.now()
        else:
            self.DB.session.add(PG.Team(**{'uid':uid,'team':team}))

        self.DB.session.commit()

        # If the player is not "alive", reset his alive status
        if not PG.get_is_alive(uid):

            self.DB.session.add(PG.Medic(**{'uid':uid,'alive':1}))
            self.DB.session.commit()

        return None


    # ▒█▀▀█ ▒█▀▀▀ ▒█▀▀█ ▀█▀ ▒█▄░▒█ 　 ▒█▀▀█ ░█▀▀█ ▒█▀▀█ ▀▀█▀▀ ▒█░▒█ ▒█▀▀█ ▒█▀▀▀
    # ▒█▀▀▄ ▒█▀▀▀ ▒█░▄▄ ▒█░ ▒█▒█▒█ 　 ▒█░░░ ▒█▄▄█ ▒█▄▄█ ░▒█░░ ▒█░▒█ ▒█▄▄▀ ▒█▀▀▀
    # ▒█▄▄█ ▒█▄▄▄ ▒█▄▄█ ▄█▄ ▒█░░▀█ 　 ▒█▄▄█ ▒█░▒█ ▒█░░░ ░▒█░░ ░▀▄▄▀ ▒█░▒█ ▒█▄▄▄

    def __capture(self, sender, payload):

        node       = str(sender.get_64bit_addr())
        cap_status = PG.get_capture_status(node)
        self.DB.session.commit()

        if len(payload[1:5]) == 1 and cap_status:
            # If the payload does not contain a UID, it's passing the status
            # byte to indicate that capture is complete
            # Get the most recent team interaction with the node and set the
            # node as stable with the prosecuting team as owning

            # We only need to update the stability column for the current status
            cap_status.stable = payload[1]
            self.DB.session.commit()

            # Grab the last captor from SCORE, to determine who the points are
            # awarded to when/if capture is completed
            orig_captor = PG.get_last_captor(node)

            # If there was an originating captor and the node is now STABLE
            # (...The node will only ever be considered stable here)
            if orig_captor and payload[1]:

                data = {'node'  :node,
                        'uid'   :orig_captor.uid,
                        'team'  :orig_captor.team,
                        'points':2,
                        'action':'CAPTURE COMPLETE'}

                self.DB.session.add(PG.Score(**data))

            self.DB.session.commit()

        if len(payload[1:5]) == 4:

            uid = payload[1:5].hex()
            team = PG.get_team(uid)
            self.DB.session.commit()

            if team:

                print(f'Team {team} is prosecuting Node_{node}')

                data = {'uid':uid, 'team':team, 'node':node}

                if cap_status:

                    # own_uid, own_team, cap_stable, cap_time = cap_status
                    # If no one owns the node, the attacker captures immediately
                    # If his teams was already there, he only assists
                    data['action'] = 'CAPTURE' if team != cap_status.team else 'ASSIST'
                    data['points'] = 2 if team != cap_status.team else 1

                    if data['action'] == 'CAPTURE':

                        begin = PG.get_time_capture_complete(node)

                        # ONLY figure out the score if the score has not already
                        # been figured out (i.e. the capture was closed out)
                        if begin and not PG.get_is_capture_closed(node):

                            held  = int((datetime.now() - begin).total_seconds())

                            tdat = {'node'     :node,
                                    'team'     :cap_status.team,
                                    'time_held':held,
                                    'action'   :'LOST CONTROL'}

                            self.DB.session.add(PG.Score(**tdat))

                        self.DB.session.commit()

                else:
                    # If there was no status for the node - this is a capture
                    # and the capture should be instant
                    data['action'] = 'CAPTURE'
                    data['points'] = 2

                # If the ACTION is to "CAPTURE" then always add score data.  If it is an assist
                # ONLY add score data if the node IS NOT STABLE - can only be an ASSIST if cap_status is
                # known
                if data['action'] == 'CAPTURE' or (data['action'] == 'ASSIST' and not cap_status.stable):

                    self.DB.session.add(PG.Score(**data))
                    self.DB.session.commit()

                data = {'node':node, 'tag':uid, 'team':team}
                # If the node is not currently owned, then it's immediately stable
                # If the prosecuting team is the same team, keep it stable
                data['stable'] = 1 if not cap_status or (cap_status.stable and team == cap_status.team) else 0

                if cap_status:

                    cap_status.tag    = uid
                    cap_status.team   = team
                    # TODO cleanup how this is assigned
                    cap_status.stable = data['stable']

                else:

                    self.DB.session.add(PG.CaptureStatus(**data))

                self.DB.session.commit()

                # In all cases, return CAPTURE and TEAM so the node can
                # shift status appropriately
                return bytearray([CONTROL_POINT.CAPTURE, team])

            # If you made it here, the UID is not registered to a team
            print(f'{uid} is not registered to a team')

        return None

    # ▒█▀▀▀ ▒█▄░▒█ ▒█▀▀▄ 　 ▒█▀▀█ ░█▀▀█ ▒█▀▀█ ▀▀█▀▀ ▒█░▒█ ▒█▀▀█ ▒█▀▀▀
    # ▒█▀▀▀ ▒█▒█▒█ ▒█░▒█ 　 ▒█░░░ ▒█▄▄█ ▒█▄▄█ ░▒█░░ ▒█░▒█ ▒█▄▄▀ ▒█▀▀▀
    # ▒█▄▄▄ ▒█░░▀█ ▒█▄▄▀ 　 ▒█▄▄█ ▒█░▒█ ▒█░░░ ░▒█░░ ░▀▄▄▀ ▒█░▒█ ▒█▄▄▄


    def __medic(self, sender, payload):

        uid = payload[1:5].hex()
        medic = PG.get_is_alive(uid)
        self.DB.session.commit()

        DEAD  = 0x00
        ALIVE = 0x01

        if medic:

            alive, timestamp = medic.alive, medic.timestamp

            d_t = datetime.now() - timestamp

            if not alive and d_t.total_seconds() >= CONTROL_POINT.MEDIC_TIME:
                # If he was dead and has waited the correct amount of time,
                # bring him back to life
                print(f'{uid} is ALIVE')

                medic.alive     = ALIVE
                medic.timestamp = datetime.now()

                self.DB.session.commit()

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

                medic.alive     = DEAD
                medic.timestamp = datetime.now()

                self.DB.session.commit()

                return bytearray([CONTROL_POINT.MEDIC, DEAD, CONTROL_POINT.MEDIC_TIME])

        else:
            # If he didn't exist at all then register him and asume he's checking
            # in for the first time because he's dead.
            print(f'{uid} is registered DEAD')

            data = {'uid':uid,'alive':DEAD}

            self.DB.session.add(PG.Medic(**data))
            self.DB.session.commit()

            return bytearray([CONTROL_POINT.MEDIC, DEAD, CONTROL_POINT.MEDIC_TIME])


    def __query(self, sender, payload):

        uid = payload[1:5].hex()
        medic = PG.get_is_alive(uid)

        alive = medic.alive if medic else 0x00
        team  = PG.get_team(uid)
        self.DB.session.commit()

        if team: pkt = bytearray([CONTROL_POINT.QUERY, team, alive])
        else: pkt = bytearray([CONTROL_POINT.QUERY, 0x00, 0x00])

        return pkt


    # TODO this needs to reflect 'CAPTURE' in the function call
    def __status(self, sender, payload):

        node = str(sender.get_64bit_addr())
        status = PG.get_capture_status(node)
        self.DB.session.commit()

        if not status: return None

        cmd    = bytearray([CONTROL_POINT.ND_STATUS])
        uid    = bytearray.fromhex(status.tag)
        team   = bytearray([status.team])
        stable = bytearray([status.stable])

        return cmd + uid + team + stable


    def __user_reg(self, sender, payload):

        uid = payload[1:5].hex()

        if self.user_reg: return None
        else:             self.user_reg = uid


    # TODO this is not currently in use...save for future possibilities
    def uid_handler(self, uid):

        print(f'NFC Reader found: {bytearray(uid).hex(): <20}')

        if self.team_register and self.configuration == CONTROL_POINT.REGISTER:

            pass


# ███████╗███╗░░██╗██████╗░
# ██╔════╝████╗░██║██╔══██╗
# █████╗░░██╔██╗██║██║░░██║
# ██╔══╝░░██║╚████║██║░░██║
# ███████╗██║░╚███║██████╔╝
# ╚══════╝╚═╝░░╚══╝╚═════╝░
#
# ░█████╗░░█████╗░███╗░░██╗████████╗██████╗░░█████╗░██╗░░░░░██╗░░░░░███████╗██████╗░
# ██╔══██╗██╔══██╗████╗░██║╚══██╔══╝██╔══██╗██╔══██╗██║░░░░░██║░░░░░██╔════╝██╔══██╗
# ██║░░╚═╝██║░░██║██╔██╗██║░░░██║░░░██████╔╝██║░░██║██║░░░░░██║░░░░░█████╗░░██████╔╝
# ██║░░██╗██║░░██║██║╚████║░░░██║░░░██╔══██╗██║░░██║██║░░░░░██║░░░░░██╔══╝░░██╔══██╗
# ╚█████╔╝╚█████╔╝██║░╚███║░░░██║░░░██║░░██║╚█████╔╝███████╗███████╗███████╗██║░░██║
# ░╚════╝░░╚════╝░╚═╝░░╚══╝░░░╚═╝░░░╚═╝░░╚═╝░╚════╝░╚══════╝╚══════╝╚══════╝╚═╝░░╚═╝
