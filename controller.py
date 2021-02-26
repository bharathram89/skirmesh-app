from digi.xbee.devices import XBeeDevice, RemoteZigBeeDevice, RemoteXBeeDevice
from datetime import datetime

import models.db_models as PG
import time, os



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
    PAIR_UID  = 0x03
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
    DIFF_TIME = 0x8D
    ARM_TIME  = 0x8F
    MED_TIME  = 0x8E

    SCALE_PTS = 0x9a


    SET_LOCATION = 0xff


    # █▀▄▀█ █▀▀ █▄░█ █░█   █▀ █▀▀ ▀█▀ ▀█▀ █▀▀ █▀█ █▀
    # █░▀░█ ██▄ █░▀█ █▄█   ▄█ ██▄ ░█░ ░█░ ██▄ █▀▄ ▄█
    # This is primarly used to set the menu options
    CMD_DICT = {
                CONFIGURE   : 'CONFIGURE',
                REGISTER    : 'REGISTER',
                QUERY       : 'QUERY',
                CAPTURE     : 'CAPTURE',
                MEDIC       : 'MEDIC',
                BOMB        : 'BOMB',
                SET_LOCATION: 'SET LOCATION',
                CAPT_TIME   : 'SET CAPTURE TIME',
                BOMB_TIME   : 'SET BOMB TIMER',
                DIFF_TIME   : 'SET BOMB DISARM TIME',
                ARM_TIME    : 'SET BOMB ARM TIME',
                PAIR_UID    : 'PAIR UID',
                MED_TIME    : 'SET MEDIC TIME',
                SET_TEAM    : 'SET TEAM',
                CAP_PERC    : 'SET ASSIST %',
                SCALE_PTS   : 'SET POINT SCALE',
                }



    # ▄▀█ █░░ █░░ █▀█ █░█░█ █▀▀ █▀▄   █▀▀ █▀█ █▄░█ █▀▀ █ █▀▀ █▀
    # █▀█ █▄▄ █▄▄ █▄█ ▀▄▀▄▀ ██▄ █▄▀   █▄▄ █▄█ █░▀█ █▀░ █ █▄█ ▄█

    CONFIGURATIONS = [REGISTER,
                      QUERY,
                      CAPTURE,
                      MEDIC,
                      BOMB]


    # █▀▀▄ █▀▀ █▀▀▀ ░▀░ █▀▀▄ 　 █▀▀▄ █▀▀█ █▀▀▄ █▀▀ 　
    # █▀▀▄ █▀▀ █░▀█ ▀█▀ █░░█ 　 █░░█ █░░█ █░░█ █▀▀ 　
    # ▀▀▀░ ▀▀▀ ▀▀▀▀ ▀▀▀ ▀░░▀ 　 ▀░░▀ ▀▀▀▀ ▀▀▀░ ▀▀▀ 　
    #
    # ░▀░ █▀▀▄ ░▀░ ▀▀█▀▀ ░▀░ █▀▀█ █░░ ░▀░ ▀▀█ ▀▀█▀▀ ░▀░ █▀▀█ █▀▀▄
    # ▀█▀ █░░█ ▀█▀ ░░█░░ ▀█▀ █▄▄█ █░░ ▀█▀ ▄▀░ ░░█░░ ▀█▀ █░░█ █░░█
    # ▀▀▀ ▀░░▀ ▀▀▀ ░░▀░░ ▀▀▀ ▀░░▀ ▀▀▀ ▀▀▀ ▀▀▀ ░░▀░░ ▀▀▀ ▀▀▀▀ ▀░░▀

    def __init__(self, serial, baud, database):

        XBeeDevice.__init__(self, serial, baud)

        self.DB          = database
        self.field       = None
        self.is_paused   = False
        self.halt_points = False

        self.end_nodes = set()
        self.user_reg  = None

        if os.path.exists('.controller_config'):

            for line in open('.controller_config'):

                if "field" in line:

                    self.__field = line.split('=')[-1]

        print(f"Initialized with field: {self.field}")


    @property
    def field(self):
        return self.__field

    @field.setter
    def field(self, location):

        if location:

            with open('.controller_config', 'w') as f:
                 f.write('field='+location)

        self.__field = location


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
        self.DB.add(PG.CommsData(**data))
        self.DB.commit()


    def net_mod_callback(self, event, reason, node):

        print('Network Event:')
        print("Type: %s (%d)" % (event.description, event.code))
        print("Reason: %s (%d)" % (reason.description, reason.code))

        if node and node.get_64bit_addr() not in self.end_nodes:

            print(f"Adding {node} to Network")

            node_addr = str(node.get_64bit_addr())
            self.end_nodes.add(node_addr)

            node = PG.NodeStatus.query.filter(PG.NodeStatus.node == node_addr).first()
            if node:

                # Set recent timestamp to now to show last time on the Network
                # This matters for selecting nodes that are "available" when
                # filtering for nodes active "today"
                node.timestamp = datetime.now()

            else:
                # Initialize NodeStatus with all the defaults
                self.DB.add(PG.NodeStatus(**{'node':node_addr}))


            self.DB.commit()


    def data_received_callback(self, xb_msg):

        payload = xb_msg.data
        sender  = xb_msg.remote_device
        address = str(sender.get_64bit_addr())

        print(f'Received (payload): {payload}')

        if address not in self.end_nodes:

            self.find_nodes()

        data = {
                'sender' : address,
                'dest'   : str(self.get_64bit_addr()),
                'command': payload[0],
                'payload': payload[1:].hex(),
               }

        self.DB.add(PG.CommsData(**data))
        self.DB.commit()

        cmd = payload[0]

        if cmd in self.parse_message and self.field:

            pkt = self.parse_message[cmd](sender, payload)

            if pkt: self.transmit_pkt(sender, pkt)

        if not self.field:
            print('SELECT A FIELD OR NOTHING WILL WORK')


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
                    CONTROL_POINT.ND_STATUS : self._status,
                    CONTROL_POINT.PAIR_UID  : self.__pair_uid}

        return msg_dict


    def __register(self, sender, payload):

        uid = payload[4:8].hex()
        team = payload[1:4].hex()

        print(f'Registering {uid} to team {team}')

        is_team = PG.Team.query.filter(PG.Team.team == team).first()
        is_uid  = PG.UID.query.filter(PG.UID.uid == uid).first()

        # If the team doesn't exists - add it
        if not is_team: self.DB.add(PG.Team(team=team))

        # If the uid exists, update it - if not, add it
        if is_uid:
            # This was necessary to force a timestamp update if nothing changes
            # but a player "registers" onto a team on gameday
            if is_uid.team == team and is_uid.field == self.field:
                is_uid.timestamp = datetime.now()

            is_uid.team        = team
            is_uid.field       = self.field
            is_uid.medic.alive = 1

        else:

            is_uid = PG.UID(uid=uid, team=team, field=self.field)
            self.DB.add(is_uid)

            is_uid.medic = PG.Medic(uid=is_uid.uid)

        self.DB.commit()

        return None


    # ▒█▀▀█ ▒█▀▀▀ ▒█▀▀█ ▀█▀ ▒█▄░▒█ 　 ▒█▀▀█ ░█▀▀█ ▒█▀▀█ ▀▀█▀▀ ▒█░▒█ ▒█▀▀█ ▒█▀▀▀
    # ▒█▀▀▄ ▒█▀▀▀ ▒█░▄▄ ▒█░ ▒█▒█▒█ 　 ▒█░░░ ▒█▄▄█ ▒█▄▄█ ░▒█░░ ▒█░▒█ ▒█▄▄▀ ▒█▀▀▀
    # ▒█▄▄█ ▒█▄▄▄ ▒█▄▄█ ▄█▄ ▒█░░▀█ 　 ▒█▄▄█ ▒█░▒█ ▒█░░░ ░▒█░░ ░▀▄▄▀ ▒█░▒█ ▒█▄▄▄

    def __capture(self, sender, payload):

        # If the game is paused, ignore all capture requests
        if self.is_paused: return None

        node       = str(sender.get_64bit_addr())
        cap_status = PG.NodeStatus.query.filter(PG.NodeStatus.node == node).first()

        last = PG.Score.query.filter(PG.Score.node == node).order_by(PG.Score.id.desc()).first()

        if len(payload[1:5]) == 1 and cap_status:
            # If the payload does not contain a UID, it's passing the status
            # byte to indicate that capture is complete
            # Get the most recent team interaction with the node and set the
            # node as stable with the prosecuting team as owning

            # We only need to update the stability column for the current status
            cap_status.stable = payload[1]
            # Grab the last captor from SCORE, to determine who the points are
            # awarded to when/if capture is completed
            orig_captor = PG.get_last_captor(node)
            # If there was an originating captor and the node is now STABLE
            # (...The node will only ever be considered stable here)
            # If the last action was CAPTURE COMPLETE, the node is coming
            # online in the middle and this avoids duplicate scores
            if orig_captor and payload[1] and (last.action != 'CAPTURE COMPLETE' if last else True):

                data = {'node'  :node,
                        'uid'   :orig_captor.uid,
                        'team'  :orig_captor.team,
                        'points':2 if not self.halt_points else 0,
                        'field' :self.field,
                        'action':'CAPTURE COMPLETE'}

                self.DB.add(PG.Score(**data))

                # Reset to only halt points for that single transaction
                self.halt_points = False

            self.DB.commit()

        if len(payload[1:5]) == 4:

            uid  = payload[1:5].hex()
            _uid = PG.UID.query.filter(PG.UID.uid == uid).first()
            team = _uid.team if _uid else None
            self.DB.commit()

            if _uid and _uid.field != self.field:
                print(f'UID {uid} is not registered to field: {self.field}')
                return None

            if team:

                print(f'Team {team} is prosecuting Node_{node}')

                data = {'uid':uid, 'team':team, 'node':node, 'field':self.field}

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
                            orig_captor = PG.get_last_captor(node)

                            tdat = {'node'     :node,
                                    'team'     :orig_captor.team,
                                    'time_held':held,
                                    # Account for points as scaled by current value
                                    'points'   :held//cap_status.point_scale,
                                    'field'    :self.field,
                                    'action'   :'LOST CONTROL'}

                            self.DB.add(PG.Score(**tdat))

                        self.DB.commit()

                else:
                    # If there was no status for the node - this is a capture
                    # and the capture should be instant
                    data['action'] = 'CAPTURE'
                    data['points'] = 2

                # If the ACTION is to "CAPTURE" then always add score data.  If it is an assist
                # ONLY add score data if the node IS NOT STABLE - can only be an ASSIST if cap_status is
                # known
                if data['action'] == 'CAPTURE' or (data['action'] == 'ASSIST' and not cap_status.stable):

                    if _uid.player:

                        if data['action'] == 'CAPTURE': _uid.player.captures += 1
                        if data['action'] == 'ASSIST': _uid.player.assists += 1

                    self.DB.add(PG.Score(**data))
                    self.DB.commit()

                data = {'node':node, 'uid':uid, 'team':team}
                # If the node is not currently owned, then it's immediately stable
                # If the prosecuting team is the same team, keep it stable
                data['stable'] = 1 if not cap_status or (cap_status.stable and team == cap_status.team) else 0

                if cap_status:

                    cap_status.uid    = uid
                    cap_status.team   = team
                    # TODO cleanup how this is assigned
                    cap_status.stable = data['stable']

                else:

                    self.DB.add(PG.NodeStatus(**data))

                self.DB.commit()

                # In all cases, return CAPTURE and TEAM so the node can
                # shift status appropriately
                return bytearray([CONTROL_POINT.CAPTURE]) + bytearray.fromhex(team)

            # If you made it here, the UID is not registered to a team
            print(f'{uid} is not registered to a team')

        self.DB.commit()

        return None

    # ▒█▀▀▀ ▒█▄░▒█ ▒█▀▀▄ 　 ▒█▀▀█ ░█▀▀█ ▒█▀▀█ ▀▀█▀▀ ▒█░▒█ ▒█▀▀█ ▒█▀▀▀
    # ▒█▀▀▀ ▒█▒█▒█ ▒█░▒█ 　 ▒█░░░ ▒█▄▄█ ▒█▄▄█ ░▒█░░ ▒█░▒█ ▒█▄▄▀ ▒█▀▀▀
    # ▒█▄▄▄ ▒█░░▀█ ▒█▄▄▀ 　 ▒█▄▄█ ▒█░▒█ ▒█░░░ ░▒█░░ ░▀▄▄▀ ▒█░▒█ ▒█▄▄▄


    def __medic(self, sender, payload):

        uid = payload[1:5].hex()

        _uid  = PG.UID.query.filter(PG.UID.uid == uid).first()
        medic = _uid.medic if _uid else None
        node  = PG.NodeStatus.query.filter(PG.NodeStatus.node == str(sender.get_64bit_addr())).first()

        if not node.allow_medic or not _uid: return None

        DEAD  = 0x00
        ALIVE = 0x01
        ALL   = 0x05

        med_time = node.med_time * 10

        if medic:

            alive, timestamp = medic.alive, medic.timestamp

            d_t = datetime.now() - timestamp

            if not alive and d_t.total_seconds() >= med_time:
                # If he was dead and has waited the correct amount of time,
                # bring him back to life
                print(f'{uid} is ALIVE')

                medic.alive     = ALIVE

                self.DB.commit()

                return bytearray([CONTROL_POINT.MEDIC, ALIVE, ALL])

            # If he's DEAD and not enough time has passed to bring him back
            # to life, then let him knows how close he is to being alive.
            if not alive and d_t.total_seconds() < med_time:

                time_remaining = med_time - d_t.total_seconds()
                time_remaining = min(max(0, time_remaining), med_time)

                num_lights = int(5 * (time_remaining/med_time))

                return bytearray([CONTROL_POINT.MEDIC, DEAD, num_lights])

            if alive:
                # If he was alive, and he's back at the medic, he probably died
                print(f'{uid} is now DEAD')

                medic.alive     = DEAD

                self.DB.commit()

                return bytearray([CONTROL_POINT.MEDIC, DEAD, ALL])

        else:
            # If he didn't exist at all then register him and asume he's checking
            # in for the first time because he's dead.
            print(f'{uid} is registered DEAD')

            data = {'uid':uid,'alive':DEAD}

            _uid.medic = PG.Medic(**data)
            self.DB.commit()

            return bytearray([CONTROL_POINT.MEDIC, DEAD, ALL])


    def __query(self, sender, payload):

        uid = payload[1:5].hex()
        _uid  = PG.UID.query.filter(PG.UID.uid == uid).first()
        medic = _uid.medic

        alive = medic.alive if medic else 0x00
        team  = _uid.team
        self.DB.commit()

        if team: pkt = bytearray([CONTROL_POINT.QUERY]) + bytearray.fromhex(team) + bytearray([alive])
        else: pkt = bytearray([CONTROL_POINT.QUERY, 0x00, 0x00, 0x00, 0x00])

        return pkt


    def _status(self, sender, payload):

        node  = PG.NodeStatus.query.filter(PG.NodeStatus.node == str(sender.get_64bit_addr())).first()
        self.DB.commit()

        if not node: return None

        cmd    = bytearray([CONTROL_POINT.ND_STATUS])

        state  = bytearray([node.config]) + bytearray.fromhex(node.team or '000000') + bytearray([node.stable])
        times  = bytearray([node.cap_time,
                            node.cap_asst,
                            node.bomb_time,
                            node.arm_time,
                            node.diff_time])

        uid    = bytearray.fromhex(node.uid) if node.uid else bytearray()

        return cmd + state + times + uid


    def __pair_uid(self, sender, payload):

        uid = payload[1:5].hex()

        if self.user_reg: return None
        else:             self.user_reg = uid


    # TODO this is not currently in use...save for future possibilities
    def uid_handler(self, uid):

        print(f'NFC Reader found: {uid.hex(): <20}')

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
