from marshmallow import fields
from app.ext import ma

class AdminsUsersSchema(ma.Schema):
    id = fields.Integer(dump_only=True)
    name = fields.String()
    lastname = fields.String()