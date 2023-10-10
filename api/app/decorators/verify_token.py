from flask import request, jsonify, current_app, abort
from functools import wraps
from app.auth.models import AdminsUsers
import jwt

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None
        # jwt is passed in the request header
        if 'Authorization' in request.headers:
            token = request.headers['Authorization'].split()[1]
        # return 401 if token is not passed
        if token is None:
            abort(401)
            # return jsonify({'message' : 'Token is missing !!'}), 401
  
        try:
            # decoding the payload to fetch the stored details
            data = jwt.decode(token, current_app.config['SECRET_KEY'], algorithms=["HS256"])
        except:
            return jsonify({
                'message' : 'Token is invalid !!'
            }), 401
        # returns the current logged in users context to the routes
        return  f(*args, **kwargs)
  
    return decorated