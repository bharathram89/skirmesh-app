"""empty message

Revision ID: 6d3158fd1d5b
Revises: 23d312d47562
Create Date: 2021-03-31 14:25:49.225695

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6d3158fd1d5b'
down_revision = '23d312d47562'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('maps', 'fieldID',
               existing_type=sa.INTEGER(),
               nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('maps', 'fieldID',
               existing_type=sa.INTEGER(),
               nullable=False)
    # ### end Alembic commands ###
