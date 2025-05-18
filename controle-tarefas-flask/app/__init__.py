from flask import Flask, render_template
from flask_cors import CORS
from .routes import bp

def create_app():
    app = Flask(__name__)
    CORS(app)  # libera chamadas AJAX cross-origin (opcional)
    app.register_blueprint(bp)

    @app.route('/')
    def home():
        return render_template('index2.html')

    return app
