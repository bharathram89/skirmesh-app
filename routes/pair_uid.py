from database import db_session
from models.db_models import UID, Field, Player, Medic
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

            _uid = UID.query.filter(UID.uid == uid).first()

            if not _uid:

                _uid       = UID(uid=uid)
                _uid.medic = Medic(uid=uid)

            # If the RFID was assigned to another player - remove the
            # association before giving it to the new player
            if _uid.player:

                _uid.player.uid = None
                db_session.commit()

            _uid.player = Player.query.get(player)
            db_session.commit()

            flash(f"UID {uid} assigned to {_uid.player.callsign}")

        except Exception as E:

            print(E)
            db_session.rollback()
            error = 'Something went terribly wrong!!'
            flash(error)

        finally:

            db_session.commit()

            if error:

                return redirect(url_for('pair_uid.pair_uid', error=error))

    return redirect(url_for('pair_uid.pair_uid'))
