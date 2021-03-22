
from flask import render_template, flash, jsonify, session, request, make_response
from flask import Blueprint

bp = Blueprint('index', __name__, url_prefix='')


@bp.route('/')
def index():

    return render_template('base.html')
