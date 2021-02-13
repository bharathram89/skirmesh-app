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

from pretty_print import print_time, print_perc


bp = Blueprint('leaderboard', __name__, url_prefix='')


@bp.route('/leaderboard')
def leaderboard():

    field = session.get('field', None)

    if not field:

        error = "Please select a Field and return to the Leaderboard"
        flash(error)

        return render_template('field_chooser.html', error=error)

    team_data = json.load(open("json/fields/" + field + ".json")) if field else []
    team_cmap = {int(c['value'], 16):c['color'] for c in team_data}
    team_name = {int(n['value'], 16):n['text'] for n in team_data}


    _field = Field.query.filter(Field.field == field).first()

    team_times, team_score = {}, {}
    for score in _field.scores:

        team_times.setdefault(score.team, []).append(score.time_held or 0)
        team_score.setdefault(score.team, []).append(score.points or 0)

    plyr_score = {u:sum((s.points or 0) for s in u.scores) for u in _field.uids}

    for team in team_times:
        team_times[team] = sum(team_times[team])
        team_score[team] = sum(team_score[team])

    nd_times = {}
    for node in _field.nodes:

        times = {}
        for score in node.scores:
            times.setdefault(score.team, []).append(score.time_held or 0)

        for team in times: times[team] = sum(times[team])
        nd_times[node] = times

        # Add time for nodes that are still under control
        begin = get_time_capture_complete(node.node)
        if node.stable and begin and not get_is_capture_closed(node.node) and node.team in times:

            times[node.team]
            held  = int((datetime.now() - begin).total_seconds())

            nd_times[node][node.team] += held
            team_times[node.team]     += held


    kwargs = {'team_score' : team_score,
              'plyr_score' : plyr_score,
              'nodes'      : _field.nodes if _field else [],
              'team_times' : team_times,
              'node_times' : nd_times,
              'print_time' : print_time,
              'team_name'  : team_name,
              'team_cmap'  : team_cmap,
              'field'      : field,
              }

    db_session.commit()

    return render_template('leaderboard.html', **kwargs)
