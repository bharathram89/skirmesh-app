from models.db_models import GameAction, Action
from database import db_session


completeID = captureID = assistID = lost_controlID = None
armedID = disarmedID = None

for action in Action.query.all():

    name, ID = action.action, action.id

    if name == 'CAPTURE COMPLETE': completeID = ID
    elif name == 'CAPTURE':        captureID = ID
    elif name == 'ASSIST':         assistID = ID
    elif name == 'LOST CONTROL':   lost_controlID = ID
    elif name == 'RECONFIGURE':    reconfigID = ID
    elif name == 'ARM BOMB':       armedID = ID
    elif name == 'DISARM BOMB':    disarmedID = ID



def get_orig_captor(deviceID):

    orig = GameAction.query.filter(GameAction.actionID == captureID)
    orig = orig.filter(GameAction.deviceID == deviceID)

    return orig.order_by(GameAction.id.desc()).first()


# def get_last_action(deviceID):
#
#     last = GameAction.query.filter(GameAction.deviceID == deviceID)
#
#     return last.order_by(GameAction.id.desc()).first()


def get_capture_begin(deviceID):

    begin = GameAction.query.filter(GameAction.actionID == completeID)
    begin = begin.filter(GameAction.deviceID == deviceID)
    begin = begin.order_by(GameAction.id.desc()).first()

    return begin.creationDate if begin else None


# def is_capture_closed(deviceID):
#
#     is_closed = get_last_action(deviceID)
#
#     return is_closed.time_held if is_closed else None


def closeout_capture(node):

    begin = get_capture_begin(node.id)
    # If a capture started and was not closed out normally
    # then close it out
    if begin and not node.gameActions[-1].time_held:

        held  = int((datetime.utcnow() - begin).total_seconds())

        Adat = {'deviceID' : node.id,
                'teamID'   : node.teamID,
                'points'   : held//node.point_scale,
                'time_held': held,
                'actionID' : reconfigID,
                'gameID'   : node.gameID}

        db_session.add(GameAction(**Adat))



def reset_capture(node):

    closeout_capture(node)

    Adat = {'deviceID' : node.id,
            'teamID'   : node.teamID,
            'actionID' : captureID,
            'gameID'   : node.gameID}

    db_session.add(GameAction(**Adat))
