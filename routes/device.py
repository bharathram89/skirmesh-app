from database import db_session
from models.db_models import Device
from models.queries import get_capture_begin, closeout_capture

import json
from sqlalchemy import null
from flask import jsonify, request, make_response
from flask import Blueprint

bp = Blueprint('device', __name__, url_prefix='')

from datetime import datetime



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

        if not node: return None
        # Handle the case where we shift away from CAPTURE (0x0A = 10) and
        # we need to closeout the score
        if 'config' in params and node.config == 10 and params['config'] != 10:

            closeout_capture(node)

        # If setting the team when in capture - closeout the previous CAPTURE
        elif 'team' in params and node.config == 10:

            closeout_capture(node)

        # If shifting point scales - closeout points from previous point scale
        # and start a "new" capture under the new point scale.
        elif 'point_scale' in params and node.config == 10 and node.stable and node.teamID:

            reset_capture(node)

        for attr in params:

            setattr(node, attr, params[attr])

        db_session.commit()

        return jsonify(node)


    return None




@bp.route('/resources/devices', methods=['GET'])
def node_statuses():
    """
    API to interact with the Device table

    GET  - query by node addresses - bulk

    :: returns ::       query result
    """
    params = request.args
    result = Device.query

    addrs  = params.get('address', None)

    if addrs: result = result.filter(Device.address.in_(addrs))

    return jsonify(result.all())
