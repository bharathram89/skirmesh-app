"""
IRL Systems - Battlefield  (C)

@Author: Brandon Zoss, Dustin Kuchenbecker
@Date:   October, 2020 - Present

Setup and run on any Raspberry Pi model.
This code proves the minimum viable functions of a
nodes from which complex realworld gaming scenarios
can be launched and validated.
"""

from flask import Flask, render_template, flash, jsonify, session
from flask import request, redirect, url_for, make_response
from flask_login import LoginManager

import os, glob
from datetime import datetime
import time, json

from pretty_print import print_time, print_perc

from dotenv import load_dotenv
load_dotenv(verbose=True)
DATABASE_URL = os.environ['DATABASE_URL']



application = Flask(__name__)
application.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URL
application.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
application.secret_key = 'a secret'
loginMngr = LoginManager(application)


from database import db_session


from routes import index, leaderboard, comms, registration
application.register_blueprint(index.bp)
application.register_blueprint(registration.bp)
application.register_blueprint(leaderboard.bp)
application.register_blueprint(comms.bp)

from routes import admin
application.register_blueprint(admin.bp)


@application.teardown_appcontext
def shutdown_session(exception=None):
    db_session.remove()


from models.db_models import Player
@loginMngr.user_loader
def load_user(id):

    user = Player.query.get(int(id))
    db_session.commit()

    return user




if __name__ == '__main__':

    from database import init_db
    from models.db_models import Field

    init_db()

    # Initialize/update the fields table
    for file in map(os.path.basename, glob.glob("templates/fields/*.html")):

        field = file.strip('.html')
        is_field = Field.query.filter(Field.field == field).first()
        if is_field: continue
        db_session.add(Field(field=field))

    db_session.commit()


    from routes.admin import CP
    print("Initializing host controller")
    CP.configure_XB()


    t = time.monotonic()
    while not CP.end_nodes and (time.monotonic() - t) < 10:

        CP.find_nodes()

    # Configure and start the flask application
    application.jinja_env.auto_reload = True
    application.config['TEMPLATES_AUTO_RELOAD'] = True
    application.run(host='0.0.0.0')
