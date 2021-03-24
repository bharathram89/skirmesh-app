"""
IRL Systems - Battlefield  (C)

@Author: Brandon Zoss, Dustin Kuchenbecker
@Date:   October, 2020 - Present

Setup and run on any Raspberry Pi model.
This code proves the minimum viable functions of a
nodes from which complex realworld gaming scenarios
can be launched and validated.
"""

from flask import Flask
import os, glob, json, time

from dotenv import load_dotenv
load_dotenv(verbose=True)
DATABASE_URL = os.environ['DATABASE_URL']


application = Flask(__name__)
application.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URL
application.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
application.config['MAX_CONTENT_LENGTH'] = 5 * 1024 * 1024      # 5MB max file size limit on photos


from database import db_session

from routes import device, users, playerProfile, fieldProfile
application.register_blueprint(device.bp)
application.register_blueprint(users.bp)
application.register_blueprint(playerProfile.bp)
application.register_blueprint(fieldProfile.bp)



if __name__ == '__main__':

    from database import init_db
    init_db()

    # Configure and start the flask application
    application.jinja_env.auto_reload = True
    application.config['TEMPLATES_AUTO_RELOAD'] = True
    application.run(host='0.0.0.0')
