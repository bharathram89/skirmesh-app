from database import db_session
from models.db_models import UID, Field, Player, Team, Images
from models.forms import RegisterAccountForm, LoginForm, UpdateAccountForm, UpdatePasswordForm, UpdateCallsignForm

from flask import render_template, flash, jsonify, session, Response
from flask import request, redirect, url_for, make_response
from flask import Blueprint

from flask_login import current_user, login_user, login_required

from datetime import datetime
import json



bp = Blueprint('registration', __name__, url_prefix='')



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

        form = UpdateAccountForm(obj=current_user)

    else:

        form = RegisterAccountForm()

    error = None

    if request.method == "POST" and form.validate_on_submit():

        if current_user.is_authenticated:

            user = current_user

            user.firstname = form.firstname.data
            user.lastname  = form.lastname.data
            user.email     = form.email.data

        else:

            user = Player(callsign  = form.callsign.data,
                          email     = form.email.data,
                          firstname = form.firstname.data,
                          lastname  = form.lastname.data)

            user.set_password(form.password.data)

        if form.image:

            if current_user.is_authenticated:

                if user.image and user.image != form.image.data:

                    user.image.data     = form.image.data.read()
                    user.image.mimetype = form.image.data.content_type

            else:

                image = Images(data     = form.image.data.read(),
                               mimetype = form.image.data.content_type)

                user.image = image

        try:

            if current_user.is_authenticated:

                db_session.commit()
                flash("Congrats, your profile is updated!")

            else:

                db_session.add(user)
                flash("Congrats, you're in!")

        except:

            error = 'Oops! Your entry matched information in our database...'
            print(error)
            flash(error)
            db_session.rollback()

        finally:

            db_session.commit()

            if not error:

                return redirect(url_for('index.main_page'))

    return render_template('register.html', form=form, error=error)



@bp.errorhandler(413)
def image_too_large(e):

    error = 'Oops! Your image was too large (limit 2MB).'
    flash(error)

    return render_template('something_went_wrong.html', error=error), 413



@bp.route('/update_password', methods=['POST','GET'])
def update_password():

    if not current_user.is_authenticated:

        return redirect(url_for('index.main_page'))

    form  = UpdatePasswordForm()
    error = None

    if request.method == "POST" and form.validate_on_submit():

        current_user.set_password(form.password.data)

        try:

            db_session.commit()
            flash("Congrats, your password is updated!")

        except:

            error = 'Oops! Something went wrong...'
            print(error)
            flash(error)
            db_session.rollback()

        finally:

            db_session.commit()

            if not error:

                return redirect(url_for('registration.player_profile', callsign=current_user.callsign))

    return render_template('update_password.html', form=form, error=error)



@bp.route('/update_callsign', methods=['POST','GET'])
def update_callsign():

    if not current_user.is_authenticated:

        return redirect(url_for('index.main_page'))

    form  = UpdateCallsignForm(obj=current_user)
    error = None

    if request.method == "POST" and form.validate_on_submit():

        if current_user.callsign == form.callsign.data:

            flash("You entered the same callsign - nothing was updated.")
            # Do nothing, because they didn't change their callsign
            return redirect(url_for('registration.player_profile', callsign=current_user.callsign))

        if Player.query.filter(Player.callsign == form.callsign.data).first():

            error = "Oh, no! That callsign is in use. Try another."
            flash(error)
            return render_template('update_password.html', form=form, error=error)

        current_user.callsign = form.callsign.data

        try:

            db_session.commit()
            flash("Congrats, your callsign is updated!")

        except:

            error = 'Oops! Something went wrong...'
            print(error)
            flash(error)
            db_session.rollback()

        finally:

            db_session.commit()

            if not error:

                return redirect(url_for('registration.player_profile', callsign=current_user.callsign))

    return render_template('update_callsign.html', form=form, error=error)



@bp.route('/player_image/<id>')
def serve_image(id):

    image = Images.query.get(id)

    return Response(image.data, mimetype=image.mimetype)



@bp.route('/player_profile/<callsign>')
@login_required
def player_profile(callsign):

    user = Player.query.filter_by(callsign=callsign).first()
    uid  = UID.query.filter_by(uid=user.uid).first() if user.uid else None
    team = Team.query.filter_by(team=uid.team).first() if uid else None
    db_session.commit()

    return render_template('player_profile.html', user=user, uid=uid, team=team)
