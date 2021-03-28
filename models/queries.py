from models.db_models import GameAction, Action


completeID = captureID = assistID = lost_controlID = None
for action in Action.query.all():

    name, ID = action.action, action.id

    if name == 'CAPTURE COMPLETE': completeID = ID
    elif name == 'CAPTURE':        captureID = ID
    elif name == 'ASSIST':         assistID = ID
    elif name == 'LOST CONTROL':   lost_controlID = ID



def get_orig_captor(deviceID):

    orig = GameAction.query.filter(GameAction.actionID == captureID)
    orig = orig.filter(GameAction.deviceID == deviceID)

    return orig.order_by(GameAction.id.desc()).first()


def get_last_action(deviceID):

    last = GameAction.query.filter(GameAction.deviceID == deviceID)

    return last.order_by(GameAction.id.desc()).first()


def get_capture_begin(deviceID):

    begin = GameAction.query.filter(GameAction.actionID == completeID)
    begin = begin.filter(GameAction.deviceID == deviceID)
    begin = begin.order_by(GameAction.id.desc()).first()

    return begin.creationDate if begin else None


def is_capture_closed(deviceID):

    is_closed = get_last_action(deviceID)

    return is_closed.time_held if is_closed else None
