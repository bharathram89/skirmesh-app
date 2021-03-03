from database import db_session
from models.db_models import UID, Field, Player
from models.forms import RegisterAccountForm, LoginForm

from flask import render_template, flash, jsonify, session
from flask import request, redirect, url_for, make_response
from flask import Blueprint



bp = Blueprint('pair_uid', __name__, url_prefix='')



@bp.route('/pair_uid', methods=['POST', 'GET'])
def pair_uid(uid=None):

    players = Player.query.order_by(Player.lastname.asc()).all()
    db_session.commit()

    return render_template('pair_uid.html', Players=players, error=request.args.get('error', None))



# TODO: I have no idea if all this still works
@bp.route('/pair_uid/assign_uid', methods=['POST'])
def assign_uid():

    error = None

    if request.method == 'POST' and request.form['action'] == 'Assign UID':

        player = int(request.form['player'])
        uid    = request.form['uid']

        try:

            _uid        = UID.query.filter(UID.uid == uid).first()
            _uid.player = Player.query.get(player) if _uid else None
            db_session.commit()

            if not _uid:
                error = f'UID[{uid}] did not exist. Rescan and reassign.'
                flash(error)
            else:
                flash(f"UID [{uid}] assigned to {_uid.player.callsign}")

        except:

            db_session.rollback()
            error = f'UID already assigned to {_uid.player.callsign}'
            flash(error)

        finally:

            db_session.commit()

            if error:

                return redirect(url_for('pair_uid.pair_uid', error=error))

    return redirect(url_for('pair_uid.pair_uid'))
