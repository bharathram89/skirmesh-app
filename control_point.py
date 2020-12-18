import xbee
import utime, ubinascii
from led import TLC59116

#need to figure out how to address these things for the transmit command

def configure_node(**kwargs):

    for cmd, value in kwargs.items():
        print(cmd, '  ', value)
        xbee.atcmd(cmd, value)


class NODE(object):
    """
        this will be the object which will eventually take over all node related
        functionality
    """

    CONFIGURE = 0x00
    REGISTER  = 0x01
    QUERY     = 0x02
    CAPTURE   = 0x0A
    MEDIC     = 0x0E
    DISCOVERY = 0xDD
    ND_STATUS = 0x53

    CMD_DICT = {CONFIGURE : 'CONFIGURE',
                REGISTER  : 'REGISTER',
                QUERY     : 'QUERY',
                CAPTURE   : 'CAPTURE',
                MEDIC     : 'MEDIC',
                DISCOVERY : 'DISCOVERY'}

    #Team colors
    TEAM_CMAP = {
                 0x01 : 'red',
                 0x02 : 'blue',
                 0x03 : 'yellow',
                 0x04 : 'green',
                 0x05 : 'purple'
                }

    CAPTURE_GRACE_PERIOD = 60000
    MEDIC_TIME           = 60

    def __init__(self,
                 controller,
                 siren,
                 tag_reader,
                 led_ctrl_addr,
                 i2c_bus,
                 owner = None):

        self.led_ctrl = TLC59116(led_ctrl_addr, i2c_bus, **{'num_RGBs':5})

        self.led_ctrl.all_ON_OFF(TLC59116.LED_ON)
        self.led_ctrl.set_ALL_color('purple')

        self.tag_reader = tag_reader
        self.tag_reader.listen_for_passive_target()
        self.tag_cooldown  = 2000
        self.tag_last_read = utime.ticks_ms()

        self.siren = siren

        self.controller           = controller

        self.configuration = NODE.CAPTURE

        self.capture_by       = None
        self.capture_unstable = False
        self.capture_time     = None
        self.capture_register = list()
        self.capture_captor   = None

        self.team_register = None



    def transmit(self, pkt):

        print('sending %s' % pkt)

        self.user_feedback(True)
        xbee.transmit(self.controller, pkt)
        self.user_feedback(False)



    @property
    def _time_held(self):

        t = utime.ticks_ms()
        ct = self.capture_time

        return utime.ticks_diff(t,ct) if ct else 0


    def _set_capture_lights(self):

        frac = int((5*self._time_held)//NODE.CAPTURE_GRACE_PERIOD)
        frac = min(frac, 5)

        if frac > self.capture_light_i:

            self.capture_light_i = frac

            index = range(frac) if not self.recapture else range(4,4-frac,-1)

            for i in index:
                self.led_ctrl.set_RGB_color(i, NODE.TEAM_CMAP[self.capture_unstable])


    def _stabilize(self, team = None):

        self.capture_by       = team or self.capture_unstable
        self.capture_unstable = False
        self.capture_light_i  = -1
        self.recapture        = False

        self.capture_register = []

        if self.capture_by:
            self.led_ctrl.set_ALL_color(NODE.TEAM_CMAP[self.capture_by])

        # Send a message to say the node is stable
        self.transmit(bytearray([NODE.CAPTURE, 0x01]))


    def _destabilize(self, team):

        self.led_ctrl.blink_ALL(True)

        # This is where team steals the node
        self.capture_time     = utime.ticks_ms()

        # This will swap the light direction back and forth, but it's
        # only a recapture if the node was unstable
        if self.capture_unstable:
            self.recapture = True if not self.recapture else False

        self.capture_unstable = team
        self.capture_light_i  = -1

        # Clear out old captors (not most recent) to allow re-engagement
        self.capture_register = []
        if self.capture_captor not in self.capture_register:
            self.capture_register.append(self.capture_captor)


    def valid_capture(self, uid = None, team = None):

        # This is just an update step
        if self.capture_unstable:

            self._set_capture_lights()

            if self._time_held >= NODE.CAPTURE_GRACE_PERIOD:
                # Once the capture has held for the predetermined time
                # validate the capture and reset capture params
                print("Node stabilized, captured by %s" % self.capture_captor)

                self._stabilize()
                # Send a message to say the node is stable
                self.transmit(bytearray([NODE.CAPTURE, 0x01]))

        # A valid capture is when a new UID is identified for each event
        if uid:

            self.capture_captor = ubinascii.hexlify(uid)

            if self.capture_captor in self.capture_register:

                print("UID already among captors")

                return False

            print("Current captor %s is added to register" % uid)
            self.capture_register.append(self.capture_captor)

            return True

        # A valid capture can also come when the team is validated
        if team:

            if not self.capture_by:

                print("Node not controlled - Team %s now owns" % team)
                self._stabilize(team = team)

                return True

            elif self.capture_by != team and self.capture_unstable != team:

                print("Team %s steals, node is unstable" % team)
                self._destabilize(team)

            elif (self.capture_unstable and
                  self.capture_unstable != team and
                  self.capture_by == team):
                # If unstable, the defending team can recover, but,
                # to recover, the team owes time lost
                print("Team %s recovered the node and must recover time lost" % team)
                # Time to cover capture Plus time held by other team
                payback = utime.ticks_diff(self._time_held, NODE.CAPTURE_GRACE_PERIOD)

                self._destabilize(team)
                self.capture_time = utime.ticks_add(utime.ticks_ms(), payback)

            elif team == self.capture_unstable:

                print("Additional team members have assisted capture.")
                # If the same team builds defense, capture time is reduced
                # A team request will only be sent if the uid is not present
                # in capture_register
                self.capture_time = utime.ticks_diff(self.capture_time, NODE.CAPTURE_GRACE_PERIOD / 10)

            elif not self.capture_unstable and team == self.capture_by:

                print("Team %s already owns this node" % team)
                # Capture register is only necessary in transition - clear
                # it out all other times.
                self.capture_register = []

        return False


    @property
    def parse_message(self):

        msg_dict = {NODE.CONFIGURE : self.__reconfigure,
                    NODE.CAPTURE   : self.__capture,
                    NODE.MEDIC     : self.__medic,
                    NODE.QUERY     : self.__query,
                    # NODE.DISCOVERY : self.__discovery,
                    NODE.ND_STATUS : self.__set_status}

        return msg_dict


    def __reconfigure(self, payload):

        config = payload[1]

        print('Reconfiguring to %s' % NODE.CMD_DICT[config])
        self.configuration = config
        self.led_ctrl.all_ON_OFF(TLC59116.LED_OFF)

        if config == NODE.REGISTER and len(payload) > 2:

            self.team_register = payload[2]
            self.led_ctrl.set_RGB_color(1, NODE.TEAM_CMAP[self.team_register])
            self.led_ctrl.set_RGB_color(2, NODE.TEAM_CMAP[self.team_register])

            return None

        if config == NODE.CAPTURE:
            # Fully stabilize the node by flushing previous teams
            self.capture_unstable = None
            self._stabilize()

        return None


    def __capture(self, payload):

        self.valid_capture(team = payload[1])

        return None


    def _set_heal_lights(self, time_remaining):

        for i in range(int(5 * (1 - time_remaining/NODE.MEDIC_TIME))):
            self.led_ctrl.set_RGB_color(i, 'black')


    def __medic(self, payload):

        alive = payload[1]
        state = payload[2]

        print('Requested player is %s' % "ALIVE" if alive else "DEAD")
        self.led_ctrl.set_ALL_color("green" if alive else "red")

        if not alive: self._set_heal_lights(state)

        utime.sleep_ms(1000)
        self.led_ctrl.all_ON_OFF(TLC59116.LED_OFF)

        return None


    def __query(self, payload):

        team  = payload[1]
        alive = payload[2]

        if not team:

            print("Player is not registered to a team")
            self.led_ctrl.set_blink_cycle(0.2)
            self.led_ctrl.set_ALL_color('red')
            self.led_ctrl.blink_ALL(True)

        else:

            print('Requested player is %s' % "ALIVE" if alive else "DEAD", 'on Team %s' % team)
            self.led_ctrl.all_ON_OFF(TLC59116.LED_OFF)
            self.led_ctrl.set_RGB_color(0, NODE.TEAM_CMAP[team])
            self.led_ctrl.set_RGB_color(2, 'green' if alive else 'red')

        utime.sleep_ms(3000)
        self.led_ctrl.set_blink_cycle(1)
        self.led_ctrl.all_ON_OFF(TLC59116.LED_OFF)



    def __get_status(self):

        self.transmit(bytearray([NODE.ND_STATUS]))



    def __set_status(self, payload):

        uid    = payload[1:5]
        team   = payload[5]
        stable = payload[6]

        self.capture_captor   = ubinascii.hexlify(uid)

        print('Init %s' % NODE.TEAM_CMAP[team].upper(), "" if stable else "UN", 'STABLE')

        if not stable:
            self._destabilize(team)

        else:
            # This statement kicks the node to stabilize with the captor
            self._stabilize(team = team)


    def user_feedback(self, state):

        if state:

            self.led_ctrl.status_LED(self.led_ctrl.LED_ON)
            self.siren.on()

        else:

            self.led_ctrl.status_LED(self.led_ctrl.LED_OFF)
            self.siren.off()


    def read_raw_pkt(self):

        pkt = xbee.receive()

        if pkt:

            payload = pkt['payload']
            cmd = payload[0] if payload else None

            print('PKT: ', payload)

            if payload and cmd in self.parse_message:

                print(*payload)
                pkt = self.parse_message[cmd](payload)
                if pkt: self.transmit(pkt)

            return True

        else: return None


    def _scan_NFC(self):

        uid = None

        # Pull the queue regardless of whether we keep it to clear the buffer
        uid = self.tag_reader.get_passive_target()
        # Make sure the reader is looking for the next card
        self.tag_reader.listen_for_passive_target()

        # if utime.ticks_diff(utime.ticks_ms(), self.tag_last_read) < self.tag_cooldown:
        #     return None
        #
        # self.tag_last_read = utime.ticks_ms()

        return uid


    def read_player_tag(self):

        uid = self._scan_NFC()
        if not uid: return None

        pkt = None

        print('NFC Reader found: %s' % uid)

        if self.configuration == NODE.CAPTURE:

            print('%s Initiated Capture' % uid)

            if self.valid_capture(uid = uid):
                pkt = bytearray([self.configuration]) + uid

        if self.team_register and self.configuration == NODE.REGISTER:

            pkt = bytearray([NODE.REGISTER, self.team_register]) + uid

            self.siren.on()

            for i in range(3,5):
                self.led_ctrl.set_RGB_color(i, NODE.TEAM_CMAP[self.team_register])

            utime.sleep_ms(200)

            for i in range(3,5):
                self.led_ctrl.set_RGB_color(i, 'black')

            self.siren.off()

        if self.configuration == NODE.MEDIC or self.configuration == NODE.QUERY:
            pkt = bytearray([self.configuration]) + uid

        if pkt: self.transmit(pkt)


    def node_procedures(self):

        if self.configuration == NODE.CAPTURE and self.valid_capture():
            self.transmit(bytearray(ubinascii.unhexlify(self.captor_captor)))

        if self.tag_reader._irq.value() == 0:
            self.read_player_tag()

        self.read_raw_pkt()
