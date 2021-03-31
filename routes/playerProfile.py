from database import db_session
from models.db_models import Users

from sqlalchemy import null
from flask import jsonify, request, make_response
from flask import Blueprint

bp = Blueprint('playerProfile', __name__, url_prefix='')



@bp.route('/resources/playerProfile', methods=['POST','PUT'])
def playerProfile():

    """
    API to interact with the PlayerProfile table

    POST - add node to table
    PUT  - update node in table

    :: returns ::       query result
    """

    # Player Profiles are generated when the User is created
    # elif request.method == 'POST':
    if request.method == 'PUT':

        params = request.json
        userID = params.pop('id', None)

        if userID: user = Users.query.get(userID)

        if not user: return None

        for attr in params:

            setattr(user.playerProfile, attr, params[attr])

        db_session.commit()

        return jsonify(user)


    return None
