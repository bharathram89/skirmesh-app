from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin

from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand

import os
from datetime import datetime

app = Flask(__name__)

from dotenv import load_dotenv
load_dotenv(verbose=True)
DATABASE_URL = os.environ['DATABASE_URL']
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URL
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
migrate = Migrate(app, db)
manager = Manager(app)

manager.add_command('db', MigrateCommand)


class CommsData(db.Model):

    __tablename__ = 'data'

    id         = db.Column(db.Integer, primary_key=True, autoincrement=True)
    timestamp  = db.Column(db.DateTime, default=datetime.utcnow)

    sender     = db.Column(db.String, nullable=False)
    dest       = db.Column(db.String, nullable=False)
    command    = db.Column(db.Integer, nullable=False)
    payload    = db.Column(db.String, nullable=False)



class UID(db.Model):

    __tablename__ = 'uid'

    id         = db.Column(db.Integer, primary_key=True, autoincrement=True)
    timestamp  = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    uid        = db.Column(db.String, unique=True)
    team       = db.Column(db.String, db.ForeignKey('team.team'))
    field      = db.Column(db.String, db.ForeignKey('field.field'))

    scores     = db.relationship('Score', backref='scores_uid', cascade="all, delete-orphan")
    medic      = db.relationship('Medic', backref='medic_uid', uselist=False, cascade="all, delete-orphan")
    player     = db.relationship('Player', backref='player_uid', uselist=False, cascade="all, delete-orphan")
    nodes      = db.relationship('NodeStatus', backref='nodestatus_uid', cascade="all, delete-orphan")


    def __repr__(self):

        return self.uid



class Team(db.Model):

    __tablename__ = 'team'

    id        = db.Column(db.Integer, primary_key=True, autoincrement=True)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    team      = db.Column(db.String, unique=True, nullable=False)

    scores    = db.relationship('Score', backref='scores_team', cascade="all, delete-orphan")
    uids      = db.relationship('UID', backref='uids_team', cascade="all, delete-orphan")
    nodes     = db.relationship('NodeStatus', backref='nodes_team', cascade="all, delete-orphan")


    def __repr__(self):

        return self.team



class Field(db.Model):

    __tablename__ = 'field'

    id         = db.Column(db.Integer, primary_key=True, autoincrement=True)
    timestamp  = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    field      = db.Column(db.String, unique=True, nullable=False)

    scores     = db.relationship('Score', backref='scores_field', cascade="all, delete-orphan")
    uids       = db.relationship('UID', backref='uids_field', cascade="all, delete-orphan")
    nodes      = db.relationship('NodeStatus', backref='nodes_field', cascade="all, delete-orphan")


    def __repr__(self):

        return self.field



class Medic(db.Model):

    __tablename__ = 'medic'

    id        = db.Column(db.Integer, primary_key=True, autoincrement=True)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    uid       = db.Column(db.String, db.ForeignKey('uid.uid'), unique=True, nullable=False)
    alive     = db.Column(db.Boolean, default=1, nullable=False)



class Score(db.Model):

    __tablename__ = 'score'

    id        = db.Column(db.Integer, primary_key=True, autoincrement=True)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)

    uid       = db.Column(db.String, db.ForeignKey('uid.uid'))
    field     = db.Column(db.String, db.ForeignKey('field.field'), nullable=False)
    node      = db.Column(db.String, db.ForeignKey('node_status.node'), nullable=False)
    team      = db.Column(db.String, db.ForeignKey('team.team'), nullable=False)

    action    = db.Column(db.String)
    points    = db.Column(db.Integer)
    time_held = db.Column(db.Integer)



class Game(db.Model):

    __tablename__ = 'game'

    id             = db.Column(db.Integer, primary_key=True, autoincrement=True)
    field          = db.Column(db.String)
    # All teams, scores by, and times by are dictionaries or lists converted
    # to strings. To get it back to the original form, call eval()
    teams          = db.Column(db.String)
    team_name_map  = db.Column(db.String)

    times_by_team  = db.Column(db.String)
    times_by_node  = db.Column(db.String)

    score_by_team  = db.Column(db.String)
    score_by_uid   = db.Column(db.String)

    timestamp      = db.Column(db.DateTime, default=datetime.utcnow)



class NodeStatus(db.Model):

    __tablename__ = 'node_status'

    id        = db.Column(db.Integer, primary_key=True, autoincrement=True)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    node      = db.Column(db.String, unique=True, nullable=False)
    # General status attributes
    field     = db.Column(db.String, db.ForeignKey('field.field'))
    location  = db.Column(db.String)
    config    = db.Column(db.Integer, default=0x0A) #CAPTURE
    # Node timing attributes
    cap_time  = db.Column(db.Integer, default=6)
    med_time  = db.Column(db.Integer, default=6)
    bomb_time = db.Column(db.Integer, default=12)
    arm_time  = db.Column(db.Integer, default=1)
    diff_time = db.Column(db.Integer, default=12)
    cap_asst  = db.Column(db.Integer, default=5)
    # Capture status attributes
    uid       = db.Column(db.String, db.ForeignKey('uid.uid'))
    team      = db.Column(db.String, db.ForeignKey('team.team'))
    stable    = db.Column(db.Integer, default=1)
    # Point scaling
    point_scale = db.Column(db.Integer, default=60)
    allow_medic = db.Column(db.Boolean, default=1)

    scores    = db.relationship('Score', backref='node_status_scores', cascade="all, delete-orphan")



class Player(UserMixin, db.Model):

    __tablename__ = 'player'

    id             = db.Column(db.Integer, primary_key=True, autoincrement=True)
    timestamp      = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    image          = db.relationship('Images', backref='player_image', uselist=False, cascade="all, delete-orphan")

    firstname      = db.Column(db.String, nullable=False)
    lastname       = db.Column(db.String, nullable=False)
    callsign       = db.Column(db.String, nullable=False, unique=True)
    outfit         = db.Column(db.String, nullable=True)

    email          = db.Column(db.String, nullable=False)
    password_hash  = db.Column(db.String, nullable=False)
    # Point stuff
    captures       = db.Column(db.Integer, nullable=True, default=0)
    assists        = db.Column(db.Integer, nullable=True, default=0)

    uid            = db.Column(db.String, db.ForeignKey('uid.uid'), unique=True, nullable=True)


    def set_password(self, password):

        self.password_hash = generate_password_hash(password)

    def check_password(self, password):

        return check_password_hash(self.password_hash, password)



class Images(db.Model):

    __tablename__ = 'images'

    id             = db.Column(db.Integer, primary_key=True, autoincrement=True)
    timestamp      = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    player         = db.Column(db.Integer, db.ForeignKey('player.id'), nullable=False)

    data           = db.Column(db.LargeBinary, nullable=False)
    mimetype       = db.Column(db.String, nullable=False)




if __name__ == "__main__":

    manager.run()
