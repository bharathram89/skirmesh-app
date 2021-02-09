from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from random import choice, shuffle


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///dbtest.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


class Player(db.Model):

    __tablename__ = 'player'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    fname = db.Column(db.String)
    lname = db.Column(db.String)

    uid = db.Column(db.String, db.ForeignKey('uid.uid'), nullable=True)
    team = db.Column(db.String, db.ForeignKey('team.team'), nullable=True)

    def __repr__(self):
        return '<User %r>' % self.fname


class UID(db.Model):

    __tablename__ = 'uid'

    id   = db.Column(db.Integer, primary_key=True, autoincrement=True)
    uid  = db.Column(db.String, unique=True)
    team = db.Column(db.String, db.ForeignKey('team.team'), nullable=False)

    scores = db.relationship('Score', backref=db.backref('scores_uid', lazy=True))
    player = db.relationship('Player', backref=db.backref('player_uid', lazy=True, uselist=False))

    def __repr__(self):
        return self.uid


class Team(db.Model):

    __tablename__ = 'team'

    id   = db.Column(db.Integer, primary_key=True, autoincrement=True)
    team = db.Column(db.String, unique=True)

    scores = db.relationship('Score', backref=db.backref('scores_team', lazy=True))
    player = db.relationship('Player', backref=db.backref('player_team', lazy=True, uselist=False))
    uids   = db.relationship('UID', backref=db.backref('uids_team', lazy=True, uselist=False))

    def __repr__(self):
        return self.team


class Score(db.Model):

    __tablename__ = 'score'

    id        = db.Column(db.Integer, primary_key=True, autoincrement=True)
    uid       = db.Column(db.Integer, db.ForeignKey('uid.uid'), nullable=False)
    node      = db.Column(db.String(), nullable=False)
    team      = db.Column(db.Integer(), db.ForeignKey('team.team'), nullable=False)
    action    = db.Column(db.String())
    points    = db.Column(db.Integer())


def init_db():

    db.create_all()
    dustin = Player(fname='Dustin',lname='Kuchenbecker')
    uid1 = UID(uid='aabbccdd', team=1)

    db.session.add(dustin)
    db.session.add(uid1)
    db.session.commit()

    x = db.session.query(Player).filter_by(fname="Dustin").first()
    y = db.session.query(UID).filter_by(uid='aabbccdd').first()
    x.attached_uid = y.id
    db.session.add(x)
    db.session.commit()


def add_node_entry():

    uids = db.session.query(UID).all()
    uids = [uid.uid for uid in uids]

    teams = db.session.query(Team).all()
    teams = [team.team for team in teams]


    entry = Score(uid=choice(uids), node='TOWN', team=choice(teams), action='CAPTURE', points=2)

    db.session.add(entry)
    db.session.commit()


def populate_uids():

    ints = [i for i in range(256)]

    # Only make two teams to get multiple UIDs on same team
    teams = [None]*2
    for i in range(2):

        teams[i] = bytearray([choice(ints) for i in range(3)])

    uids = [None]*20
    for i in range(20):

        uids[i]  =  bytearray([choice(ints) for i in range(4)])

    for team in teams:

        db.session.add(Team(team=team.hex()))

    while uids:
        
        team = choice(teams)
        uid  = uids.pop()

        db.session.add(UID(uid=uid.hex(), team=team.hex()))

    db.session.commit()




if __name__ == "__main__":

    db.create_all()

    if not db.session.query(UID).first():

        populate_uids()

        for i in range(100):
            add_node_entry()


    b = db.session.query(UID).first()
    a = db.session.query(Team).first()

    print(f'uid score count: {len(b.scores)}')
    print(f'team score count: {len(a.scores)}')

    print(f'uids associated with team {a.team}: {a.uids}')
    print(f'the only team associated with a uid: {b.team}')
