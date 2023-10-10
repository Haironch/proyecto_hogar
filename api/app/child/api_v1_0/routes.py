from flask import jsonify, request

from . import child_bp
from ..models import Child
from .schemas import ChildSchema
from app.decorators.verify_token import token_required

@child_bp.route("/api/child", methods=["POST"])
def child_create():
    # try:
    child = Child(**request.json)
    child.save()
    return jsonify(message="Niño agregado correctamente", status_code=200)
    # except:
    #     return jsonify(message="Ha habido un error en el servidor al agregar el niño. Intente nuevamente", status_code=500)

@child_bp.route("/api/child", methods=["GET"])
# @token_required
def childs_get_all():
    # try:
    child = Child.get_all()
    childs = ChildSchema().dump(child, many=True)
    return childs
    # except:
    #     return jsonify(message="Ha habido un error en el servidor al agregar el niño. Intente nuevamente", status_code=500)


@child_bp.route("/api/child/<childId>", methods=["GET"])
def childs_get_by_id(childId):
    child = Child.get_by_id(childId)
    child = ChildSchema().dump(child)
    return child

@child_bp.route("/api/child/<childId>", methods=["PUT"])
def child_update(childId):
    child = Child.get_by_id(childId)
    child.name = request.json["name"]
    child.lastname = request.json["lastname"]
    child.age = request.json["age"]
    child.disabilityGrade = request.json["disabilityGrade"]
    child.save()
    return jsonify(message="Datos actualizados correctamente.", status_code=200)
    # return jsonify(message="Datos actualizados correctamente.", status_code=200)

@child_bp.route("/api/child/<childId>", methods=["DELETE"])
def child_delete(childId):
    child = Child.get_by_id(childId)
    child.delete()
    return jsonify(message="Niño eliminado correctamente.", status_code=200)
