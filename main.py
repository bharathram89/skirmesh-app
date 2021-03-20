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
from flask_login import LoginManager, logout_user

import os, glob, json, time

from pretty_print import print_time, print_perc

from dotenv import load_dotenv
load_dotenv(verbose=True)
DATABASE_URL = os.environ['DATABASE_URL']


application = Flask(__name__)
application.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URL
application.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
application.config['MAX_CONTENT_LENGTH'] = 5 * 1024 * 1024      # 5MB max file size limit on photos

application.secret_key = 'a secret'
loginMngr = LoginManager(application)


from database import db_session


from routes import index, leaderboard, comms, registration, about
application.register_blueprint(index.bp)
application.register_blueprint(registration.bp)
application.register_blueprint(leaderboard.bp)
application.register_blueprint(comms.bp)
application.register_blueprint(about.bp)

from routes import admin, pair_uid
application.register_blueprint(admin.bp)
application.register_blueprint(pair_uid.bp)


@application.teardown_appcontext
def shutdown_session(exception=None):
    db_session.remove()


from models.db_models import Player
@loginMngr.user_loader
def load_user(id):

    user = Player.query.get(int(id))
    db_session.commit()

    return user


@application.route('/logout')
def logout():

    logout_user()

    return redirect(url_for('index.main_page'))



if __name__ == '__main__':

    from database import init_db
    from models.db_models import Field

    init_db()

    # Initialize/update the fields table
    _fields = [f.field for f in Field.query.all()]
    for file in map(os.path.basename, glob.glob("templates/fields/*.html")):

        field = field, ext = os.path.splitext(file)
        if field in _fields: continue

        db_session.add(Field(field=field))

    db_session.commit()


    # Configure and start the flask application
    application.jinja_env.auto_reload = True
    application.config['TEMPLATES_AUTO_RELOAD'] = True
    application.run(host='0.0.0.0')
