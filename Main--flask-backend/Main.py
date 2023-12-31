from flask import Flask, jsonify, abort
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import UniqueConstraint
from dataclasses import dataclass
from producer import publish
import requests

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"]= 'mysql://root:root@db/main'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
CORS(app)
db = SQLAlchemy(app)

@dataclass
class Product(db.Model):
    id:int
    title:str
    image:str
    id = db.Column(db.Integer, primary_key=True, autoincrement=False)
    title = db.Column(db.String(200))
    image = db.Column(db.String(200))

@dataclass
class ProductUser(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer)
    product_id = db.Column(db.Integer)

    UniqueConstraint('user_id', 'product-id', name='user_product_unique')


@app.route('/api/Products')
def index():
    return jsonify(Product.query.all())

@app.route('/api/Products/<int:id>/likes', methods=['POST'])
def like(id):
    req = requests.get('http://docker.for.mac.localhost:8000/api/User')
    json = req.json()
    try:
        productUser = ProductUser(user_id=json['id'], product_id=id)
        db.session.add(productUser)
        db.session.commit()
        publish('product_liked',id)
    except:
        abort(400,'you already liked this post')
    return jsonify({'message':'success'})


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')




