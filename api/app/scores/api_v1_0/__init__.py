from flask import Blueprint

scores_bp = Blueprint("scores", __name__)

from . import routes
