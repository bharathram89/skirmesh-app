from main import DB
from datetime import datetime, date
from sqlalchemy import func, and_
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

TIME_FMT = '%Y-%m-%d %H:%M:%f'


class CommsData(DB.Model):

    __tablename__ = 'data'

    id         = DB.Column(DB.Integer, primary_key=True, autoincrement=True)
    sender     = DB.Column(DB.String(), nullable=False)
    dest       = DB.Column(DB.String(), nullable=False)
    command    = DB.Column(DB.Integer(), nullable=False)
    payload    = DB.Column(DB.String(), nullable=False)
    timestamp  = DB.Column(DB.DateTime(), default=datetime.now)


    def __init__(self, **kwargs):

        self.__dict__.update(**kwargs)


    def __repr__(self):

        return '<id {}>'.format(self.id)


    def serialize(self):

        ser = { 'id'       : self.id,
                'sender'   : self.sender,
                'dest'     : self.dest,
                'command'  : self.command,
                'payload'  : self.payload,
                'timestamp': self.timestamp,
              }

        return ser



class Team(DB.Model):

    __tablename__ = 'team'

    id        = DB.Column(DB.Integer, primary_key=True, autoincrement=True)
    uid       = DB.Column(DB.String(), unique=True, nullable=False)
    team      = DB.Column(DB.Integer(), nullable=False)
    timestamp = DB.Column(DB.DateTime(), default=datetime.now)


    def __init__(self, **kwargs):

        self.__dict__.update(**kwargs)


    def __repr__(self):

        return '<id {}>'.format(self.id)


    def serialize(self):

        ser = { 'id'        : self.id,
                'uid'       : self.uid,
                'team'      : self.team,
                'timestamp' : self.timestamp,
              }

        return ser



class Medic(DB.Model):

    __tablename__ = 'medic'

    id        = DB.Column(DB.Integer, primary_key=True, autoincrement=True)
    uid       = DB.Column(DB.String(), unique=True, nullable=False)
    alive     = DB.Column(DB.Integer(), nullable=False)
    timestamp = DB.Column(DB.DateTime(), default=datetime.now)


    def __init__(self, **kwargs):

        self.__dict__.update(**kwargs)


    def __repr__(self):

        return '<id {}>'.format(self.id)


    def serialize(self):

        ser = { 'id'        : self.id,
                'uid'       : self.uid,
                'alive'     : self.alive,
                'timestamp' : self.timestamp,
              }

        return ser



class Score(DB.Model):

    __tablename__ = 'score'

    id        = DB.Column(DB.Integer, primary_key=True, autoincrement=True)
    uid       = DB.Column(DB.String())
    node      = DB.Column(DB.String(), nullable=False)
    team      = DB.Column(DB.Integer(), nullable=False)
    action    = DB.Column(DB.String())
    points    = DB.Column(DB.Integer())
    time_held = DB.Column(DB.Integer())
    timestamp = DB.Column(DB.DateTime(), default=datetime.now)


    def __init__(self, **kwargs):

        self.__dict__.update(**kwargs)


    def __repr__(self):

        return '<id {}>'.format(self.id)


    def serialize(self):

        ser = { 'id'        : self.id,
                'uid'       : self.uid,
                'node'      : self.node,
                'team'      : self.team,
                'action'    : self.action,
                'points'    : self.points,
                'time_held' : self.time_held,
                'timestamp' : self.timestamp,
              }

        return ser



