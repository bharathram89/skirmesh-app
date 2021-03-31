from database import db_session
from models.db_models import Users, FieldProfile

from sqlalchemy import null
from flask import jsonify, request, make_response
from flask import Blueprint

bp = Blueprint('fieldProfile', __name__, url_prefix='')


@bp.route('/resources/fieldProfile', methods=['POST','PUT'])
def fieldProfile():

    """
    API to interact with the PlayerProfile table

    POST - add node to table
    PUT  - update node in table

    :: returns ::       query result
    """


    if request.method == 'POST':

        params = request.json
        field = FieldProfile(**params)

        try:

            db_session.add(field)
            db_session.commit()

        except Exception as E:

            db_session.rollback()
            db_session.commit()

            return make_response(f'{E}', 409)

        return jsonify(field)


    elif request.method == 'PUT':

        params = request.json
        fieldID = params.pop('id', None)

        if fieldID:   field = FieldProfile.query.get(fieldID)

        if not field: return None

        for attr in params:

            setattr(field, attr, params[attr])

        db_session.commit()

        return jsonify(field)


    return None
