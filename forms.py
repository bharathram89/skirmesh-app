from flask_wtf import FlaskForm
from wtforms import Form, BooleanField, TextField, PasswordField, validators
from wtforms import SubmitField
from db_models import AuthUsers

class RegistrationForm(Form):

    fname = TextField('First Name', [validators.Length(min=2, max=20)])
    lname = TextField('Last Name', [validators.Length(min=2, max=20)])


class RegisterAccountForm(FlaskForm):

    firstname = TextField('First Name:', [validators.DataRequired(),
                                        validators.Length(min=2, max=20)])

    lastname  = TextField('Last Name:', [validators.DataRequired(),
                                        validators.Length(min=2, max=20)])

    callsign  = TextField('Callsign', [validators.DataRequired(),
                                        validators.Length(min=5, max=20)])

    email     = TextField('Email:', [validators.DataRequired(),
                                 validators.Length(min=11, max=50)])

    password = PasswordField('Password:',
                             [validators.DataRequired(),
                              validators.Length(min=6, max=16),
                              validators.EqualTo('confirm',
                                                 message='Must Match')])

    confirm = PasswordField('Confirm Password:')

    submit = SubmitField('Register')

    def validate_callsign(self, callsign):
        user = AuthUsers.query.filter_by(callsign=callsign.data).first()
        print(user)
        if user is not None:
            raise validators.ValidationError('Please use a different callsign')

    def validate_email(self, email):
        user = AuthUsers.query.filter_by(email=email.data).first()
        print(user)
        if user is not None:
            raise validators.ValidationError('Please use a different email address')

class LoginForm(FlaskForm):

    callsign = TextField('Callsign', [validators.DataRequired()])
    password = PasswordField('Password', [validators.DataRequired()])
    submit = SubmitField('Login')
