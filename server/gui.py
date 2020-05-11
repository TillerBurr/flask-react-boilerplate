from flaskwebgui import FlaskUI  #
from server.app import create_app

app = create_app()
ui = FlaskUI(app)
if __name__ == "__main__":
    ui.run()
