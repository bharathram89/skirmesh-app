
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy import func, and_, Boolean, LargeBinary
from sqlalchemy.orm import relationship

from database import Base
from dataclasses import dataclass
from datetime import datetime

from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

# Added SerializerMixin to the modesl to make them serializable.
# To serialize into json format - use jsonify - call jsonify() >> object.data
# to retrieve the data transferred
# All relationship data is not serialized to prevent recursion errors.


class RFID(Base):

    id:           int
    creationDate: datetime
    deactivated:  datetime

    uid:          str
    userID:       int

    __tablename__ = 'rfid'

    id            = Column(Integer, primary_key=True, autoincrement=True)
    creationDate  = Column(DateTime, default=datetime.utcnow)
    deactivated   = Column(DateTime)

    uid           = Column(String, unique=True)
    userID        = Column(Integer, ForeignKey('users.id'), nullable=False)



@dataclass
class GameAction(Base):

    id:           int
    creationDate: datetime

    actionID:     int
    userID:       int
    gameID:       int
    teamID:       int
    deviceID:     int

    __tablename__ = 'gameAction'

    id           = Column(Integer, primary_key=True, autoincrement=True)
    creationDate = Column(DateTime, default=datetime.utcnow)

    actionID = Column(Integer, ForeignKey('action.id'), nullable=False)
    userID   = Column(Integer, ForeignKey('users.id'))
    gameID   = Column(Integer, ForeignKey('games.id'), nullable=False)
    teamID   = Column(Integer, ForeignKey('teams.id'), nullable=False)
    deviceID = Column(Integer, ForeignKey('device.id'), nullable=False)



@dataclass
class Action(Base):

    id:           int
    creationDate: datetime

    action:       str
    actions:      GameAction

    __tablename__ = 'action'

    id           = Column(Integer, primary_key=True, autoincrement=True)
    creationDate = Column(DateTime, default=datetime.utcnow)

    action       = Column(String, unique=True, nullable=False)
    actions      = relationship('GameAction', backref='action_gameAction', uselist=True, cascade="all, delete-orphan")



@dataclass
class Games(Base):

    id:           int
    creationDate: datetime
    lastChange:   datetime

    startTime:    datetime
    endTime:      datetime
    is_paused:    bool

    userID:       int
    gameTypeID:   int

    actions:      GameAction

    __tablename__ = 'games'

    id           = Column(Integer, primary_key=True, autoincrement=True)
    creationDate = Column(DateTime, default=datetime.utcnow)
    lastChange   = Column(DateTime, onupdate=datetime.utcnow)

    startTime    = Column(DateTime, default=datetime.utcnow)
    endTime      = Column(DateTime)
    is_paused    = Column(Boolean, default=False)

    userID       = Column(Integer, ForeignKey('users.id'), nullable=False)
    gameTypeID   = Column(Integer, ForeignKey('gameType.id'), nullable=False)

    actions      = relationship('GameAction', backref='games_gameAction', uselist=True, cascade="all, delete-orphan")



@dataclass
class GameType(Base):

    id:           int
    creationDate: datetime
    deactivated:  datetime

    name:         str
    games:        Games

    __tablename__ = 'gameType'

    id            = Column(Integer, primary_key=True, autoincrement=True)
    creationDate  = Column(DateTime, default=datetime.utcnow)
    deactivated   = Column(DateTime)

    name          = Column(String, nullable=False)
    games         = relationship('Games', backref='gameType_games', uselist=True, cascade="all, delete-orphan")



@dataclass
class Device(Base):

    id:           int
    creationDate: datetime
    lastChange:   datetime
    deactivated:  datetime

    address:      str

    location:     int
    point_scale:  int
    allow_medic:  bool
    med_time:     int

    teamID:       int

    config:       int
    cap_time:     int
    bomb_time:    int
    arm_time:     int
    diff_time:    int
    cap_asst:     int

    stable:       bool
    bomb_status:  int

    __tablename__ = 'device'

    id            = Column(Integer, primary_key=True, autoincrement=True)
    creationDate  = Column(DateTime, default=datetime.utcnow)
    lastChange    = Column(DateTime, onupdate=datetime.utcnow)
    deactivated   = Column(DateTime)

    address     = Column(String, unique=True, nullable=False)
    # General status attributes
    location    = Column(Integer, ForeignKey('locations.id'))
    point_scale = Column(Integer, default=60)
    allow_medic = Column(Boolean, default=True)
    med_time    = Column(Integer, default=6)
    # Ownership attributes
    teamID      = Column(Integer, ForeignKey('teams.id'))
    # ------------------------------------------
    # paramters tracked locally by the node
    config      = Column(Integer, default=0x0A) #CAPTURE
    # timing attributes
    cap_time    = Column(Integer, default=6)
    bomb_time   = Column(Integer, default=12)
    arm_time    = Column(Integer, default=1)
    diff_time   = Column(Integer, default=12)
    cap_asst    = Column(Integer, default=5)
    # status attributes
    stable      = Column(Integer, default=1)
    bomb_status = Column(Integer, default=0xBD) #BOMB_DISARMED
    # ------------------------------------------
    actions     = relationship('GameAction', backref='device_gameAction', uselist=True, cascade="all, delete-orphan")



