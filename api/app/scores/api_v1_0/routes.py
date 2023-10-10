from flask import jsonify, request

from . import scores_bp
from ..models import Scores
from app.child.models import Child
from .schemas import ScoresSchema
from app.decorators.verify_token import token_required

@scores_bp.route("/api/scores", methods=["POST"])
def scores():
    try:
        scores = Scores(**request.json)
        scores.save()
        return jsonify(status_code=200)
    except:
        return jsonify(message="Ha habido un error en el servidor al agregar el niño. Intente nuevamente", status_code=500)

@scores_bp.route("/api/scores/<int:childId>", methods=["GET"])
def scores_by_child(childId):
    try:
        scores_1 = Scores.query.filter_by(id_child=childId, id_game=1).order_by(Scores.id.desc()).first()
        scores_2 = Scores.query.filter_by(id_child=childId, id_game=2).order_by(Scores.id.desc()).first()
        scores_3 = Scores.query.filter_by(id_child=childId, id_game=3).order_by(Scores.id.desc()).first()
        scores_1 = None if scores_1 is None else ScoresSchema().dump(scores_1)
        scores_2 = None if scores_2 is None else ScoresSchema().dump(scores_2)
        scores_3 = None if scores_3 is None else ScoresSchema().dump(scores_3)
        return jsonify(scores_1=scores_1, scores_2=scores_2, scores_3=scores_3, status_code=200)
    except:
        return jsonify(message="Ha habido un error en el servidor al agregar el niño. Intente nuevamente", status_code=500)


