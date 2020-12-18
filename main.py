import xbee
import utime, micropython, gc
import control_point as cp
from machine import Pin, I2C
from i2c_IRQ import PN532_I2C

CONTROL_POINT_CONFIG = {
    'ID': 0x601,
    'JV': 1,
    'DH': 0,
    'DL': 0,
    'CE': 0,
    'SP': 0x1F4,
    'NJ': 0xFF
    }

TLC_ADDR = 0x60
PN532_ADDR = 0x24

REQ_PIN_ID   = "D4"
RST_PIN_ID   = "D12"
IRQ_PIN_ID   = "D3"
SIREN_PIN_ID = "D19"

PN532_req = Pin(REQ_PIN_ID, Pin.OUT, value = 1)
PN532_rst = Pin(RST_PIN_ID, Pin.OUT, value = 1)
PN532_irq = Pin(IRQ_PIN_ID, Pin.IN)
#Create siren pin object
siren = Pin(SIREN_PIN_ID, Pin.OUT, value = 0)

i2c_com = I2C(1)

card_reader = PN532_I2C(i2c_com, PN532_ADDR, req=PN532_req, reset=PN532_rst,
                        irq=PN532_irq, debug = False)

ic, ver, rev, support = card_reader.firmware_version

print("Found PN532 with firmware version: {0}.{1}".format(ver, rev))
print(hex(ic), '', hex(ver), '', hex(rev), '', hex(support))

#Configure PN532 to communicate with MiFare cards
card_reader.SAM_configuration()

#Configure xbee radio to join the network and store the controllers
#information for further communication

print('Configuring device')
cp.configure_node(**CONTROL_POINT_CONFIG)

while xbee.atcmd('AI') != 0:
    utime.sleep_ms(1000)
    print('attempting to connect....')

for i in list(xbee.discover()):

    print(i)

    if i['node_type'] == 0:
        controller = i['sender_eui64']

    else:
        print('Controller not found')

print('Network joined')

point = cp.NODE(controller,
                siren,
                card_reader,
                TLC_ADDR,
                i2c_com)

print(micropython.mem_info())
gc.enable()
while True:

    point.node_procedures()
