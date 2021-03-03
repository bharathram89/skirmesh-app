from database import db_session
from models.db_models import (Field, Team, get_time_capture_complete,
                              get_is_capture_closed, get_field_scores)

from flask import render_template, flash, session
from flask import Blueprint

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

    _field = Field.query.filter(Field.field == field).first()

    team_data = json.load(open("json/fields/" + field + ".json")) if field else []
    team_cmap = {c['value']:c['color'] for c in team_data}
    team_name = {n['value']:n['text'] for n in team_data}

    plyr_score, team_score, team_times, nd_times = get_field_scores(field)

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
