from database import db_session
from models.db_models import UID, Field, Player
from models.forms import RegisterAccountForm, LoginForm

from flask import render_template, flash, jsonify, session
from flask import request, redirect, url_for, make_response
from flask import Blueprint

from flask_login import current_user, login_user, logout_user, login_required

from datetime import datetime
import json



bp = Blueprint('registration', __name__, url_prefix='')


@bp.route('/registration', methods=['POST','GET'])
def registration():

    form = RegisterAccountForm(request.form)

    if request.method == 'POST' and form.validate():

        data = {'username':form.username.data,
                'email'   :form.email.data,
                'password':form.password.data,
               }

        try:

            users = Player(**data)
            db_session.add(users)
            db_session.commit()

            flash("Account Successfully Created")
            return redirect(url_for('main_page'))

        except Exception as E:

            error = 'That account already exists'
            flash(error)

        finally:

            db_session.commit()

            return render_template('registration.html', form=form, error=error)

    return render_template('registration.html', form=form)



@bp.route('/login', methods=['POST','GET'])
def login():

    if current_user.is_authenticated:
        return redirect(url_for('main_page'))

    form = LoginForm()

    if form.validate_on_submit():

        user = Player.query.filter_by(callsign=form.callsign.data).first()
        db_session.commit()

        if not user or not user.check_password(form.password.data):

            error = 'Oops! There was an invalid callsign or password.'
            flash(error)

            return render_template('login.html', form=form, error=error)

        login_user(user)

        return redirect(url_for('index.main_page'))

    return render_template('login.html', form=form)



@bp.route('/register', methods=['POST','GET'])
def register():

    if current_user.is_authenticated:
        return redirect(url_for('index'))

    error = None
    form = RegisterAccountForm()

    if request.method == "POST" and form.validate_on_submit():

        user = Player(callsign=form.callsign.data,
                      email=form.email.data,
                      firstname=form.firstname.data,
                      lastname=form.lastname.data)

        user.set_password(form.password.data)

        try:

            db_session.add(user)
            flash("Congrats, you're in!")

        except:

            error = 'Oops! You seem to have matching information in our database...'
            print(error)
            flash(error)

        finally:

            db_session.commit()

            if not error:

                return redirect(url_for('index.main_page'))

    return render_template('register.html', form=form, error=error)



@bp.route('/user_reg', methods=['POST', 'GET'])
def user_reg(uid=None):

    players = Player.query.order_by(Player.lastname.asc()).all()
    db_session.commit()

    return render_template('user_reg.html', Players=players)


# TODO: Make this a listener function and just pop the UID if it gets one
@bp.route('/user_reg/get_uid', methods=['POST','GET'])
def get_uid():

    while not CP.user_reg:

        pass

    uid = CP.user_reg
    CP.user_reg = None

    return make_response(jsonify({"uid": uid}), 200)



# TODO: I have no idea if all this still works
@bp.route('/user_reg/assign_uid', methods=['POST'])
def assign_uid():

    data = json.loads(request.data)
    error = None

    if request.method == 'POST':

        player = data['player']
        uid = data['uid']

    data = {'id'  : player,
            'uid' : uid,
           }

    try:

        _uid        = UID.query.filter(UID.uid == uid).first()
        _uid.player = Player.query.filter(Player.id == player).first()

    except:

        error = 'UID already assigned to player'
        flash(error)
        print(error)

    finally:

        db_session.commit()

        if error:

            return render_template('user_reg.html', error=error)

    return redirect(url_for('user_reg'))



@bp.route('/player_profile/<callsign>')
@login_required
def player_profile(callsign):

    user = Player.query.filter_by(callsign=callsign).first()
    uid  = UID.query.filter_by(uid=user.uid) if user.uid else None
    db_session.commit()

    return render_template('player_profile.html', user=user, uid=uid)



@bp.route('/logout')
def logout():

    logout_user()

    return redirect(url_for('index.main_page'))
