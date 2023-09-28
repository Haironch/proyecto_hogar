from flask import Blueprint

child_bp = Blueprint("child", __name__)

from . import routes
