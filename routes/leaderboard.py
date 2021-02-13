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


@bp.route('/players')
def players():

    field = session.get('field', None)

    team_data = json.load(open("json/fields/" + field + ".json")) if field else []
    team_cmap = {int(c['value'], 16):c['color'] for c in team_data}
    team_name = {int(n['value'], 16):n['text'] for n in team_data}

    _field = Field.query.filter(Field.field == field).first()
    reg_teams = set([uid.team for uid in _field.uids]) if _field else set()

    teams = {}
    for uid in _field.uids if _field else []:
        teams.setdefault(uid.team, []).append(uid)

    _teams = Team.query.filter(Team.team.in_(teams.keys())).all()

    team_times = {t.team:sum((s.time_held if s.field == field and s.time_held else 0) for s in t.scores) for t in _teams}
    team_score = {t.team:sum((s.points if s.field == field and s.points else 0) for s in t.scores) for t in _teams}
    plyr_score = {u:sum((s.points if s.field == field and s.points else 0) for s in u.scores) for u in (_field.uids if _field else [])}


    nd_times = {}
    for node in _field.nodes if _field else []:

        times = {}
        for s in node.scores:
            times.setdefault(s.team, []).append(s.time_held or 0)

        nd_times[node] = times

        # Add time for nodes that are still under control
        begin = get_time_capture_complete(node.node)
        if node.stable and not get_is_capture_closed(node.node) and begin:

            for team in times:

                if team == node.team:

                    held  = int((datetime.now() - begin).total_seconds())

                    times[team].append(held)
                    team_times[team] += held

    for node in nd_times:
        for team in nd_times[node]:
            nd_times[node][team] = sum(nd_times[node][team])

    kwargs = {'t_sc_cols'  : ['team', 'points', 'time'],
              'team_score' : team_score,
              'plyr_score' : plyr_score,
              'nodes'      : _field.nodes if _field else [],
              't_tm_cols'  : ['team', 'time'],
              'team_times' : team_times,
              'node_times' : nd_times,
              'print_time' : print_time,
              'team_name'  : team_name,
              'team_cmap'  : team_cmap,
              'teams'      : reg_teams,
              'field'      : field,
              }

    db_session.commit()

    return render_template('players.html', **kwargs)
