
from models.db_models import CommsData
from flask import render_template, Blueprint


bp = Blueprint('comms', __name__, url_prefix='')

@bp.route('/comms')
def comms_log():

    kwargs = {'cols_data' : CommsData.__table__.columns.keys(),
              'data_data' : CommsData.query.order_by(CommsData.id.desc()).all(),
              'time_disp' : '%d %b %Y  %H:%M:%S',
             }

    return render_template('comms.html', **kwargs)
