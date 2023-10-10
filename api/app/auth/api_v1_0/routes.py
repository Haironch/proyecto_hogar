from flask import jsonify, current_app, request
import jwt, datetime, os

from . import auth_bp
from .schemas import AdminsUsersSchema
from ..models import AdminsUsers
from app.decorators.verify_token import token_required


@auth_bp.route("/api/signup", methods=["POST"])
def signup():
    # Supongamos que tienes una autenticación exitosa aquí
    # y que obtienes el ID del usuario autenticado
    admin = AdminsUsers(name=request.json["name"], lastname=request.json["lastname"])
    admin.set_password(request.json["password"])
    admin.save()
    return jsonify(message="signed")


@auth_bp.route("/api/login", methods=["POST"])
def login():
    # Supongamos que tienes una autenticación exitosa aquí
    # y que obtienes el ID del usuario autenticad
    user = AdminsUsers.get_by_name(request.json["name"])
    if user is not None and user.check_password(request.json["password"]):
        expiration = datetime.datetime.utcnow() + datetime.timedelta(days=1)
        payload = {"user_id": user.id, "name": request.json["name"], "lastname": user.lastname, "exp": expiration}
        token = jwt.encode(payload, current_app.config["SECRET_KEY"], algorithm="HS256")
        user_data = {"name": request.json["name"], "lastname": user.lastname}
        return jsonify(user_data=user_data, token=token, status_code=200)
    return jsonify({"message": "Bad username or password", "status_code": 401})


@auth_bp.route("/api/getting", methods=["GET"])
@token_required
def gettting():
    # send getting
    admins = AdminsUsers.query.filter_by(id=1)
    user = AdminsUsersSchema().dump(admins, many=True)
    return jsonify(user= user, status_code= 200)
