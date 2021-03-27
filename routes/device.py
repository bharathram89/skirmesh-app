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

    if request.method == 'GET':

        params = request.args
        result = Device.query

        nodeID = params.get('id', None)
        addr   = params.get('address', None)
        team   = params.get('teamColor', None)

        if nodeID: result = result.get(nodeID)
        elif addr: result = result.filter(Device.address == addr).first()
        elif team: result = result.filter(Device.teamColor == team).all()
        else:      result = result.all()

        db_session.commit()

        return jsonify(result)


    elif request.method == 'POST':

        params = request.json
        node   = Device(**params)

        try:

            db_session.add(node)
            db_session.commit()

        except Exception as E:

            db_session.rollback()
            db_session.commit()

            return make_response(f'{E}', 409)

        return jsonify(node)


    elif request.method == 'PUT':

        params = request.json
        addr   = params.pop('address', None)
        nodeID = params.pop('id', None)

        if nodeID: node = Device.query.get(nodeID)
        elif addr: node = Device.query.filter(Device.address == addr).first()

        if not node: return make_response('', 204)

        for attr in params:

            setattr(node, attr, params[attr])

        db_session.commit()

        return jsonify(node)


    return make_response('', 204)




@bp.route('/resources/devices', methods=['GET'])
def node_statuses():

    """
    API to interact with the Device table

    GET  - query by node addresses - bulk

    :: returns ::       query result
    """

    params = request.args

    if request.method == 'GET':

        result = Device.query

        addrs  = params.get('address', None)

        if addrs: result = result.filter(Device.address.in_(addrs))

        result = result.all()

        db_session.commit()

        return jsonify(result)

    return make_response('', 204)
