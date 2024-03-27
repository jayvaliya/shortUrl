from flask import *
from user.routes import user_blueprint
from flask_cors import CORS

app = Flask(__name__)
# CORS(app)


app.register_blueprint(user_blueprint, url_prefix='/rd')

@app.route('/')
def method_name():
    return "this is home page"

if __name__ == '__main__':
    app.run(debug=True)
