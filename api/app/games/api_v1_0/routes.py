from flask import jsonify, request

from . import games_bp
from ..models import Games
from .schemas import GamesSchema
from app.decorators.verify_token import token_required

@games_bp.route("/api/games/", methods=["POST"])
def games():
    try:
        game = Games(**request.json)
        game.save()
        return jsonify(message="Juego creado correctamente.", status_code=200)
    except:
        return jsonify(message="Ha habido un error al crear el juego. Intente nuevamente por favor.", status_code=500)

