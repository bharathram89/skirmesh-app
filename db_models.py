from main import DB
from datetime import datetime, date
from sqlalchemy import func, and_

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



class CaptureStatus(DB.Model):

    __tablename__ = 'capture_status'

    id        = DB.Column(DB.Integer, primary_key=True, autoincrement=True)
    node      = DB.Column(DB.String(), unique=True, nullable=False)
    tag       = DB.Column(DB.String(), nullable=False)
    team      = DB.Column(DB.Integer(), nullable=False)
    stable    = DB.Column(DB.Integer(), nullable=False)
    timestamp = DB.Column(DB.DateTime(), default=datetime.now)


    def __init__(self, **kwargs):

        self.__dict__.update(**kwargs)


    def __repr__(self):

        return '<id {}>'.format(self.id)


    def serialize(self):

        ser = { 'id'        : self.id,
                'node'      : self.node,
                'tag'       : self.tag,
                'team'      : self.team,
                'stable'    : self.stable,
                'timestamp' : self.timestamp,
              }

        return ser



class NodeStatus(DB.Model):

    __tablename__ = 'node_status'

    id        = DB.Column(DB.Integer, primary_key=True, autoincrement=True)
    node      = DB.Column(DB.String(), unique=True, nullable=False)
    location  = DB.Column(DB.String())
    config    = DB.Column(DB.Integer())
    cap_time  = DB.Column(DB.Integer())
    med_time  = DB.Column(DB.Integer())
    bomb_time = DB.Column(DB.Integer())
    cap_asst  = DB.Column(DB.Integer())
    timestamp = DB.Column(DB.DateTime(), default=datetime.now)


    def __init__(self, **kwargs):

        self.__dict__.update(**kwargs)


    def __repr__(self):

        return '<id {}>'.format(self.id)


    def serialize(self):

        ser = { 'id'        : self.id,
                'node'      : self.node,
                'location'  : self.location,
                'config'    : self.config,
                'timestamp' : self.timestamp,
              }

        return ser



class Player(DB.Model):

    __tablename__ = 'players'

    id        = DB.Column(DB.Integer, primary_key=True, autoincrement=True)
    fname     = DB.Column(DB.String(), nullable=False)
    lname     = DB.Column(DB.String(), nullable=False)
    callsign  = DB.Column(DB.String())
    outfit    = DB.Column(DB.String())
    uid       = DB.Column(DB.String(), unique=True)
    timestamp = DB.Column(DB.DateTime(), default=datetime.now)

    # DB.UniqueConstraint(fname, lname)

    def __init__(self, **kwargs):

        self.__dict__.update(**kwargs)


    def __repr__(self):

        return '<id {}>'.format(self.id)


    def serialize(self):

        ser = { 'id'        : self.id,
                'fname'     : self.fname,
                'lname'     : self.lname,
                'callsign'  : self.callsign,
                'outfit'    : self.outfit,
                'uid'       : self.uid,
                'timestamp' : self.timestamp,
              }

        return ser



class AuthUsers(DB.Model):

    __tablename__ = 'auth_users'

    id        = DB.Column(DB.Integer, primary_key=True, autoincrement=True)
    username  = DB.Column(DB.String(), nullable=False, unique=True)
    email     = DB.Column(DB.String(), nullable=False)
    password  = DB.Column(DB.String(), nullable=False)
    timestamp = DB.Column(DB.DateTime(), default=datetime.now)

    DB.UniqueConstraint(username, password)


    def __init__(self, **kwargs):

        self.__dict__.update(**kwargs)


    def __repr__(self):

        return '<id {}>'.format(self.id)


    def serialize(self):

        ser = { 'id'        : self.id,
                'username'  : self.username,
                'email'     : self.email,
                'password'  : self.password,
                'timestamp' : self.timestamp,
              }

        return ser



def flatten(not_flat):

    def helper(*arg, **kwargs):

        return [v[0] for v in not_flat(*arg)]

    return helper



def get_is_alive(uid):

    query = DB.session.query(Medic).filter(Medic.uid == uid)
    query = query.filter(func.DATE(Medic.timestamp, TIME_FMT) == date.today())

    return query.order_by(Medic.id.desc()).first()


def get_team(uid):

    query = DB.session.query(Team.team)
    query = query.filter(func.DATE(Team.timestamp) == date.today())
    query = query.filter(Team.uid == uid)

    return query.order_by(Team.id.desc()).first()[0]


def get_auth_users():

    return DB.session.query(AuthUsers).all()


def get_capture_status(node):

    query = DB.session.query(CaptureStatus)
    # query = query.filter(func.DATE(CaptureStatus.timestamp) == date.today())
    query = query.filter(CaptureStatus.node == node)

    return query.filter(CaptureStatus.node == node).first()


def get_node_status(node):

    query = DB.session.query(NodeStatus)
    query = query.filter(func.DATE(NodeStatus.timestamp) == date.today())
    query = query.filter(NodeStatus.node == node)

    return query.order_by(NodeStatus.id.desc()).first()


@flatten
def get_nodes():

    query = DB.session.query(NodeStatus.node)
    query = query.filter(func.DATE(NodeStatus.timestamp) == date.today())
    query = query.distinct(NodeStatus.node)

    return query.all()


@flatten
def get_registered_teams():

    query = DB.session.query(Team.team).distinct()
    query = query.filter(func.DATE(Team.timestamp) == date.today())

    return query.order_by(Team.team.asc()).all()


@flatten
def get_team_members(team):

    query = DB.session.query(Team.uid)
    query = query.filter(func.DATE(Team.timestamp) == date.today())
    query = query.filter(Team.team == team)

    return query.all()


def get_uid_in_team(uid):

    query = DB.session.query(Team.team).filter(Team.uid == uid)

    return query.first()


def get_player_names():

    return DB.session.query(Player).order_by(Player.lname.asc())


def get_player(id):

    query = DB.session.query(Player).filter(Player.id == id)

    return query.order_by(Player.id.desc()).first()


def get_time_held_by_team():

    query = DB.session.query(Score.team, func.sum(Score.time_held)).group_by(Score.team)
    query = query.filter(func.DATE(Score.timestamp) == date.today())

    return query.all()


def get_times_for_node(node):

    if not get_capture_status(node): return None

    query = DB.session.query(Score.team, func.sum(Score.time_held)).group_by(Score.team)
    query = query.filter(func.DATE(Score.timestamp) == date.today())
    query = query.filter(Score.node == node)

    return query.all()


def get_score_by_team():

    query = DB.session.query(Score.team, func.sum(Score.points)).group_by(Score.team)
    query = query.filter(func.DATE(Score.timestamp) == date.today())

    return query.all()


def get_score_by_uid():

    query = DB.session.query(Score.uid, func.sum(Score.points))
    query = query.filter(Score.uid != None).group_by(Score.uid)
    query = query.filter(func.DATE(Score.timestamp) == date.today())

    return query.all()


def get_last_captor(node):

    query = DB.session.query(Score)
    query = query.filter(func.DATE(Score.timestamp) == date.today())
    query = query.filter(Score.action == 'CAPTURE')
    query = query.filter(Score.node == node)

    return query.order_by(Score.id.desc()).first()


def get_time_capture_complete(node):

    query = DB.session.query(Score)
    query = query.filter(func.DATE(Score.timestamp) == date.today())
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


def get_is_alive(uid):

    query = DB.session.query(Medic)
    query = query.filter(func.DATE(Medic.timestamp) == date.today())
    query = query.filter(Medic.uid == uid)

    return query.order_by(Medic.id.desc()).first()
