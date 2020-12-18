class TLC59116(object):

    cnames = {
        'black'                : '#000000',
        'blue'                 : '#0000FF',
        'brown'                : '#A52A2A',
        'cyan'                 : '#00FFFF',
        'gold'                 : '#FFD700',
        'gray'                 : '#808080',
        'green'                : '#008000',
        'magenta'              : '#FF00FF',
        'maroon'               : '#800000',
        'orange'               : '#FFA500',
        'pink'                 : '#FFC0CB',
        'purple'               : '#800080',
        'red'                  : '#FF0000',
        'silver'               : '#C0C0C0',
        'teal'                 : '#008080',
        'violet'               : '#EE82EE',
        'white'                : '#FFFFFF',
        'yellow'               : '#FFFF00',
        }

    #LED output states
    LED_OFF   = 0x00
    LED_ON    = 0x01
    LED_PWM   = 0x02
    LED_GROUP = 0x03

    #Register Addresses
    TLC_MODE1 = 0x00
    TLC_MODE2 = 0x01

    TLC_PWM_CH = {      0  : 0x02,      # Pin 6  - Attach RGB @ 0
                        1  : 0x03,      # Pin 7
                        2  : 0x04,      # Pin 8

                        3  : 0x05,      # Pin 9  - Attach RGB @ 1
                        4  : 0x06,      # Pin 11
                        5  : 0x07,      # Pin 12

                        6  : 0x08,      # Pin 13 - Attach RGB @ 2
                        7  : 0x09,      # Pin 14
                        8  : 0x0A,      # Pin 15

                        9  : 0x0B,      # Pin 16 - Attach RGB @ 3
                        10 : 0x0C,      # Pin 17
                        11 : 0x0D,      # Pin 18

                        12 : 0x0E,      # Pin 20 - Attach RGB @ 4
                        13 : 0x0F,      # Pin 21
                        14 : 0x10,      # Pin 22

                        15 : 0x11       # Pin 23 - Reserve for Attach PWM channel
                       }

    TLC_GRP_PWM    = 0x12
    TLC_GRP_FREQ   = 0x13
    TLC_LEDOUT_0   = 0x14
    TLC_LEDOUT_1   = 0x15
    TLC_LEDOUT_2   = 0x16
    TLC_LEDOUT_3   = 0x17

    #MODE1 register commands
    OSC_ON         = 0x00

    #MODE2 register commands
    GROUP_DIM      = 0x00
    GROUP_BLINK    = 0x20

    #Increment options for control register
    NO_INC         = 0x00
    ALL_INC        = 0x80
    PWM_INC        = 0xA0
    GLOBAL_INC     = 0xC0
    PWM_GLOBAL_INC = 0xE0

    def __init__(self, address, bus, **kwargs):

        self.TLC_ADDR      = address
        self.bus           = bus
        self.group_control = TLC59116.GROUP_DIM
        self.__brightness  = 100
        self.LEDOUT        = [0x00, 0x00, 0x00, 0x00]

    # def start_controller(self):   Just do this when you initialize the class
        self.set_all_pwm()
        self.__write(bytearray([TLC59116.TLC_MODE1, TLC59116.OSC_ON]))

        # Attach RGBs in order of channel assignments
        num_RGBs = kwargs.pop('num_RGBs', 0)
        self.RGBs = [RGB(i) for i in range(num_RGBs)]


    def __write(self, data):
        self.bus.writeto(self.TLC_ADDR, data)


    def __led_state(self, channel, state):

        position_in_register = ((channel % 4) * 2)
        register_location = channel // 4

        mask = 0x03 << position_in_register
        new_output_state = self.LEDOUT[register_location] | mask
        new_output_state = self.LEDOUT[register_location] & ~mask

        self.LEDOUT[register_location] = new_output_state | (state << position_in_register)
        data = bytearray([TLC59116.TLC_LEDOUT_0 + register_location, self.LEDOUT[register_location]])

        self.__write(data)


    def set_ch_pwm(self, channel, intensity):
        self.__write(bytearray([TLC59116.TLC_PWM_CH[channel], intensity]))


    def set_all_pwm(self, intensity = 0x00):

        data = bytearray([ TLC59116.PWM_INC | TLC59116.TLC_PWM_CH[0] ])

        for value in TLC59116.TLC_PWM_CH:
            data.append(intensity)

        self.__write(data)


    def set_blink_cycle(self, period, duty_cycle = 50):

        if period > .042 and period < 10.7:

            freq = int((period * 24) - 1) & 0xFF

        else: freq = 0x80

        self.__write(bytearray([TLC59116.TLC_MODE2, TLC59116.GROUP_BLINK]))
        self.__write(bytearray([TLC59116.TLC_GRP_FREQ, freq]))

        byte_duty_cycle = int((duty_cycle / 100) * 255) & 0xFF

        self.__write(bytearray([TLC59116.TLC_GRP_PWM, byte_duty_cycle]))


    def blink_ALL(self, state = True):

        if state:

            for i in range(self.num_RGBs):
                for l in range(3):

                    channel = self.RGBs[i].leds[l].channel
                    self.__led_state(channel, TLC59116.LED_GROUP)

        else: self.__write(bytearray([TLC59116.TLC_MODE2, TLC59116.GROUP_DIM]))


    def blink_RGB(self, RGB, state = True):

        for l in range(3):
            channel = self.RGBs[RGB].leds[l].channel

            if state: self.__led_state(channel, TLC59116.LED_GROUP)
            else: self.__led_state(channel, TLC59116.LED_PWM)


    def LED_ON_OFF(self, channel, state = 0x01):
        self.__led_state(channel, state)

    def all_ON_OFF(self, state = 0x01):
        for i in range(0,16):
            self.LED_ON_OFF(i, state)

    def brightness_control(self):
        for i in range(0,16):
            self.__led_state(i, TLC59116.LED_GROUP)

    def brightness(self, brightness = 128):

        self.__write(bytearray([TLC59116.TLC_MODE2, TLC59116.GROUP_DIM]))

        self.brightness_control()

        #byte_brightness = int((brightness / 100) * 255) & 0xFF
        byte_brightness = brightness

        self.__write(bytearray([TLC59116.TLC_GRP_PWM, byte_brightness]))

        self.__brightness = brightness


    @property
    def num_RGBs(self):
        return len(self.RGBs)


    def set_RGB_color(self, RGB, color):

        self.RGBs[RGB].color = color

        for l in range(3):

            channel = self.RGBs[RGB].leds[l].channel

            self.__led_state(channel, TLC59116.LED_PWM)
            self.set_ch_pwm(channel, self.RGBs[RGB].color[l])


    def set_ALL_color(self, color):

        for i in range(self.num_RGBs):

            self.set_RGB_color(i, color)


    def status_LED(self, state=0x01):
        self.LED_ON_OFF(15, state)

        

