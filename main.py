"""
IRL Systems - Battlefield  (C)

@Author: Brandon Zoss, Dustin Kuchenbecker
@Date:   October, 2020 - Present

Setup and run on any Raspberry Pi model.
This code proves the minimum viable functions of a
nodes from which complex realworld gaming scenarios
can be launched and validated.
"""

from flask import Flask, jsonify
from flask_socketio import SocketIO
import os, glob, json, time
from dataclasses import asdict

from dotenv import load_dotenv
load_dotenv(verbose=True)
DATABASE_URL = os.environ['DATABASE_URL']


application = Flask(__name__)
application.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URL
application.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


from routes import (device, users, playerProfile, fieldProfile,
                    rfid, game, capture, login, team)

application.register_blueprint(device.bp)
application.register_blueprint(users.bp)
application.register_blueprint(playerProfile.bp)
application.register_blueprint(fieldProfile.bp)
application.register_blueprint(rfid.bp)
application.register_blueprint(game.bp)
application.register_blueprint(capture.bp)
application.register_blueprint(login.bp)
application.register_blueprint(team.bp)

socketio = SocketIO(application)

from sqlalchemy import event
from models.db_models import Device
from database import db_session


# TODO: Wrap this behind blueprints for cleanliness
@socketio.on('connect')
def test_connect():
    print("socket connected")


@socketio.on('disconnect')
def test_connect():
    print("socket disconnected")


@event.listens_for(Device, 'after_update')
def receive_after_update(mapper, connection, target):
    """listen for the 'after_update' event"""

    if isinstance(target, Device):
        print('Pushing updated Device')
        socketio.emit('update', jsonify(target).json, broadcast=True)


@application.teardown_appcontext
def shutdown_session(exception=None):
    db_session.remove()


# from models.db_models import Action
# act = ['RECONFIGURE']
# for a in act:
#     db_session.add(Action(action=a))
# db_session.commit()


if __name__ == '__main__':

    from database import init_db
    init_db()

    # Configure and start the flask application
    application.jinja_env.auto_reload = True
    application.config['TEMPLATES_AUTO_RELOAD'] = True

    # application.run(host='0.0.0.0')
    print('API running')
    # socketio.run(application, host='0.0.0.0')
    socketio.run(application, host='0.0.0.0', debug=True)
