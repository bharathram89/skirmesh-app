from database import db_session
from models.db_models import (UID, Team, Field, Score, Game, NodeStatus,
                              get_time_capture_complete, get_is_capture_closed,
                              get_field_scores)

from sqlalchemy import null
from flask import render_template, flash, jsonify, session, request, make_response
from flask import Blueprint

bp = Blueprint('node_status', __name__, url_prefix='')

from datetime import datetime
from bs4 import BeautifulSoup as SOUP
import json




@bp.route('/resources/get/node_status/one', methods=['GET'])
def get_node_status_one():

    params = request.args

    node = params.get('node', None)

    if not node: return "Error - Please specify a node"

    result = NodeStatus.query.filter(NodeStatus.node=node).first()

    return jsonify(result)




@bp.route('/resources/get/node_status/all', methods=['GET'])
def get_node_status_all():

    params = request.args

    result = NodeStatus.query

    field = params.get('node', None)
    team  = params.get('team', None)

    if field: result = result.filter(NodeStatus.field = field)
    if team:  result = result.filter(NodeStatus.team = team)

    return jsonify(result.all())
