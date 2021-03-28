from database import db_session
from models.db_models import Users, PlayerProfile, TeamPlayer

from sqlalchemy import null
from flask import render_template, flash, jsonify, session, request, make_response
from flask import Blueprint

from datetime import datetime

bp = Blueprint('game', __name__, url_prefix='')


@bp.route('/gameplay/register_team', methods=['PUT'])
def register_team():

    """
    API to register RFID to a team.

    PUT  - update RFID team association

    :: args    ::       uid, teamID

    :: returns ::       Nothing
    """

    if request.method == 'PUT':

        params = request.json

        uid    = params.pop('uid', None)
        teamID = params.pop('teamID', None)

        if not uid or not teamID: return make_response('', 204)

        rfid = RFID.query.filter('uid' == uid).first()

        # If the RFID didn't exist, register it
        if not rfid:

            rfid = RFID(uid=uid)
            rfid.teamPlayer = TeamPlayer()

        else:

            rfid.teamPlayer.teamID    = teamID
            rfid.teamPlayer.is_alive  = True
            rfid.teamPlayer.lastMedic = datetime.utcnow()

    return make_response('', 204)


@bp.route('/gameplay/handle_capture', methods=['PUT'])
def handle_capture():

    """
    API to handle CAPTURE action.

    PUT  - update RFID team association

    :: args    ::       uid, device.ID or device.address

    :: returns ::       Nothing
    """

    # If the game is paused, ignore all capture requests
    if self.is_paused: return None

    node       = str(sender.get_64bit_addr())
    cap_status = req.get_node({'address':node})
    # TODO: This needs to map to the Action table
    # last = PG.Score.query.filter(PG.Score.node == node).order_by(PG.Score.id.desc()).first()

    if len(payload[1:5]) == 1 and cap_status:
        # If the payload does not contain a UID, it's passing the status
        # byte to indicate that capture is complete
        # Get the most recent team interaction with the node and set the
        # node as stable with the prosecuting team as owning

        # We only need to update the stability column for the current status
        cap_status['stable'] = payload[1]
        # Grab the last captor from SCORE, to determine who the points are
        # awarded to when/if capture is completed
        orig_captor = PG.get_last_captor(node)
        # If there was an originating captor and the node is now STABLE
        # (...The node will only ever be considered stable here)
        # If the last action was CAPTURE COMPLETE, the node is coming
        # online in the middle and this avoids duplicate scores
        if orig_captor and payload[1] and (last.action != 'CAPTURE COMPLETE' if last else True):

            data = {'node'  :node,
                    'uid'   :orig_captor.uid,
                    'team'  :orig_captor.team,
                    'points':2 if not self.halt_points else 0,
                    'action':'CAPTURE COMPLETE'}

            self.DB.add(PG.Score(**data))

            # Reset to only halt points for that single transaction
            self.halt_points = False

        self.DB.commit()

    if len(payload[1:5]) == 4:

        uid  = payload[1:5].hex()
        _uid = PG.UID.query.filter(PG.UID.uid == uid).first()
        team = _uid.team if _uid else None
        self.DB.commit()

        if _uid and not PG.date_is_today(_uid.timestamp):
            print(f'UID {uid} is has not registered today')
            return None

        if team:

            print(f'Team {team} is prosecuting Node_{node}')

            data = {'uid':uid, 'team':team, 'node':node}

            if cap_status:

                # own_uid, own_team, cap_stable, cap_time = cap_status
                # If no one owns the node, the attacker captures immediately
                # If his teams was already there, he only assists
                data['action'] = 'CAPTURE' if team != cap_status.team else 'ASSIST'
                data['points'] = 2 if team != cap_status.team else 1

                if data['action'] == 'CAPTURE':

                    begin = PG.get_time_capture_complete(node)
                    # ONLY figure out the score if the score has not already
                    # been figured out (i.e. the capture was closed out)
                    if begin and not PG.get_is_capture_closed(node):

                        held  = int((datetime.utcnow() - begin).total_seconds())
                        orig_captor = PG.get_last_captor(node)

                        tdat = {'node'     :node,
                                'team'     :orig_captor.team,
                                'time_held':held,
                                # Account for points as scaled by current value
                                'points'   :held//cap_status.point_scale,
                                'action'   :'LOST CONTROL'}

                        self.DB.add(PG.Score(**tdat))

                    self.DB.commit()

            else:
                # If there was no status for the node - this is a capture
                # and the capture should be instant
                data['action'] = 'CAPTURE'
                data['points'] = 2

            # If the ACTION is to "CAPTURE" then always add score data.  If it is an assist
            # ONLY add score data if the node IS NOT STABLE - can only be an ASSIST if cap_status is
            # known
            if data['action'] == 'CAPTURE' or (data['action'] == 'ASSIST' and not cap_status.stable):

                if _uid.player:

                    if data['action'] == 'CAPTURE': _uid.player.captures += 1
                    if data['action'] == 'ASSIST': _uid.player.assists += 1

                self.DB.add(PG.Score(**data))
                self.DB.commit()

            data = {'node':node, 'uid':uid, 'team':team}
            # If the node is not currently owned, then it's immediately stable
            # If the prosecuting team is the same team, keep it stable
            data['stable'] = 1 if not cap_status or (cap_status.stable and team == cap_status.team) else 0

            if cap_status:

                cap_status.uid    = uid
                cap_status.team   = team
                # TODO cleanup how this is assigned
                cap_status.stable = data['stable']

            else:

                self.DB.add(PG.NodeStatus(**data))

            self.DB.commit()

            # In all cases, return CAPTURE and TEAM so the node can
            # shift status appropriately
            return bytearray([CONTROL_POINT.CAPTURE]) + bytearray.fromhex(team)

        # If you made it here, the UID is not registered to a team
        print(f'{uid} is not registered to a team')

    self.DB.commit()