@dataclass
class TeamPlayer(Base):

    id:           int
    creationDate: datetime
    lastChange:   datetime
    deactivated:  datetime

    is_alive:     bool

    userID:       int
    teamID:       int

    __tablename__ = 'teamPlayer'

    id            = Column(Integer, primary_key=True, autoincrement=True)
    creationDate  = Column(DateTime, default=datetime.utcnow)
    lastChange    = Column(DateTime, onupdate=datetime.utcnow)
    deactivated   = Column(DateTime)

    is_alive      = Column(Boolean, default=True)

    userID        = Column(Integer, ForeignKey('users.id'), nullable=False)
    teamID        = Column(Integer, ForeignKey('teams.id'), nullable=False)



@dataclass
class Teams(Base):

    id:           int
    creationDate: datetime
    lastChange:   datetime
    deactivated:  datetime

    name:         str
    color:        str

    gameConfigID: int

    teamPlayers:  TeamPlayer
    devices:      Device
    actions:      GameAction

    __tablename__ = 'teams'

    id           = Column(Integer, primary_key=True, autoincrement=True)
    creationDate = Column(DateTime, default=datetime.utcnow)
    lastChange   = Column(DateTime, onupdate=datetime.utcnow)
    deactivated  = Column(DateTime)

    name         = Column(String, nullable=False)
    color        = Column(String, nullable=False)

    gameConfigID = Column(Integer, ForeignKey('gameConfig.id'), nullable=False)

    teamPlayers  = relationship('TeamPlayer', backref='teams_teamPlayer', uselist=True, cascade="all, delete-orphan")
    devices      = relationship('Device', backref='teams_device', uselist=True, cascade="all, delete-orphan")
    actions      = relationship('GameAction', backref='teams_gameAction', uselist=True, cascade="all, delete-orphan")



@dataclass
class GameConfig(Base):

    id:           int
    creationDate: datetime
    lastChange:   datetime
    deactivated:  datetime

    description:  str
    userID:       int
    teams:        Teams
    mapID:        int

    __tablename__ = 'gameConfig'

    id            = Column(Integer, primary_key=True, autoincrement=True)
    creationDate  = Column(DateTime, default=datetime.utcnow)
    lastChange    = Column(DateTime, onupdate=datetime.utcnow)
    deactivated   = Column(DateTime)

    description   = Column(String)
    userID        = Column(Integer, ForeignKey('users.id'), nullable=False)
    teams         = relationship('Teams', backref='teams_gameConfig', uselist=True, cascade="all, delete-orphan")
    mapID         = Column(Integer, ForeignKey('maps.id'), nullable=False)


@dataclass
class PlayerProfile(Base):

    id:           int
    creationDate: datetime
    lastChange:   datetime
    deactivated:  datetime

    userID:       int

    facebook:     str
    youTube:      str
    twitter:      str

    clanTag:      str
    outfit:       str
    profilePic:   LargeBinary

    emailAllowed: bool

    __tablename__ = 'playerProfile'

    id            = Column(Integer, primary_key=True, autoincrement=True)
    creationDate  = Column(DateTime, default=datetime.utcnow)
    lastChange    = Column(DateTime, onupdate=datetime.utcnow)
    deactivated   = Column(DateTime)

    userID        = Column(Integer, ForeignKey('users.id'), nullable=False)

    facebook      = Column(String)
    youTube       = Column(String)
    twitter       = Column(String)

    clanTag       = Column(String)
    outfit        = Column(String)
    profilePic    = Column(LargeBinary)

    emailAllowed  = Column(Boolean)



