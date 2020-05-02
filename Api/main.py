import flask
from flask import request, jsonify, Flask

app = Flask(__name__)
app.config["DEBUG"] = True


@app.route('/', methods=['GET', 'POST'])
def home():
    return "{\"hello\":\"World\"}"


@app.route('/api/v1/all', methods=['GET'])
def api_all():
    return "{\"hello\":\"World\"}"

app.run()
