from database import db_session
from models.db_models import Maps

import json
from flask import jsonify, request, make_response
from flask import Blueprint

bp = Blueprint('maps', __name__, url_prefix='')

from datetime import datetime



@bp.route('/resources/map', methods=['GET'])
@bp.route('/resources/maps', methods=['GET'])
def maps():

    """
    API to interact with the Maps table

    GET  - query by mapID

    :: returns ::       query result
    """

    if request.method == 'GET':

        params = request.args
        result = Maps.query

        ID = params.get('id', None)

        if ID:  result = result.get(ID)
        else:       result = result.all()

        return jsonify(result)


    return None
