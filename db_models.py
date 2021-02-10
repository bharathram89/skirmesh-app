from main import DB
from datetime import datetime, date
from sqlalchemy import func, and_
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

TIME_FMT = '%Y-%m-%d %H:%M:%f'


class CommsData(DB.Model):

    __tablename__ = 'data'

    id         = DB.Column(DB.Integer, primary_key=True, autoincrement=True)
    timestamp  = DB.Column(DB.DateTime, default=datetime.now)

    sender     = DB.Column(DB.String, nullable=False)
    dest       = DB.Column(DB.String, nullable=False)
    command    = DB.Column(DB.Integer, nullable=False)
    payload    = DB.Column(DB.String, nullable=False)



class UID(DB.Model):

    __tablename__ = 'uid'

    id         = DB.Column(DB.Integer, primary_key=True, autoincrement=True)
    timestamp  = DB.Column(DB.DateTime, default=datetime.now, onupdate=datetime.now)

    uid   = DB.Column(DB.String, unique=True)
    team  = DB.Column(DB.Integer, DB.ForeignKey('team.team'), nullable=False)
    field = DB.Column(DB.String, DB.ForeignKey('field.field'), nullable=False)

    scores = DB.relationship('Score', backref='scores_uid')
    medic  = DB.relationship('Medic', backref='medic_uid', uselist=False)
    player = DB.relationship('Player', backref='player_uid', uselist=False)
    nodes  = DB.relationship('NodeStatus', backref='nodestatus_uid')


    def __repr__(self):

        return self.uid



class Team(DB.Model):

    __tablename__ = 'team'

    id        = DB.Column(DB.Integer, primary_key=True, autoincrement=True)
    timestamp = DB.Column(DB.DateTime, default=datetime.now, onupdate=datetime.now)

    team      = DB.Column(DB.Integer, unique=True, nullable=False)

    scores    = DB.relationship('Score', backref='scores_team')
    uids      = DB.relationship('UID', backref='uids_team')
    nodes     = DB.relationship('NodeStatus', backref='nodes_team')


    def __repr__(self):

        return str(self.team)



class Field(DB.Model):

    __tablename__ = 'field'

    id         = DB.Column(DB.Integer, primary_key=True, autoincrement=True)
    timestamp  = DB.Column(DB.DateTime, default=datetime.now, onupdate=datetime.now)

    field      = DB.Column(DB.String, unique=True, nullable=False)

    scores     = DB.relationship('Score', backref='scores_field')
    uids       = DB.relationship('UID', backref='uids_field')
    nodes      = DB.relationship('NodeStatus', backref='nodes_field')


    def __repr__(self):

        return self.field



class Medic(DB.Model):

    __tablename__ = 'medic'

    id        = DB.Column(DB.Integer, primary_key=True, autoincrement=True)
    timestamp = DB.Column(DB.DateTime, default=datetime.now, onupdate=datetime.now)

    uid       = DB.Column(DB.String, DB.ForeignKey('uid.uid'), unique=True, nullable=False)
    alive     = DB.Column(DB.Integer, nullable=False)



class Score(DB.Model):

    __tablename__ = 'score'

    id        = DB.Column(DB.Integer, primary_key=True, autoincrement=True)
    timestamp = DB.Column(DB.DateTime, default=datetime.now)

    uid       = DB.Column(DB.String, DB.ForeignKey('uid.uid'))
    field     = DB.Column(DB.String, DB.ForeignKey('field.field'), nullable=False)
    node      = DB.Column(DB.String, DB.ForeignKey('node_status.node'), nullable=False)
    team      = DB.Column(DB.Integer, DB.ForeignKey('team.team'), nullable=False)

    action    = DB.Column(DB.String)
    points    = DB.Column(DB.Integer)
    time_held = DB.Column(DB.Integer)



class Game(DB.Model):

    __tablename__ = 'game'

    id             = DB.Column(DB.Integer, primary_key=True, autoincrement=True)
    field          = DB.Column(DB.String)
    # All teams, scores by, and times by are dictionaries or lists converted
    # to strings. To get it back to the original form, call eval()
    teams          = DB.Column(DB.String)
    team_name_map  = DB.Column(DB.String)

    times_by_team  = DB.Column(DB.String)
    times_by_node  = DB.Column(DB.String)

    score_by_team  = DB.Column(DB.String)
    score_by_uid   = DB.Column(DB.String)

    timestamp      = DB.Column(DB.DateTime, default=datetime.now)



class NodeStatus(DB.Model):

    __tablename__ = 'node_status'

    id        = DB.Column(DB.Integer, primary_key=True, autoincrement=True)
    timestamp = DB.Column(DB.DateTime, default=datetime.now, onupdate=datetime.now)

    node      = DB.Column(DB.String, unique=True, nullable=False)
    # General status attributes
    field     = DB.Column(DB.String, DB.ForeignKey('field.field'))
    location  = DB.Column(DB.String)
    config    = DB.Column(DB.Integer, default=0x0A) #CAPTURE
    # Node timing attributes
    cap_time  = DB.Column(DB.Integer, default=6)
    med_time  = DB.Column(DB.Integer, default=6)
    bomb_time = DB.Column(DB.Integer, default=12)
    arm_time  = DB.Column(DB.Integer, default=1)
    diff_time = DB.Column(DB.Integer, default=12)
    cap_asst  = DB.Column(DB.Integer, default=5)
    # Capture status attributes
    uid       = DB.Column(DB.String, DB.ForeignKey('uid.uid'))
    team      = DB.Column(DB.Integer, DB.ForeignKey('team.team'))
    stable    = DB.Column(DB.Integer, default=1)

    scores    = DB.relationship('Score', backref='node_status_scores')



class Player(UserMixin, DB.Model):

    __tablename__ = 'player'

    id             = DB.Column(DB.Integer, primary_key=True, autoincrement=True)
    timestamp      = DB.Column(DB.DateTime, default=datetime.now, onupdate=datetime.now)

    firstname      = DB.Column(DB.String, nullable=False)
    lastname       = DB.Column(DB.String, nullable=False)
    callsign       = DB.Column(DB.String, nullable=False, unique=True)
    outfit         = DB.Column(DB.String, nullable=True)

    email          = DB.Column(DB.String, nullable=False)
    password_hash  = DB.Column(DB.String, nullable=False)
    # Point stuff
    captures       = DB.Column(DB.Integer, nullable=True)
    assists        = DB.Column(DB.Integer, nullable=True)

    uid            = DB.Column(DB.String, DB.ForeignKey('uid.uid'), unique=True, nullable=True)



    def set_password(self, password):

        self.password_hash = generate_password_hash(password)

    def check_password(self, password):

        return check_password_hash(self.password_hash, password)



# Creates/initializes the databases - not really necessary here...could
# manually initialize the database once, separately.
DB.create_all()



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
