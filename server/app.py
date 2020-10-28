"""server/app.py - main api app declaration"""
# FLASK_ENV=development FLASK_APP=server/app.py flask run -p 5001
from pathlib import Path

from flask import Flask, jsonify, render_template

from .config import Config
from .extensions import db, migrate, cache


def register_context_processors(app: Flask) -> None:
    @app.context_processor
    def register_js_files():
        js_imports = []
        js_dir = Path(app.static_folder)
        js_files = js_dir.glob("js/*.js")
        for _file in js_files:
            js_imports.append(_file.relative_to(js_dir).as_posix())
        return dict(js=js_imports)

    @app.context_processor
    def register_css_files():
        css_imports = []
        css_dir = Path(app.static_folder)
        css_files = css_dir.glob("css/*.css")
        for _file in css_files:
            css_imports.append(_file.relative_to(css_dir).as_posix())
        return dict(css=css_imports)


"""Main wrapper for app creation"""


def create_app():
    app = Flask(__name__, static_folder="../public")
    app.config.from_object(Config)
    register_context_processors(app)

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
        return render_template("index.html")
        # return send_from_directory(app.static_folder, "index.html")

    return app

def register_extensions(server: Flask):
    from .models import SampleModel  # noqa

    db.init_app(server)
    migrate.init_app(server, db)
    cache.init_app(server)
    with server.app_context():
        db.create_all()


if __name__ == "__main__":
    app = create_app()
    with app.app_context():
        db.create_all()
