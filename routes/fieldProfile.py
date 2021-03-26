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

    if request.method == 'GET':

        params = request.args
        result = FieldProfile.query

        fieldID = params.get('id', None)

        if fieldID: result = jsonify(result.get(fieldID))
        else:       result = make_response('Query with Field ID', 409)

        db_session.commit()

        return result


    elif request.method == 'POST':

        params = request.json
        field = FieldProfile(**params)

        try:

            db_session.add(field)
            db_session.commit()

        except Exception as E:

            db_session.rollback()
            db_session.commit()

            return make_response('{E}', 409)

        return jsonify(field)


    elif request.method == 'PUT':

        params = request.json
        fieldID = params.pop('id', None)

        if fieldID:   field = FieldProfile.query.get(fieldID)

        if not field: return make_response('', 204)

        for attr in params:

            setattr(field, attr, params[attr])

        db_session.commit()

        return jsonify(field)


    return make_response('', 204)
