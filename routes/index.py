from database import db_session
from models.db_models import Field

from flask import render_template, jsonify, session, request, make_response
from flask import Blueprint

from datetime import date
import json


bp = Blueprint('index', __name__, url_prefix='')

CAPTURE = 0x0A

@bp.route('/index/update', methods=['GET'])
def update():

    if request.method == 'GET':

        field = session.get('field')
        to_update = dict()

        team_data = json.load(open("json/fields/" + field + ".json"))
        team_cmap = {c['value']:c['color'] for c in team_data}

        _field = Field.query.filter(Field.field == field).first()
        nodes = _field.nodes

        for node in nodes:

            if node.config == CAPTURE and node.team and node.location:

                to_update[node.node] = {
                                       'id'    : node.location,
                                       'team'  : node.team,
                                       'color' : team_cmap[node.team],
                                       'stable': node.stable
                                       }

        db_session.commit()

        if to_update: return make_response(jsonify(to_update), 200)

    return make_response(jsonify(""), 200)



@bp.route('/')
@bp.route('/index')
def main_page():
    """
    Establish main page.
    """
    kwargs = {'author': "Brandon Zoss and Dustin Kuchenbecker",
              'name'  : "SkirMesh"}

    return render_template('field_chooser.html', **kwargs)



@bp.route('/index/<field>')
def field_page(field):
    """
    Establish field landing page.
    """
    session['field'] = field

    team_data = json.load(open("json/fields/" + field + ".json"))
    team_cmap = {c['value']:c['color'] for c in team_data}
    team_name = {n['value']:n['text'] for n in team_data}

    _field = Field.query.filter(Field.field == field).first()

    teams = {}
    for uid in _field.uids if _field else []:
        # Only add to team if they registered today
        if uid.timestamp.date() != date.today(): continue
        teams.setdefault(uid.team, []).append(uid)

    kwargs = {'author'     : "Brandon Zoss and Dustin Kuchenbecker",
              'name'       : "SkirMesh",
              'team_col'   : ['player'],
              'teams'      : [*teams],
              'team_data'  : teams,
              'team_cmap'  : team_cmap,
              'team_name'  : team_name,
               }

    db_session.commit()

    return render_template('fields/' + field + '.html', **kwargs)
