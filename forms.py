from wtforms import Form, BooleanField, TextField, PasswordField, validators


class RegistrationForm(Form):

    fname = TextField('First Name', [validators.Length(min=2, max=20)])
    lname = TextField('Last Name', [validators.Length(min=2, max=20)])



class RegisterAccountForm(Form):

    username = TextField('User Name:', [validators.DataRequired(),
                                        validators.Length(min=5, max=20)])

    email = TextField('Email:', [validators.DataRequired(),
                                 validators.Length(min=15, max=50)])

    password = PasswordField('Password:',
                             [validators.DataRequired(),
                              validators.Length(min=6, max=16),
                              validators.EqualTo('confirm',
                                                 message='Must Match')])

    confirm = PasswordField('Confirm Password:')


class LoginForm(Form):

    username = TextField('User Name', [validators.DataRequired()])
    password = PasswordField('Password', [validators.DataRequired()])
