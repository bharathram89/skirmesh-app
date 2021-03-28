from database import db_session

from models.db_models import (Users, PlayerProfile, TeamPlayer, Device, Teams,
                              FieldProfile, GameConfig, Action, GameAction)

from models.queries import (get_orig_captor, get_capture_begin, captureID,
                            lost_controlID, assistID, completeID)

from sqlalchemy import null
from flask import render_template, flash, jsonify, session, request, make_response
from flask import Blueprint

from datetime import datetime

bp = Blueprint('capture', __name__, url_prefix='')


@bp.route('/gameplay/handle_capture', methods=['PUT'])
def handle_capture():

    """
    API to handle CAPTURE action.

    PUT  - update RFID team association

    :: args    ::       uid, device.address or device.stable

    :: returns ::       updated device
    """

    params = request.json

    addr   = params.pop('address', None)
    stable = params.pop('stable', None)
    uid    = params.pop('uid', None)

    if not addr: return make_response('', 204)
    node = Device.query.filter(Device.address == addr).first()

    game = Games.query.get(node.gameID) if node else None
    if not game: return make_response('', 204)

    # If the game is paused, ignore all capture requests
    if game.is_paused or game.endTime: return make_response('', 204)

    if stable:
        # If the payload does not contain a UID, it's passing the status
        # byte to indicate that capture is complete
        # Get the most recent team interaction with the node and set the
        # node as stable with the prosecuting team as owning

        # We only need to update the stability column for the current status
        node.stable = stable
        # Grab the last captor from SCORE, to determine who the points are
        # awarded to when/if capture is completed
        orig_captor = get_orig_captor(node.id)
        # If there was an originating captor and the node is now STABLE
        # (...The node will only ever be considered stable here)
        last = node.gameActions[-1]
        # If the last action was CAPTURE COMPLETE, the node is coming
        # online in the middle and this avoids duplicate scores
        if orig_captor and stable and (last.actionID != completeID if last else True):

            data = {'deviceID' : node.id,
                    'rfidID'   : orig_captor.rfidID,
                    'teamID'   : orig_captor.teamID,
                    'gameID'   : node.gameID,
                    'actionID' : completeID}

            db_session.add(GameAction(**data))

        db_session.commit()

    elif uid:

        rfid = RFID.query.filter(RFID.uid == uid).first()

        if not rfid.teamPlayer or not rfid.teamPlayer.teamID:

            return make_response('', 204)

        print(f'Team {rfid.teamPlayer.teamID} is prosecuting Node_{node}')

        data = {'rfidID'   : rfid.id,
                'teamID'   : rfid.teamPlayer.teamID,
                'deviceID' : node.id,
                'gameID'   : node.gameID}

        # If no one owns the node, the attacker captures immediately
        # If his teams was already there, he only assists
        if node.teamID:

            data['actionID'] = captureID if rfid.teamPlayer.teamID != node.teamID else assistID
            # data['points'] = 2 if rfid.teamPlayer.teamID != node.teamID else 1

            if data['actionID'] == captureID:

                begin = get_capture_begin(node.id)
                # ONLY figure out the score if the score has not already
                # been figured out (i.e. the capture was closed out)
                if begin and not node.gameActions[-1].time_held:

                    held  = int((datetime.utcnow() - begin).total_seconds())

                    orig_captor = get_orig_captor(node.id)

                    tdat = {'deviceID'  : node.id,
                            'teamID'    : orig_captor.teamID,
                            'time_held' : held,
                            # Account for points as scaled by current value
                            'points'    : held//node.point_scale,
                            'actionID'  : lost_controlID,
                            'gameID'    : node.gameID}

                    db_session.add(GameAction(**data))

        else:
            # If there was no status for the node - this is a capture
            # and the capture should be instant
            data['actionID'] = captureID
            # data['points'] = 2

        # If the ACTION is to "CAPTURE" then always add score data.  If it is an assist
        # ONLY add score data if the node IS NOT STABLE - can only be an ASSIST if cap_status is
        # known
        if data['actionID'] == captureID or (data['actionID'] == assistID and not node.stable):

            db_session.add(GameAction(**data))

        # If the node is not currently owned, then it's immediately stable
        # If the prosecuting team is the same team, keep it stable
        node.stable = 1 if not node.teamID or (node.stable and rfid.teamPlayer.teamID == node.teamID) else 0
        node.teamID = rfid.teamPlayer.teamID
        node.team   = Teams.query.get(rfid.teamPlayer.teamID).color

        db_session.commit()

    # In all cases, return CAPTURE and TEAM so the node can
    # shift status appropriately
    return jsonify(node)
