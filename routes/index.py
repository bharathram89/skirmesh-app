from database import db_session
from models.db_models import Field, get_field_scores, date_is_today

from flask import render_template, jsonify, session, request, make_response
from flask import Blueprint

import json


bp = Blueprint('index', __name__, url_prefix='')

BOMB    = 0xBB
CAPTURE = 0x0A

@bp.route('/index/update', methods=['GET'])
def update():

    if request.method == 'GET':

        field = session.get('field')
        to_update = dict()

        team_data = json.load(open("json/fields/" + field + ".json"))

        _field = Field.query.filter(Field.field == field).first()
        nodes = _field.nodes if _field else []

        for node in nodes:

            if not date_is_today(node.timestamp): continue

            if node.config == CAPTURE and node.team and node.location:

                to_update[node.node] = {
                                       'id'    : node.location,
                                       'team'  : node.team,
                                       'color' : '#' + node.team,
                                       'stable': node.stable,
                                       }

            if node.config == BOMB:

                to_update[node.node] = {
                                       'id'    : node.location,
                                       'stable': False,
                                       'demo'  : True if node.bomb_status == 0xDD else False
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
        if not date_is_today(uid.timestamp): continue
        teams.setdefault(uid.team, []).append(uid)

    plyr_score, team_score, team_times, nd_times = get_field_scores(field)

    kwargs = {'author'     : "Brandon Zoss and Dustin Kuchenbecker",
              'name'       : "SkirMesh",
              'team_col'   : ['player'],
              'teams'      : [*teams],
              'team_data'  : teams,
              'team_cmap'  : team_cmap,
              'team_name'  : team_name,
              'team_score' : team_score,
               }

    db_session.commit()

    return render_template('fields/' + field + '.html', **kwargs)
