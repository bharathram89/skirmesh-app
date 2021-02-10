from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from random import choice, shuffle
from datetime import datetime


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///dbtest.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)




class Player(db.Model):

    __tablename__ = 'player'

    id         = db.Column(db.Integer, primary_key=True, autoincrement=True)
    timestamp  = db.Column(db.DateTime, default=datetime.now, onupdate=datetime.now)

    fname      = db.Column(db.String)
    lname      = db.Column(db.String)

    # uid        = db.relationship('UID', backref=db.backref('player', uselist=False))
    uid        = db.Column(db.Integer, db.ForeignKey('uid.uid'), unique=True)

    def __init__(self, **kwargs):

        self.__dict__.update(**kwargs)




class UID(db.Model):

    __tablename__ = 'uid'

    id         = db.Column(db.Integer, primary_key=True, autoincrement=True)
    timestamp  = db.Column(db.DateTime, default=datetime.now, onupdate=datetime.now)

    uid        = db.Column(db.String, unique=True)
    team       = db.Column(db.String, db.ForeignKey('team.team'), nullable=False)
    field      = db.Column(db.String, db.ForeignKey('field.field'), nullable=False)

    scores     = db.relationship('Score', backref='scores_uid')
    medic      = db.relationship('Medic', backref='medic_uid', uselist=False)
    player     = db.relationship('Player', backref='player_uid', uselist=False)
    # player_id  = db.Column(db.String, db.ForeignKey('player.id'))
    nodes      = db.relationship('NodeStatus', backref='nodestatus_uid')

    # def __init__(self, **kwargs):
    #     self.__dict__.update(**kwargs)

    def __repr__(self):

        return self.uid




class Team(db.Model):

    __tablename__ = 'team'

    id         = db.Column(db.Integer, primary_key=True, autoincrement=True)
    timestamp  = db.Column(db.DateTime, default=datetime.now, onupdate=datetime.now)

    team = db.Column(db.String, unique=True)

    scores  = db.relationship('Score', backref='scores_team')
    uids    = db.relationship('UID', backref='uids_team')
    nodes   = db.relationship('NodeStatus', backref='nodes_team')

    def __init__(self, **kwargs):

        self.__dict__.update(**kwargs)

    def __repr__(self):

        return self.team



class Field(db.Model):

    __tablename__ = 'field'

    id         = db.Column(db.Integer, primary_key=True, autoincrement=True)
    timestamp  = db.Column(db.DateTime, default=datetime.now, onupdate=datetime.now)

    field = db.Column(db.String, unique=True)

    scores  = db.relationship('Score', backref='scores_field')
    uids    = db.relationship('UID', backref='uids_field')
    nodes   = db.relationship('NodeStatus', backref='nodes_field')

    def __init__(self, **kwargs):

        self.__dict__.update(**kwargs)

    def __repr__(self):

        return self.field



class Medic(db.Model):

    __tablename__ = 'medic'

    id         = db.Column(db.Integer, primary_key=True, autoincrement=True)
    timestamp  = db.Column(db.DateTime, default=datetime.now, onupdate=datetime.now)

    uid   = db.Column(db.String, db.ForeignKey('uid.uid'), unique=True, nullable=False)
    alive = db.Column(db.Integer, default=1, nullable=False)

    def __init__(self, **kwargs):

        self.__dict__.update(**kwargs)



class Score(db.Model):

    __tablename__ = 'score'

    id        = db.Column(db.Integer, primary_key=True, autoincrement=True)
    timestamp = db.Column(db.DateTime, default=datetime.now, onupdate=datetime.now)

    uid       = db.Column(db.Integer, db.ForeignKey('uid.uid'), )
    field     = db.Column(db.Integer, db.ForeignKey('field.field'), nullable=False)

    node      = db.Column(db.String, db.ForeignKey('node_status.node'), nullable=False)
    team      = db.Column(db.Integer, db.ForeignKey('team.team'), nullable=False)
    action    = db.Column(db.String)
    points    = db.Column(db.Integer)

    def __init__(self, **kwargs):

        self.__dict__.update(**kwargs)



class NodeStatus(db.Model):

    __tablename__ = 'node_status'

    id        = db.Column(db.Integer, primary_key=True, autoincrement=True)
    timestamp = db.Column(db.DateTime, default=datetime.now, onupdate=datetime.now)

    node      = db.Column(db.String, unique=True, nullable=False)
    # General status attributes
    field     = db.Column(db.String, db.ForeignKey('field.field'), nullable=False)
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
    team      = db.Column(db.Integer, db.ForeignKey('team.team'))
    stable    = db.Column(db.Integer, default=1)

    def __init__(self, **kwargs):

        self.__dict__.update(**kwargs)





def add_node_entry():

    uids = db.session.query(UID).all()
    fields = ['ballahack','salina_gambit_A','salina_gambit_B']

    uid = choice(uids)

    entry = Score(uid=uid.uid, node='TOWN', team=uid.team, field=uid.field, action='CAPTURE', points=2)

    db.session.add(entry)
    db.session.commit()


def populate_uids():

    ints = [i for i in range(256)]
    fields = ['ballahack','salina_gambit_A','salina_gambit_B']

    # Only make two teams to get multiple UIDs on same team
    teams = [None]*2
    for i in range(2):

        teams[i] = bytearray([choice(ints) for i in range(3)])

    uids = [None]*20
    for i in range(20):

        uids[i]  =  bytearray([choice(ints) for i in range(4)])

    for team in teams:

        db.session.add(Team(team=team.hex()))

    for f,field in enumerate(fields):
        db.session.add(Field(field=field))
        for i in range(3*f,(3 * f) + 3):
            db.session.add(NodeStatus(field=field, node='NODE %s' % i ))

    while uids:

        team = choice(teams)
        field = choice(fields)
        uid  = uids.pop()

        _uid    = UID(uid=uid.hex(), team=team.hex(), field=field)
        _player = Player(fname='first',lname='last')
        _medic  = Medic(uid=uid.hex())

        db.session.add(_uid)

        # # This step is not required!! - it gets added below! ... awesome!
        # db.session.add(_player)
        # db.session.add(_medic)

        _uid.player = _player
        _uid.medic  = _medic


    db.session.commit()




if __name__ == "__main__":

    db.create_all()

    if not db.session.query(UID).first():

        populate_uids()

        for i in range(100):
            add_node_entry()


    b = db.session.query(UID).first()
    a = db.session.query(Team).first()

    print(f'uid {b.uid} score count: {len(b.scores)}')
    print(f'team score count: {len(a.scores)}')

    print(f'uids associated with team {a.team}: {a.uids}')
    print(a.uids[0].medic.alive)
    print(f'the only team associated with uid {b.uid}: {b.team}')


# Place holder for how to aggregate scores/etc...
# dictionary = {}
# dictionary.setdefault("list", []).append("list_item")
