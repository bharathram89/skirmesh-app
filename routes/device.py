from database import db_session
from models.db_models import Device

import json
from sqlalchemy import null
from flask import render_template, flash, jsonify, session, request, make_response
from flask import Blueprint

bp = Blueprint('device', __name__, url_prefix='')

from datetime import datetime


# To interact and extract data from these API methods use
# requests module
#
# example:
# import requests
#
# PARAMS = {key:val}
# result = requests.get(url = URL, params = PARAMS)
# data = result.json()
#
# DATA = {key:val}
# result = requsts.post(url = URL, data = DATA (or PARAMS...))
#
#    :: For PUT request, include target update row
# result = request.put(url = URL, params = PARAMS)


@bp.route('/resources/device', methods=['GET','POST','PUT'])
def node_status():

    """
    API to interact with the Device table

    GET  - query by node, team, and/or field
    POST - add node to table
    PUT  - update node in table

    :: returns ::       query result
    """

    params = json.loads(json.dumps(request.args))

    if request.method == 'GET':

        result = Device.query

        nodeID = params.get('id', None)
        addr   = params.get('address', None)
        team   = params.get('teamColor', None)

        if nodeID: return jsonify(result.get(nodeID))
        if addr:   return jsonify(result.filter(Device.address == addr).first())
        if team:   result = result.filter(Device.teamColor == team)

        return jsonify(result.all())


    elif request.method == 'POST':

        node = Device(**params)

        try:

            db_session.add(node)
            db_session.commit()

        except:

            db_session.rollback()
            db_session.commit()

            return make_response('ERROR: Device exists', 409)

        return jsonify(node)


    elif request.method == 'PUT' and 'address' in params:

        addr = params.pop('address', None)
        id   = params.pop('id', None)

        if id: _node = Device.query.get(id)
        elif addr: _node = Device.query.filter(Device.address == addr).first()

        if not _node: return make_response('', 204)

        for attr in params:

            setattr(_node, attr, params[attr])

        db_session.commit()

        return jsonify(_node)


    return make_response('', 204)
