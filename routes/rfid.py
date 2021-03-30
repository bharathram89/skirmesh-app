from database import db_session
from models.db_models import Users, RFID, TeamPlayer

import json
from sqlalchemy import null
from flask import jsonify, request, make_response
from flask import Blueprint

bp = Blueprint('rfid', __name__, url_prefix='')

from datetime import datetime



@bp.route('/resources/rfid', methods=['GET','POST','PUT'])
@bp.route('/resources/rfids', methods=['GET','POST','PUT'])
def rfid():

    """
    API to interact with the RFID table

    GET  - query by node, team, and/or field
    POST - add node to table
    PUT  - update node in table

    :: returns ::       query result
    """

    if request.method == 'GET':

        params = request.args
        result = RFID.query

        rfidID = params.get('id', None)
        uid    = params.get('uid', None)

        if rfidID: result = result.get(rfidID)
        elif uid:  result = result.filter(RFID.uid == uid).first()
        else:      result = result.all()

        return jsonify(result)


    elif request.method == 'POST':

        params = request.json

        rfid            = RFID(**params)
        rfid.teamPlayer = TeamPlayer()

        try:

            db_session.add(rfid)
            db_session.commit()

        except Exception as E:

            db_session.rollback()
            db_session.commit()

            return make_response(f'{E}', 409)

        return jsonify(rfid)


    elif request.method == 'PUT':

        params = request.json

        new_user_id = params.pop('new_user_id', None)
        rfidID      = params.pop('id', None)
        uid         = params.pop('uid', None)

        if rfidID: rfid = RFID.query.get(id)
        if uid:    rfid = RFID.query.filter(RFID.uid == uid).first()

        new_user = Users.query.get(new_user_id)

        if not rfid or not new_user: return None

        new_user.rfids.append(rfid)

        db_session.commit()

        return jsonify(new_user)


    return None
