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


# To interact and extract data from these API methods use
# requests module
#
# example:
# import requests
# result = requests.get(url = URL, params = PARAMS)
# data = result.json()
#
#
# result = requsts.post(url = URL, data = DATA)
# data = result.json()



@bp.route('/resources/node_status', methods=['GET','POST','PUT'])
def node_status():

    """
    API to interact with the NodeStatus table

    GET  - query by node, team, and/or field
    POST - add node to table
    PUT  - update node in table

    :: returns ::       query result
    """

    if request.method == 'GET':

        params = request.args
        result = NodeStatus.query

        node  = params.get('node',  None)
        field = params.get('field', None)
        team  = params.get('team',  None)

        print(team,field,node)

        if node:  result = result.filter(NodeStatus.node  == node)
        if field: result = result.filter(NodeStatus.field == field)
        if team:  result = result.filter(NodeStatus.team  == team)

        if node:

            return jsonify(result.first())

        return jsonify(result.all())


    if request.method == 'POST':

        data = json.loads(request.data)
        node = NodeStatus(**data)
        db_session.add(node)

        db_session.commit()

        return jsonify(node)



@bp.route('/resources/node_status/<node>', methods=['PUT'])
def update_node_status(node):

    if request.method == 'PUT':

        _node = NodeStatus.query.filter(NodeStatus.node == node).first()

        for attr in data:

            setattr(_node, attr, data[attr])

        db_session.commit()

        return jsonify(_node)
