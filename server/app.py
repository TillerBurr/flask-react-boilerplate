"""server/app.py - main api app declaration"""
# FLASK_ENV=development FLASK_APP=server/app.py flask run
from flask import Flask, jsonify, send_from_directory, render_template

"""Main wrapper for app creation"""
app = Flask(__name__, static_folder="../public")

##
# API routes
##


@app.route("/api/items")
def items():
    """Sample API route for data"""
    return jsonify([{"title": "A"}, {"title": "B"}])


##
# View route
##


@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def index(path):
    """Return index.html for all non-api routes"""
    # pylint: disable=unused-argument
    return render_template('index.html')
    # return send_from_directory(app.static_folder, "index.html")
