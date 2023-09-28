from flask import jsonify, current_app, request
import jwt, datetime, os

from . import auth_bp
from .schemas import AdminsUsersSchema
from ..models import AdminsUsers


@auth_bp.route("/api/signup", methods=["POST"])
def signup():
    # Supongamos que tienes una autenticación exitosa aquí
    # y que obtienes el ID del usuario autenticado
    admin = AdminsUsers(name=request.json["name"], lastname=request.json["lastname"])
    admin.set_password(request.json["password"])
    admin.save()
    print(admin)
    return jsonify(message="signed")


@auth_bp.route("/api/login", methods=["POST"])
def login():
    # Supongamos que tienes una autenticación exitosa aquí
    # y que obtienes el ID del usuario autenticado
    if (
        os.getenv("USER_NAME") == request.json["username"]
        and os.getenv("USER_PASSWORD") == request.json["password"]
    ):
        expiration = datetime.datetime.utcnow() + datetime.timedelta(days=1)
        payload = {"username": request.json["username"], "exp": expiration}
        token = jwt.encode(payload, current_app.config["SECRET_KEY"], algorithm="HS256")
        user_data = {"username": request.json["username"]}
        return jsonify(user_data=user_data, token=token, status_code=200)
    return jsonify({"message": "Bad username or password", "status_code": 401})


@auth_bp.route("/api/getting", methods=["GET"])
def gettting():
    # send getting
    admins = AdminsUsers.query.filter_by(id=1)
    user = AdminsUsersSchema().dump(admins, many=True)
    return jsonify(user= user, status_code= 200)
