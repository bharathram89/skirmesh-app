from database import db_session
from models.db_models import Users, FieldProfile

from sqlalchemy import null
from flask import render_template, flash, jsonify, session, request, make_response
from flask import Blueprint

bp = Blueprint('fieldProfile', __name__, url_prefix='')


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


@bp.route('/resources/fieldProfile', methods=['GET','POST','PUT'])
def node_status():

    """
    API to interact with the PlayerProfile table

    GET  - query by userID
    POST - add node to table
    PUT  - update node in table

    :: returns ::       query result
    """

    params = request.json

    if request.method == 'GET':

        result   = FieldProfile.query
        fieldID   = params.get('id', None)

        if fieldID: return jsonify(result.get(fieldID))
        else: return make_response('ERROR: Query Field Profiles with Field ID', 409)

    # Player Profiles are generated when the User is created
    # elif request.method == 'POST':
    elif request.method == 'POST':

        field = FieldProfile(**params)

        try:

            db_session.add(field)
            db_session.commit()

        except Exception as E:

            db_session.rollback()
            db_session.commit()

            return make_response('{E}', 409)

        return jsonify(user)


    elif request.method == 'PUT':

        # TODO: This needs to parse data to pass images:

        fieldID   = params.pop('id', None)

        if fieldID:     _field = FieldProfile.query.get(fieldID)

        if not _user: return make_response('', 204)

        for attr in params:

            setattr(_field, attr, params[attr])

        db_session.commit()

        return jsonify(_field)


    return make_response('', 204)
