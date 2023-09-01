from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)

# CORS(app, resources={r"/api/*": {"origins": "*"}})

# app.config["CORS_HEADERS"] = 'Content-Type'

@app.route("/api/login")
# @cross_origin()
def hello_world():
    # print(request.json)
    return jsonify(message="You'r logged")