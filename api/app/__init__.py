from flask import Flask
import os

# from .ext import jwt
from app.db import db
from app.ext import ma, migrate

def create_app():
    app = Flask(__name__)
    app.config.from_object(os.environ["APP_SETTINGS_MODULE"])

    # Initialize extensions

    app.url_map.strict_slashes = False

    db.init_app(app)
    ma.init_app(app)
    migrate.init_app(app, db)

    # Register blueprints
    from app.auth.api_v1_0 import auth_bp
    from app.child.api_v1_0 import child_bp

    app.register_blueprint(auth_bp)
    app.register_blueprint(child_bp)

    return app
