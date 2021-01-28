from flask_wtf import FlaskForm
from wtforms import Form, BooleanField, TextField, PasswordField, validators
import email_validator
from wtforms import SubmitField
from db_models import AuthUsers

class RegistrationForm(Form):

    fname = TextField('First Name', [validators.Length(min=2, max=20)])
    lname = TextField('Last Name', [validators.Length(min=2, max=20)])


class RegisterAccountForm(FlaskForm):

    firstname = TextField('',
                          [validators.DataRequired(), validators.Length(min=1, max=20)],
                          render_kw={"placeholder": "First Name", "autocomplete":"on"})

    lastname  = TextField('',
                          [validators.DataRequired(), validators.Length(min=1, max=20)],
                          render_kw={"placeholder": "Last Name", "autocomplete":"on"})

    callsign  = TextField('',
                          [validators.DataRequired(), validators.Length(min=1, max=20)],
                          render_kw={"placeholder": "Callsign (Please keep this G rated)", "autocomplete":"on"})

    email     = TextField('',
                          [validators.DataRequired(), validators.Email(check_deliverability=True)],
                          render_kw={"placeholder": "e-Mail", "autocomplete":"on"})

    password  = PasswordField('',
                             [validators.DataRequired(), validators.Length(min=6)],
                             render_kw={"placeholder": "password (at least 6 characters)", "autocomplete":"off"})

    confirm   = PasswordField('',
                              [validators.EqualTo('password', message='Passwords must match')],
                              render_kw={"placeholder": "Confirm your password", "autocomplete":"off"})

    submit = SubmitField('Register')


    def validate_callsign(self, callsign):

        user = AuthUsers.query.filter_by(callsign=callsign.data).first()

        if user:

            raise validators.ValidationError('Sorry, that callsign is taken!')


    # TODO: Do we really want to force everyone to have a unique e-mail?  I think
    # of all the kids signing up with their parents e-mail address.
    def validate_email(self, email):

        user = AuthUsers.query.filter_by(email=email.data).first()

        if user:

            raise validators.ValidationError('Sorry, that email address is already in use')



class LoginForm(FlaskForm):

    callsign = TextField('',
                         [validators.DataRequired()],
                         render_kw={"placeholder": "Callsign", "autocomplete":"on"})

    password = PasswordField('',
                             [validators.DataRequired()],
                             render_kw={"placeholder": "Password", "autocomplete":"on"})

    submit   = SubmitField('Login')
