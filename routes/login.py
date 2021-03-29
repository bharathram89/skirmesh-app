from database import db_session
from models.db_models import Users
import jwt
from datetime import datetime

from sqlalchemy import null
from flask import jsonify, request, make_response
from flask import Blueprint

bp = Blueprint('login', __name__, url_prefix='')


TIME_FMT = '%Y-%m-%d %H:%M:%S.%f'

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

        if userID:     user = Users.query.get(userID)
        elif callSign: user = Users.query.filter(Users.callSign == callSign).first()

        if user and user.check_password(password):

            data  = {'callSign' : user.callSign,
                     'userID'   : user.id,
                     'timestamp': str(datetime.utcnow())}

            return jsonify({'token': jwt.encode(data, "skirmesh", "HS256")})

        else:

            return make_response('Password or Login are invalid', 400)


    return make_response('', 204)



@bp.route('/login/is_valid', methods=['POST'])
def is_valid():

    """
    API to authenticate JWT token given at login

    POST - valid JWT

    :: returns ::       authentic, updated JWT
    """
    #          hrs min  sec
    MAX_TIME = 4 * 60 * 60

    if request.method == 'POST':

        params = request.json
        token  = params.get('token', None)

        if not token: return make_response('', 204)


        try:

            data = jwt.decode(token, "skirmesh", "HS256")

        except Exception as E:

            return make_response(f'{E}', 400)


        if not 'userID' in data: return make_response('', 204)

        user = Users.query.get(data['userID'])
        time = datetime.strptime(data['timestamp'], TIME_FMT)
        d_t  = (datetime.utcnow() - time).total_seconds()

        print(data['timestamp'], time, 'delta time', d_t)

        if d_t > MAX_TIME: return make_response('Token expired', 400)

        data['timestamp'] = str( datetime.utcnow() )

        return jsonify({'token': jwt.encode(data, "skirmesh", "HS256")})


    return make_response('', 204)
