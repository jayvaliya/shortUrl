import random
import string

from flask import *
from pymongo import MongoClient

from . import user_blueprint

client = MongoClient('mongodb+srv://admin:Jay%4022102004@cluster0.sv4aus5.mongodb.net/')
db = client.urlShortner
urldb = db.url
jwt_secret_key = 'this is secret key'


@user_blueprint.route('/<string:sid>', methods=['GET'])
def user_redirect(sid):
    url_entry = urldb.find_one({"sid": sid})
    if url_entry is None:
        abort(404, 'No')
    return redirect(url_entry['url'])

@user_blueprint.route('/shorten', methods=['POST'])
def shorten_url():
    data = request.get_json()
    print(data)
    url_entry = urldb.find_one({"url": data['url']})
    randomsid=""
    if url_entry is not None:
        randomsid=url_entry['sid']
        # return jsonify({"url": url_entry})
    else:
        randomsid = ''.join(random.choices(string.ascii_uppercase + string.digits, k=5))
        urldb.insert_one({"url": data['url'], "sid": randomsid})
    return jsonify({"url": f"http://127.0.0.1:5000/rd/{randomsid}"})

