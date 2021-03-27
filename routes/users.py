from database import db_session
from models.db_models import Users, PlayerProfile, TeamPlayer

from sqlalchemy import null
from flask import render_template, flash, jsonify, session, request, make_response
from flask import Blueprint

bp = Blueprint('users', __name__, url_prefix='')


# To interact and extract data from these API methods use
# requests module
#
# example:
# import requests
#
# PARAMS = {key:val}
# result = requests.get(url = URL, params = PARAMS)
# data = result.json()
#
# DATA = {key:val}
# result = requsts.post(url = URL, data = DATA (or PARAMS...))
#
#    :: For PUT request, include target update row
# result = request.put(url = URL, params = PARAMS)

@bp.route('/resources/user', methods=['GET','POST','PUT'])
@bp.route('/resources/users', methods=['GET','POST','PUT'])
def node_status():

    """
    API to interact with the Users table

    GET  - query by userID, callsign, and/or email
    POST - add node to table
    PUT  - update node in table

    :: returns ::       query result
    """

    if request.method == 'GET':

        params = request.args
        result = Users.query

        userID   = params.get('id', None)
        callSign = params.get('callSign', None)
        email    = params.get('email', None)

        if userID:     result = result.get(userID)
        elif callSign: result = result.filter(Users.callSign == callSign).first()
        elif email:    result = result.filter(Users.email == email).all()
        else:          result = result.all()

        db_session.commit()

        return jsonify(result)


    elif request.method == 'POST':

        params = request.json

        user               = Users(**params)
        user.playerProfile = PlayerProfile()
        user.teamPlayer    = TeamPlayer()

        try:

            db_session.add(user)
            db_session.commit()

        except Exception as E:

            db_session.rollback()
            db_session.commit()

            return make_response(f'{E}', 409)

        return jsonify(user)


    elif request.method == 'PUT':

        params = request.json

        userID   = params.pop('id', None)
        callSign = params.pop('callSign', None)

        if userID:     user = Users.query.get(userID)
        elif callSign: user = Users.query.filter(Users.callSign == callSign).first()

        if not user: return make_response('', 204)

        for attr in params:

            setattr(user, attr, params[attr])

        db_session.commit()

        return jsonify(user)


    return make_response('', 204)