class Game(DB.Model):

    __tablename__ = 'game'

    id             = DB.Column(DB.Integer, primary_key=True, autoincrement=True)

    field          = DB.Column(DB.String())

    teams          = DB.Column(DB.String())

    times_by_team  = DB.Column(DB.String())
    times_by_node  = DB.Column(DB.String())

    score_by_team  = DB.Column(DB.String())
    score_by_uid   = DB.Column(DB.String())

    timestamp      = DB.Column(DB.DateTime(), default=datetime.now)


    def __init__(self, **kwargs):

        self.__dict__.update(**kwargs)


    def __repr__(self):

        return '<id {}>'.format(self.id)


    def serialize(self):

        ser = { 'id'        : self.id,
                'uid'       : self.uid,
                'node'      : self.node,
                'team'      : self.team,
                'action'    : self.action,
                'points'    : self.points,
                'time_held' : self.time_held,
                'timestamp' : self.timestamp,
              }

        return ser



class NodeStatus(DB.Model):

    __tablename__ = 'node_status'

    id        = DB.Column(DB.Integer, primary_key=True, autoincrement=True)

    node      = DB.Column(DB.String(), unique=True, nullable=False)
    # General status attributes
    field     = DB.Column(DB.String())
    location  = DB.Column(DB.String())
    config    = DB.Column(DB.Integer(), default=0x0A) #CAPTURE
    # Node timing attributes
    cap_time  = DB.Column(DB.Integer(), default=6)
    med_time  = DB.Column(DB.Integer(), default=6)
    bomb_time = DB.Column(DB.Integer(), default=12)
    arm_time  = DB.Column(DB.Integer(), default=1)
    diff_time = DB.Column(DB.Integer(), default=12)
    cap_asst  = DB.Column(DB.Integer(), default=5)
    # Capture status attributes
    uid       = DB.Column(DB.String())
    team      = DB.Column(DB.Integer())
    stable    = DB.Column(DB.Integer(), default=1)

    timestamp = DB.Column(DB.DateTime(), default=datetime.now)


    def __init__(self, **kwargs):

        self.__dict__.update(**kwargs)


    def __repr__(self):

        return '<id {}>'.format(self.id)


    def serialize(self):

        ser = { 'id'        : self.id,

                'node'      : self.node,
                'field'     : self.field,
                'location'  : self.location,
                'config'    : self.config,

                'cap_time'  : self.cap_time,
                'med_time'  : self.med_time,
                'bomb_time' : self.bomb_time,
                'arm_time'  : self.arm_time,
                'diff_time' : self.diff_time,
                'cap_asst'  : self.cap_asst,

                'uid'       : self.uid,
                'team'      : self.team,
                'stable'    : self.stable,

                'timestamp' : self.timestamp,
              }

        return ser



class Players(UserMixin, DB.Model):

    __tablename__ = 'auth_users'

    id             = DB.Column(DB.Integer, primary_key=True, autoincrement=True)

    firstname      = DB.Column(DB.String(), nullable=False)
    lastname       = DB.Column(DB.String(), nullable=False)

    callsign       = DB.Column(DB.String(), nullable=False, unique=True)
    outfit         = DB.Column(DB.String(), nullable=True)
    uid            = DB.Column(DB.String(), nullable=True)

    email          = DB.Column(DB.String(), nullable=False)
    password_hash  = DB.Column(DB.String(), nullable=False)

    # Point stuff
    captures       = DB.Column(DB.Integer(), nullable=True)
    assists        = DB.Column(DB.Integer(), nullable=True)

    timestamp      = DB.Column(DB.DateTime(), default=datetime.now)

    DB.UniqueConstraint(callsign)


    def __init__(self, **kwargs):

        self.__dict__.update(**kwargs)


    def set_password(self, password):

        self.password_hash = generate_password_hash(password)

    def check_password(self, password):

        return check_password_hash(self.password_hash, password)


    def __repr__(self):

        return '<id {}>'.format(self.id)


    def serialize(self):

        ser = { 'id'             : self.id,
                'firstname'      : self.firstname,
                'lastname'       : self.lastname,
                'callsign'       : self.callsign,
                'outfit'         : self.outfit,
                'email'          : self.email,
                'password_hash'  : self.password_hash,
                'timestamp'      : self.timestamp,
              }

        return ser


# Creates/initializes the databases - not really necessary here...could
# manually initialize the database once, separately.
DB.create_all()


