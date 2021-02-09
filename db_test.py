from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///dbtest.db'
db = SQLAlchemy(app)

class Player(db.Model):

    __tablename__ = 'player'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    fname = db.Column(db.String)
    lname = db.Column(db.String)
    attached_uid = db.Column(db.Integer, db.ForeignKey('uid.id'),
                             nullable=True)
    uid = db.relationship('UID', backref=db.backref('player', lazy=True))
#    team = db.relationship('UID', backref=db.backref('player', lazy=True))

    def __repr__(self):
        return '<User %r>' % self.fname

class UID(db.Model):

    __tablename__ = 'uid'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    uid = db.Column(db.String, unique=True)
    team = db.Column(db.Integer)

    def __repr__(self):
        return self.uid

class Score(db.Model):

    __tablename__ = 'score'

    id        = db.Column(db.Integer, primary_key=True, autoincrement=True)
    uid       = db.Column(db.Integer, db.ForeignKey('uid.uid'),
                          nullable=False)
    player_uid = db.relationship('UID', backref=db.backref('score',
                                                           lazy=True))
    node      = db.Column(db.String(), nullable=False)
    team      = db.Column(db.Integer(), nullable=False)
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

    uids = db.session.query(UID).filter_by(uid='aabbccdd').first()

    entry = Score(uid=uids.uid, node='town', team=uids.team, action='capture',
                  points=2)

    db.session.add(entry)
    db.session.commit()
