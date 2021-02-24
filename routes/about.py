from flask import render_template, flash, session
from flask import Blueprint


bp = Blueprint('about', __name__, url_prefix='')

@bp.route('/about')
def about():

    return render_template('about.html')

