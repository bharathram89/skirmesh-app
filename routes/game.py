from database import db_session
from models.db_models import RFID, TeamPlayer

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

        if not uid or not teamID: return make_response('', 204)

        rfid = RFID.query.filter('uid' == uid).first()

        # If the RFID didn't exist, register it
        if not rfid:

            rfid = RFID(uid=uid)
            rfid.teamPlayer = TeamPlayer(teamID = teamID)

        else:

            rfid.teamPlayer.teamID    = teamID
            rfid.teamPlayer.is_alive  = True
            rfid.teamPlayer.lastMedic = datetime.utcnow()
            
        db_session.commit()

    return make_response('', 204)
