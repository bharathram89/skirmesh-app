from database import db_session
from models.db_models import Field, Team, get_time_capture_complete, get_is_capture_closed

from flask import render_template, flash, session
from flask import Blueprint

from datetime import datetime, date
import json

from pretty_print import print_time


bp = Blueprint('leaderboard', __name__, url_prefix='')


@bp.route('/leaderboard')
def leaderboard():

    field = session.get('field', None)

    if not field:

        error = "Please select a Field and return to the Leaderboard"
        flash(error)

        return render_template('field_chooser.html', error=error)

    team_data = json.load(open("json/fields/" + field + ".json")) if field else []
    team_cmap = {c['value']:c['color'] for c in team_data}
    team_name = {n['value']:n['text'] for n in team_data}


    _field = Field.query.filter(Field.field == field).first()
    _teams = set(Team.query.filter(Team.team == u.team).first() for u in _field.uids)

    plyr_score = {u:sum((s.points or 0) for s in u.scores) for u in _field.uids if u.timestamp.date() == date.today()}
    team_times = {t.team:sum((s.time_held or 0) if not s.uid else 0 for s in t.scores) for t in _teams}
    team_score = {t.team:sum((s.points or 0) if not s.uid else 0 for s in t.scores) for t in _teams}

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
            team_times[node.team] += held
            team_score[node.team] += held//node.point_scale

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
