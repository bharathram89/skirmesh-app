from database import db_session
from models.db_models import Users, PlayerProfile, TeamPlayer
import jwt
from datetime import datetime

from sqlalchemy import null
from flask import render_template, flash, jsonify, session, request, make_response
from flask import Blueprint

bp = Blueprint('login', __name__, url_prefix='')


@bp.route('/login', methods=['POST'])
def users():

    """
    API to authenticate login

    POST - validate password

    :: returns ::       authenticated JWT
    """

    if request.method == 'POST':

        params = request.json
        result = None

        userID   = params.get('id', None)
        callSign = params.get('callSign', None)

        password = params.pop('password', None)

        if userID:     result = Users.query.get(userID)
        elif callSign: result = Users.query.filter(Users.callSign == callSign).first()

        if result and result.check_password(password):

            data  = {'callSign':'callSign','timestamp':str(datetime.utcnow())}
            token = jwt.encode(data, "skirmesh", "HS256")

            return jsonify({'token': token})

        else:

            return make_response('Password or Login information is incorrect', 400)


    return make_response('', 204)
