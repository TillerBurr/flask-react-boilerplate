from pathlib import Path


class Config(object):
    PORT = 5000
    ENV = "development"
    DEBUG = False  # Do not change. Use The FLASK_DEBUG environment variable
    SECRET_KEY = b"\xcba\xe1>\xfb\xd7\x7f\x17\xc0M\x9fb\x14e\xa8\xac"
    DB_PATH = f"{Path.cwd().resolve().as_posix()}/Sample.sqlite"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_DATABASE_URI = f"sqlite:///{DB_PATH}"
    CACHE_TYPE = "simple"
    CACHE_DEFAULT_TIEMOUT = 60 * 60 * 10


class DevConfig(Config):
    DEBUG = True
