from marshmallow import fields
from app.ext import ma

class ScoresSchema(ma.Schema):
    id = fields.Integer(dump_only=True)
    time = fields.String()
    id_game = fields.Integer()
    id_child = fields.Integer()