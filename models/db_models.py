
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Boolean
from sqlalchemy.orm import relationship

from database import Base

from datetime import datetime, date
from sqlalchemy import func, and_
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin



class CommsData(Base):

    __tablename__ = 'data'

    id         = Column(Integer, primary_key=True, autoincrement=True)
    timestamp  = Column(DateTime, default=datetime.now)

    sender     = Column(String, nullable=False)
    dest       = Column(String, nullable=False)
    command    = Column(Integer, nullable=False)
    payload    = Column(String, nullable=False)



class UID(Base):

    __tablename__ = 'uid'

    id         = Column(Integer, primary_key=True, autoincrement=True)
    timestamp  = Column(DateTime, default=datetime.now, onupdate=datetime.now)

    uid        = Column(String, unique=True)
    team       = Column(String, ForeignKey('team.team'), nullable=False)
    field      = Column(String, ForeignKey('field.field'), nullable=False)

    scores     = relationship('Score', backref='scores_uid')
    medic      = relationship('Medic', backref='medic_uid', uselist=False)
    player     = relationship('Player', backref='player_uid', uselist=False)
    nodes      = relationship('NodeStatus', backref='nodestatus_uid')


    def __repr__(self):

        return self.uid



class Team(Base):

    __tablename__ = 'team'

    id        = Column(Integer, primary_key=True, autoincrement=True)
    timestamp = Column(DateTime, default=datetime.now, onupdate=datetime.now)

    team      = Column(String, unique=True, nullable=False)

    scores    = relationship('Score', backref='scores_team')
    uids      = relationship('UID', backref='uids_team')
    nodes     = relationship('NodeStatus', backref='nodes_team')


    def __repr__(self):

        return self.team



class Field(Base):

    __tablename__ = 'field'

    id         = Column(Integer, primary_key=True, autoincrement=True)
    timestamp  = Column(DateTime, default=datetime.now, onupdate=datetime.now)

    field      = Column(String, unique=True, nullable=False)

    scores     = relationship('Score', backref='scores_field')
    uids       = relationship('UID', backref='uids_field')
    nodes      = relationship('NodeStatus', backref='nodes_field')


    def __repr__(self):

        return self.field



class Medic(Base):

    __tablename__ = 'medic'

    id        = Column(Integer, primary_key=True, autoincrement=True)
    timestamp = Column(DateTime, default=datetime.now, onupdate=datetime.now)

    uid       = Column(String, ForeignKey('uid.uid'), unique=True, nullable=False)
    alive     = Column(Boolean, default=1, nullable=False)



class Score(Base):

    __tablename__ = 'score'

    id        = Column(Integer, primary_key=True, autoincrement=True)
    timestamp = Column(DateTime, default=datetime.now)

    uid       = Column(String, ForeignKey('uid.uid'))
    field     = Column(String, ForeignKey('field.field'), nullable=False)
    node      = Column(String, ForeignKey('node_status.node'), nullable=False)
    team      = Column(String, ForeignKey('team.team'), nullable=False)

    action    = Column(String)
    points    = Column(Integer)
    time_held = Column(Integer)



class Game(Base):

    __tablename__ = 'game'

    id             = Column(Integer, primary_key=True, autoincrement=True)
    field          = Column(String)
    # All teams, scores by, and times by are dictionaries or lists converted
    # to strings. To get it back to the original form, call eval()
    teams          = Column(String)
    team_name_map  = Column(String)

    times_by_team  = Column(String)
    times_by_node  = Column(String)

    score_by_team  = Column(String)
    score_by_uid   = Column(String)

    timestamp      = Column(DateTime, default=datetime.now)



class NodeStatus(Base):

    __tablename__ = 'node_status'

    id        = Column(Integer, primary_key=True, autoincrement=True)
    timestamp = Column(DateTime, default=datetime.now, onupdate=datetime.now)

    node      = Column(String, unique=True, nullable=False)
    # General status attributes
    field     = Column(String, ForeignKey('field.field'))
    location  = Column(String)
    config    = Column(Integer, default=0x0A) #CAPTURE
    # Node timing attributes
    cap_time  = Column(Integer, default=6)
    med_time  = Column(Integer, default=6)
    bomb_time = Column(Integer, default=12)
    arm_time  = Column(Integer, default=1)
    diff_time = Column(Integer, default=12)
    cap_asst  = Column(Integer, default=5)
    # Capture status attributes
    uid       = Column(String, ForeignKey('uid.uid'))
    team      = Column(String, ForeignKey('team.team'))
    stable    = Column(Integer, default=1)
    # Point scaling
    point_scale = Column(Integer, default=60)
    allow_medic = Column(Boolean, default=1)

    scores    = relationship('Score', backref='node_status_scores')



class Player(UserMixin, Base):

    __tablename__ = 'player'

    id             = Column(Integer, primary_key=True, autoincrement=True)
    timestamp      = Column(DateTime, default=datetime.now, onupdate=datetime.now)

    firstname      = Column(String, nullable=False)
    lastname       = Column(String, nullable=False)
    callsign       = Column(String, nullable=False, unique=True)
    outfit         = Column(String, nullable=True)

    email          = Column(String, nullable=False)
    password_hash  = Column(String, nullable=False)
    # Point stuff
    captures       = Column(Integer, nullable=True, default=0)
    assists        = Column(Integer, nullable=True, default=0)

    uid            = Column(String, ForeignKey('uid.uid'), unique=True, nullable=True)


    def set_password(self, password):

        self.password_hash = generate_password_hash(password)

    def check_password(self, password):

        return check_password_hash(self.password_hash, password)



def get_last_captor(node):

    query = Score.query.filter(Score.action == 'CAPTURE')
    query = query.filter(Score.node == node)

    return query.order_by(Score.id.desc()).first()


def get_time_capture_complete(node):

    query = Score.query.filter(Score.action == 'CAPTURE COMPLETE')
    query = query.filter(Score.node == node)

    result = query.order_by(Score.id.desc()).first()

    return result.timestamp if result else None


def get_is_capture_closed(node):

    query = Score.query.filter(Score.node == node)
    result = query.order_by(Score.id.desc()).first()

    return result.time_held if result else None