class RGB(object):

    def __init__(self, channel):

        self.leds = []
        self.color = 'green'

        for i in range(3): # for ('R','G','B')
            self.leds.append(LED(channel*3 + i))


    @property
    def color(self):
        return self.__color

    @color.setter
    def color(self, color):

        c = color.lower()

        if c in TLC59116.cnames or (len(c) == 7 and c[0] == '#'):

            new = TLC59116.cnames[c] if c in TLC59116.cnames else c
            new = new.lstrip('#')

            #self.__color = tuple(int(i+j,16) for i,j in zip(new[::2],new[1::2]))
            self.__color = (int(new[0:2], 16), int(new[2:4], 16),
                            int(new[4:6], 16))

        elif type(color) is tuple and len(color) == 3:

            self.__color = color



class LED(object):

    def __init__(self, channel):

        self.channel = channel


if __name__ == "__main__":

    import time
    #import busio, board                                 # RPi board utilities
    from machine import I2C

    TLC_ADDR = 0x60

    #i2c_com = busio.I2C(board.SCL, board.SDA)           # RPi I2C
    i2c_com = I2C(1)                                  # XBee I2C

    ctrl = TLC59116(TLC_ADDR, i2c_com, **{'num_RGBs':5})


    ctrl.all_ON_OFF(TLC59116.LED_ON)
    time.sleep(1)

    # Set all RGBs to BLUE
    ctrl.set_ALL_color('blue')
    time.sleep(1)

    # Increment each LED to ON
    ctrl.all_ON_OFF(TLC59116.LED_OFF)
    for i in range(16):
        ctrl.LED_ON_OFF(i, TLC59116.LED_ON)
        time.sleep(0.125)

    # Set color to GREEN, set and blink @ 0.5sec on/off
    ctrl.set_ALL_color('#00AA00')
    ctrl.set_blink_cycle(1)
    ctrl.blink_ALL(True)
    time.sleep(1)

    # Hold one RGB from the bunch to do look different
    ctrl.set_RGB_color(2, 'red')
    # Need to re-blink that RGB after editing color
    ctrl.blink_RGB(2)
    # Stop blinking one of the RGBs
    ctrl.blink_RGB(3, False)
    time.sleep(1)


    ctrl.set_ALL_color('white')
    time.sleep(1)

    #should turn off all LEDs
    ctrl.brightness(0)

    #should start increasing brightness from off to fullscale
    for i in range(255):
        ctrl.brightness(i)
        print(i)
        time.sleep(1)

    # Turn everything off
    ctrl.all_ON_OFF(TLC59116.LED_OFF)
