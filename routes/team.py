from database import db_session
from models.db_models import Teams

import json
from sqlalchemy import null
from flask import jsonify, request, make_response
from flask import Blueprint

bp = Blueprint('team', __name__, url_prefix='')

from datetime import datetime



@bp.route('/resources/team', methods=['GET','POST','PUT'])
@bp.route('/resources/teams', methods=['GET','POST','PUT'])
def rfid():

    """
    API to interact with the Teams table

    GET  - query by teamID
    POST - add team to table
    PUT  - update team in table

    :: returns ::       query result
    """

    if request.method == 'GET':

        params = request.args
        result = RFID.query

        teamID = params.get('id', None)

        if rfidID: result = result.get(rfidID)
        else:      result = result.all()

        db_session.commit()

        return jsonify(result)


    elif request.method == 'POST':

        params = request.json

        team = Teams(**params)

        try: db_session.commit()

        except Exception as E:

            db_session.rollback()
            db_session.commit()

            return make_response(f'{E}', 409)

        return jsonify(team)


    elif request.method == 'PUT':

        params = request.json

        name   = params.pop('name', None)
        teamID = params.pop('id', None)
        color  = params.pop('color', None)

        if teamID: team = Teams.query.get(id)

        if not team: return make_response('', 204)

        if color: team.color = color
        if name:  team.name  = name

        db_session.commit()

        return jsonify(team)


    return make_response('', 204)