def flatten(not_flat):

    def helper(*arg, **kwargs):

        return [v[0] for v in not_flat(*arg)]

    return helper



def get_is_alive(uid):

    query = DB.session.query(Medic).filter(Medic.uid == uid)
    # query = query.filter(func.DATE(Medic.timestamp) == date.today())

    return query.first()


def get_team(uid):

    query = DB.session.query(Team.team)
    # query = query.filter(func.DATE(Team.timestamp) == date.today())
    query = query.filter(Team.uid == uid)

    result = query.order_by(Team.id.desc()).first()
    return result[0] if result else result


def get_auth_users():

    return DB.session.query(Players).all()


def get_node_status(node):

    query = DB.session.query(NodeStatus)
    # query = query.filter(func.DATE(NodeStatus.timestamp) == date.today())

    return query.filter(NodeStatus.node == node).first()


@flatten
def get_nodes():

    query = DB.session.query(NodeStatus.node)
    query = query.filter(func.DATE(NodeStatus.timestamp) == date.today())
    query = query.distinct(NodeStatus.node)

    return query.all()


@flatten
def get_registered_teams():

    query = DB.session.query(Team.team).distinct()
    # query = query.filter(func.DATE(Team.timestamp) == date.today())

    return query.order_by(Team.team.asc()).all()


@flatten
def get_team_members(team):

    query = DB.session.query(Team.uid)
    # query = query.filter(func.DATE(Team.timestamp) == date.today())
    query = query.filter(Team.team == team)

    return query.all()


def get_uid_in_team(uid):

    query = DB.session.query(Team).filter(Team.uid == uid)

    return query.first()


def get_player_names():

    return DB.session.query(Players).order_by(Players.lastname.asc()).all()


def get_player(id):

    query = DB.session.query(Players).filter(Players.id == id)

    return query.order_by(Players.id.desc()).first()


def get_time_held_by_team():

    query = DB.session.query(Score.team, func.sum(Score.time_held)).group_by(Score.team)
    # query = query.filter(func.DATE(Score.timestamp) == date.today())

    return query.all()


def get_times_for_node(node):

    # TODO: find a better way to do this...
    # I do this for now, because .all() returns "something" even
    # if the query doesn't have a node match
    if not get_node_status(node): return None

    query = DB.session.query(Score.team, func.sum(Score.time_held)).group_by(Score.team)
    # query = query.filter(func.DATE(Score.timestamp) == date.today())
    query = query.filter(Score.node == node)

    return query.all()


def get_score_by_team():

    query = DB.session.query(Score.team, func.sum(Score.points)).group_by(Score.team)
    # query = query.filter(func.DATE(Score.timestamp) == date.today())

    return query.all()


def get_score_by_uid():

    query = DB.session.query(Score.uid, func.sum(Score.points))
    query = query.filter(Score.uid != None).group_by(Score.uid)
    # query = query.filter(func.DATE(Score.timestamp) == date.today())

    return query.all()


def get_last_captor(node):

    query = DB.session.query(Score)
    # query = query.filter(func.DATE(Score.timestamp) == date.today())
    query = query.filter(Score.action == 'CAPTURE')
    query = query.filter(Score.node == node)

    return query.order_by(Score.id.desc()).first()


def get_time_capture_complete(node):

    query = DB.session.query(Score)
    # query = query.filter(func.DATE(Score.timestamp) == date.today())
    query = query.filter(Score.action == 'CAPTURE COMPLETE')
    query = query.filter(Score.node == node)

    result = query.order_by(Score.id.desc()).first()

    return result.timestamp if result else None


def get_is_capture_closed(node):

    query = DB.session.query(Score)
    #query = query.filter(func.DATE(Score.timestamp) == date.today())
    query = query.filter(Score.node == node)
    result = query.order_by(Score.id.desc()).first()

    return result.time_held if result else None
