from flaskwebgui import FlaskUI  #
from server.app import create_app

app = create_app()
ui = FlaskUI(app)
ui.run()
