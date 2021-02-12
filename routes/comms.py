from database import db_session
from models.db_models import (CommsData, UID, Team, Field, Medic,
                              Score, Game, NodeStatus, Player,
                              get_time_capture_complete,
                              get_last_captor, get_is_capture_closed)

import functools

from flask import Flask, render_template, flash, jsonify, session
from flask import request, redirect, url_for, make_response

from flask_login import current_user, login_user, LoginManager, logout_user
from flask_login import login_required

from flask import Blueprint

from datetime import datetime
from bs4 import BeautifulSoup as SOUP
import time, json

bp = Blueprint('comms', __name__, url_prefix='')

@bp.route('/comms')
def comms_log():

    kwargs = {'cols_data' : CommsData.__table__.columns.keys(),
              'data_data' : CommsData.query.order_by(CommsData.id.desc()).all(),
              'datetime'  : datetime,
              'time_disp' : '%d %b %Y  %H:%M:%S',
             }

    return render_template('comms.html', **kwargs)
