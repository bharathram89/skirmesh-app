
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy import func, and_, Boolean, LargeBinary
from sqlalchemy.orm import relationship
from sqlalchemy_serializer import SerializerMixin

from database import Base

from datetime import datetime

from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

# Added SerializerMixin to the modesl to make them serializable.
# To serialize into json format - use jsonify - call jsonify() >> object.data
# to retrieve the data transferred
# All relationship data is not serialized to prevent recursion errors. 


class CommsData(Base, SerializerMixin):

    __tablename__ = 'data'

    id         = Column(Integer, primary_key=True, autoincrement=True)
    timestamp  = Column(DateTime, default=datetime.utcnow)

    sender     = Column(String, nullable=False)
    dest       = Column(String, nullable=False)
    command    = Column(Integer, nullable=False)
    payload    = Column(String, nullable=False)



class UID(Base, SerializerMixin):

    __tablename__ = 'uid'

    serialize_rules = ('-scores', '-nodes')

    id         = Column(Integer, primary_key=True, autoincrement=True)
    timestamp  = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    uid        = Column(String, unique=True)
    team       = Column(String, ForeignKey('team.team'))
    field      = Column(String, ForeignKey('field.field'))

    scores     = relationship('Score', backref='scores_uid', cascade="all, delete-orphan")
    medic      = relationship('Medic', backref='medic_uid', uselist=False, cascade="all, delete-orphan")
    player     = relationship('Player', backref='player_uid', uselist=False, cascade="all, delete-orphan")
    nodes      = relationship('NodeStatus', backref='nodestatus_uid', cascade="all, delete-orphan")


    def __repr__(self):

        return self.uid



class Team(Base, SerializerMixin):

    __tablename__ = 'team'

    serialize_rules = ('-uids', '-scores', '-nodes')

    id        = Column(Integer, primary_key=True, autoincrement=True)
    timestamp = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    team      = Column(String, unique=True, nullable=False)

    scores    = relationship('Score', backref='scores_team', cascade="all, delete-orphan")
    uids      = relationship('UID', backref='uids_team', cascade="all, delete-orphan")
    nodes     = relationship('NodeStatus', backref='nodes_team', cascade="all, delete-orphan")


    def __repr__(self):

        return self.team



class Field(Base, SerializerMixin):

    __tablename__ = 'field'

    serialize_rules = ('-uids', '-scores', '-games', '-nodes')

    id         = Column(Integer, primary_key=True, autoincrement=True)
    timestamp  = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    field      = Column(String, unique=True, nullable=False)

    scores     = relationship('Score', backref='scores_field', cascade="all, delete-orphan")
    uids       = relationship('UID', backref='uids_field', cascade="all, delete-orphan")
    nodes      = relationship('NodeStatus', backref='nodes_field', cascade="all, delete-orphan")
    games      = relationship('Game', backref='games_field', cascade="all, delete-orphan")

    def __repr__(self):

        return self.field



class Medic(Base, SerializerMixin):

    __tablename__ = 'medic'

    id        = Column(Integer, primary_key=True, autoincrement=True)
    timestamp = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    uid       = Column(String, ForeignKey('uid.uid'), unique=True, nullable=False)
    alive     = Column(Boolean, default=1, nullable=False)



class Score(Base, SerializerMixin):

    __tablename__ = 'score'

    id        = Column(Integer, primary_key=True, autoincrement=True)
    timestamp = Column(DateTime, default=datetime.utcnow)

    uid       = Column(String, ForeignKey('uid.uid'))
    field     = Column(String, ForeignKey('field.field'), nullable=False)
    node      = Column(String, ForeignKey('node_status.node'), nullable=False)
    team      = Column(String, ForeignKey('team.team'), nullable=False)

    game      = Column(Integer, ForeignKey('game.id'), nullable=False)

    action    = Column(String)
    points    = Column(Integer)
    time_held = Column(Integer)



class Game(Base, SerializerMixin):

    __tablename__ = 'game'

    serialize_rules = ('-scores')

    id        = Column(Integer, primary_key=True, autoincrement=True)
    timestamp = Column(DateTime, default=datetime.utcnow)

    field     = Column(String, ForeignKey('field.field'), nullable=False)
    scores    = relationship('Score', backref='scores_game', cascade="all, delete-orphan")



class NodeStatus(Base, SerializerMixin):

    __tablename__ = 'node_status'

    serialize_rules = ('-scores')

    id        = Column(Integer, primary_key=True, autoincrement=True)
    timestamp = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

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
    # Bomb status
    bomb_status = Column(Integer, default=0xBD) #BOMB_DISARMED

    scores    = relationship('Score', backref='node_status_scores', cascade="all, delete-orphan")



class Player(Base, UserMixin, SerializerMixin):

    __tablename__ = 'player'

    serialize_rules = ('-image', '-password_hash')

    id             = Column(Integer, primary_key=True, autoincrement=True)
    timestamp      = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    image          = relationship('Images', backref='player_image', uselist=False, cascade="all, delete-orphan")

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



class Images(Base, SerializerMixin):

    __tablename__ = 'images'

    id             = Column(Integer, primary_key=True, autoincrement=True)
    timestamp      = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    player         = Column(Integer, ForeignKey('player.id'), nullable=False)

    data           = Column(LargeBinary, nullable=False)
    mimetype       = Column(String, nullable=False)



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


def date_is_today(utctime):

    diff = datetime.utcnow() - utctime

    return diff.days == 0


def get_field_scores(field):

    _field = Field.query.filter(Field.field == field).first()

    _game = _field.games[-1] if _field.games else None

    if not _field or not _game: return {}, {}, {}, {}

    _teams = set(Team.query.filter(Team.team == u.team).first() for u in _field.uids)

    plyr_score = {u:sum((s.points or 0) for s in u.scores if s in _game.scores) for u in _field.uids if date_is_today(u.timestamp)}
    team_times = {t.team:sum((s.time_held or 0) if not s.uid else 0 for s in t.scores if s in _game.scores) for t in _teams}
    team_score = {t.team:sum((s.points or 0) if not s.uid else 0 for s in t.scores if s in _game.scores) for t in _teams}

    nd_times = {}
    for node in _field.nodes:

        if not date_is_today(node.timestamp): continue

        times = {}
        for score in node.scores:

            if score not in _game.scores: continue
            times.setdefault(score.team, []).append(score.time_held or 0)

        for team in times: times[team] = sum(times[team])
        nd_times[node] = times

        # Add time for nodes that are still under control
        begin = get_time_capture_complete(node.node)
        if node.stable and begin and not get_is_capture_closed(node.node) and node.team in times:

            times[node.team]
            held  = int((datetime.utcnow() - begin).total_seconds())

            nd_times[node][node.team] += held

            if node.team in team_times:

                team_times[node.team] += held
                team_score[node.team] += held//node.point_scale

            else:

                team_times[node.team] = held
                team_score[node.team] = held//node.point_scale

    return plyr_score, team_score, team_times, nd_times