@dataclass
class FieldProfile(Base):

    id:           int
    creationDate: datetime
    lastChange:   datetime
    deactivated:  datetime

    userID:       int
    profilePic:   LargeBinary
    profile:      str

    __tablename__ = 'fieldProfile'

    id           = Column(Integer, primary_key=True, autoincrement=True)
    creationDate = Column(DateTime, default=datetime.utcnow)
    lastChange   = Column(DateTime, onupdate=datetime.utcnow)
    deactivated  = Column(DateTime)

    userID       = Column(Integer, ForeignKey('users.id'), nullable=False)
    profilePic   = Column(LargeBinary)
    profile      = Column(String)



@dataclass
class Locations(Base):

    id:           int
    creationDate: datetime
    lastChange:   datetime
    deactivated:  datetime

    mapID:       int

    __tablename__ = 'locations'

    id           = Column(Integer, primary_key=True, autoincrement=True)
    creationDate = Column(DateTime, default=datetime.utcnow)
    lastChange   = Column(DateTime, onupdate=datetime.utcnow)
    deactivated  = Column(DateTime)

    name         = Column(String, nullable=False)
    mapID        = Column(Integer, ForeignKey('maps.id'), nullable=False)



@dataclass
class Maps(Base):

    id:           int
    creationDate: datetime
    lastChange:   datetime
    deactivated:  datetime

    userID:       int

    name:         str
    map_image:    LargeBinary
    map_svg:      str

    locations:    Locations
    gameConfigs:  GameConfig

    __tablename__ = 'maps'

    id           = Column(Integer, primary_key=True, autoincrement=True)
    creationDate = Column(DateTime, default=datetime.utcnow)
    lastChange   = Column(DateTime, onupdate=datetime.utcnow)
    deactivated  = Column(DateTime)

    name        = Column(String, nullable=False)
    map_image   = Column(LargeBinary, nullable=False)
    map_svg     = Column(String, nullable=False)

    userID      = Column(Integer, ForeignKey('users.id'), nullable=False)

    locations   = relationship('Locations', backref='maps_locations', uselist=True, cascade="all, delete-orphan")
    gameConfigs = relationship('GameConfig', backref='maps_gameConfig', uselist=True, cascade="all, delete-orphan")



@dataclass
class Users(Base, UserMixin):

    id:           int
    creationDate: datetime
    lastChange:   datetime
    deactivated:  datetime

    email:         str
    emailVerified: bool

    callSign:      str
    firstName:     str
    lastName:      str
    phoneNumber:   str

    status:        str
    type:          str
    password:      str

    playerProfile: PlayerProfile
    fieldProfile:  FieldProfile
    actions:       GameAction
    maps:          Maps
    games:         Games
    gameConfig:    GameConfig
    teamPlayer:    TeamPlayer
    rfid:          RFID

    __tablename__ = 'users'

    id            = Column(Integer, primary_key=True, autoincrement=True)
    creationDate  = Column(DateTime, default=datetime.utcnow)
    lastChange    = Column(DateTime, onupdate=datetime.utcnow)
    deactivated   = Column(DateTime)

    email         = Column(String, nullable=False)
    emailVerified = Column(Boolean)

    callSign      = Column(String, nullable=False, unique=True)
    firstName     = Column(String, nullable=False)
    lastName      = Column(String, nullable=False)
    phoneNumber   = Column(String)

    status        = Column(String)
    type          = Column(String)
    password      = Column(String, nullable=False)

    playerProfile = relationship('PlayerProfile', backref='users_playerProfile', uselist=False, cascade="all, delete-orphan")
    fieldProfile  = relationship('FieldProfile', backref='users_fieldProfile', uselist=False, cascade="all, delete-orphan")
    actions       = relationship('GameAction', backref='users_gameAction', uselist=True, cascade="all, delete-orphan")
    maps          = relationship('Maps', backref='users_maps', uselist=True, cascade="all, delete-orphan")
    games         = relationship('Games', backref='users_games', uselist=True, cascade="all, delete-orphan")
    gameConfig    = relationship('GameConfig', backref='users_gameConfig', uselist=True, cascade="all, delete-orphan")
    teamPlayer    = relationship('TeamPlayer', backref='users_teamPlayer', uselist=True, cascade="all, delete-orphan")
    rfid          = relationship('RFID', backref='users_rfid', uselist=True, cascade="all, delete-orphan")

    def set_password(self, password):

        self.password = generate_password_hash(password)

    def check_password(self, password):

        return check_password_hash(self.password, password)










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
