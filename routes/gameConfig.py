from database import db_session
from models.db_models import GameConfig
from models.queries import get_capture_begin, closeout_capture

import json
from flask import jsonify, request, make_response
from flask import Blueprint

bp = Blueprint('gameConfig', __name__, url_prefix='')

from datetime import datetime



@bp.route('/resources/gameConfig', methods=['GET','POST','PUT'])
def node_status():

    """
    API to interact with the GameConfig table

    POST - add config to table
    PUT  - update config in table

    :: returns ::       query result
    """

    if request.method == 'GET':

        params = request.args
        result = GameConfig.query

        ID = params.get('id', None)

        if ID: result = result.get(ID)
        else:  result = result.all()

        return jsonify(result)


    elif request.method == 'POST':

        params = request.json
        config   = GameConfig(**params)

        try:

            db_session.add(config)
            db_session.commit()

        except Exception as E:

            db_session.rollback()
            db_session.commit()

            return make_response(f'{E}', 409)

        return jsonify(config)


    elif request.method == 'PUT':

        params = request.json

        ID = params.pop('id', None)

        if not ID: return None

        config = GameConfig.query.get(ID)

        for attr in params:

            setattr(config, attr, params[attr])

        db_session.commit()

        return jsonify(config)


    return None
