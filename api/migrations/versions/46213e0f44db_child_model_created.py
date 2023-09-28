"""child model created

Revision ID: 46213e0f44db
Revises: c6ab1c1a1684
Create Date: 2023-09-28 08:38:42.898665

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '46213e0f44db'
down_revision = 'c6ab1c1a1684'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('child',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=16), nullable=False),
    sa.Column('lastname', sa.String(length=16), nullable=False),
    sa.Column('age', sa.String(length=2), nullable=False),
    sa.Column('disabilityGrade', sa.Text(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('child')
    # ### end Alembic commands ###
