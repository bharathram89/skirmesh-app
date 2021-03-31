from database import db_session
from models.db_models import RFID, TeamPlayer, Device

from flask import jsonify, request, make_response
from flask import Blueprint

from datetime import datetime

bp = Blueprint('game', __name__, url_prefix='')


@bp.route('/gameplay/register_team', methods=['PUT'])
def register_team():

    """
    API to register RFID to a team.

    PUT  - update RFID team association

    :: args    ::       uid, teamID

    :: returns ::       Nothing
    """

    if request.method == 'PUT':

        params = request.json

        uid    = params.pop('uid', None)
        teamID = params.pop('teamID', None)

        if not uid or not teamID: return None

        rfid = RFID.query.filter(RFID.uid == uid).first()
        # If the RFID didn't exist, register it - update otherwise
        if not rfid:

            rfid = RFID(uid=uid)
            rfid.teamPlayer = TeamPlayer(teamID = teamID)
            db_session.add(rfid)

        else:

            rfid.teamPlayer.teamID    = teamID
            rfid.teamPlayer.is_alive  = True

        db_session.commit()

    return None



@bp.route('/gameplay/check_medic', methods=['PUT'])
def check_medic():

    """
    API to handle medic action.

    PUT  - update medic status

    :: args    ::       uid, address

    :: returns ::       medic status  {'alive':bool,'lights':int}
    """

    if request.method == 'PUT':

        params = request.json

        uid    = params.pop('uid', None)
        node   = params.pop('address', None)

        if not uid or not node: return None

        rfid = RFID.query.filter(RFID.uid == uid).first()
        node = Device.query.filter(Device.address == node).first()

        if not rfid or not node: return None

        ALL      = 5
        med_time = node.med_time * 10
        d_t      = datetime.utcnow() - rfid.teamPlayer.lastChange

        if not rfid.teamPlayer.is_alive and d_t.total_seconds() >= med_time:
            # If he was dead and has waited the correct amount of time,
            # bring him back to life
            rfid.teamPlayer.is_alive = True
            db_session.commit()

            return jsonify({'alive':True,'lights':ALL})
        # If he's DEAD and not enough time has passed to bring him back
        # to life, then let him knows how close he is to being alive.
        if not rfid.teamPlayer.is_alive and d_t.total_seconds() < med_time:

            time_rem = med_time - d_t.total_seconds()
            time_rem = min(max(0, time_rem), med_time)

            num_lights = int(5 * (time_rem/med_time))

            return jsonify({'alive':False,'lights':num_lights})


        if rfid.teamPlayer.is_alive:
            # If he was alive, and he's at the medic, he probably died...
            rfid.teamPlayer.is_alive = False
            db_session.commit()

            return jsonify({'alive':False,'lights':ALL})


    return None
