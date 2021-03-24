from database import db_session
from models.db_models import Users, PlayerProfile, FieldProfile

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


@bp.route('/resources/users', methods=['GET','POST','PUT'])
def node_status():

    """
    API to interact with the Users table

    GET  - query by userID, callsign, and/or email
    POST - add node to table
    PUT  - update node in table

    :: returns ::       query result
    """

    params = request.json

    if request.method == 'GET':

        result   = Users.query

        userID   = params.get('id', None)
        callSign = params.get('callSign', None)
        email    = params.get('email', None)

        if userID: return jsonify(result.get(userID))

        if callSign: return result.filter(Users.callSign == callSign).first()
        if email:    result = result.filter(Users.email == email)

        return jsonify(result.all())


    elif request.method == 'POST':

        user               = Users(**params)
        user.playerProfile = PlayerProfile()

        try:

            db_session.add(user)
            db_session.commit()

        except Exception as E:

            db_session.rollback()
            db_session.commit()

            return make_response('{E}', 409)

        return jsonify(user)


    elif request.method == 'PUT':

        userID   = params.pop('id', None)
        callSign = params.pop('callSign', None)

        if userID:     _user = Users.query.get(userID)
        elif callSign: _user = Users.query.filter(Users.callSign == callSign).first()

        if not _user: return make_response('', 204)

        for attr in params:

            setattr(_user, attr, params[attr])

        db_session.commit()

        return jsonify(_user)


    return make_response('', 204)
