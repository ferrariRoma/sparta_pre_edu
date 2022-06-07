from flask import Flask, render_template, request, jsonify
from pymongo import MongoClient
from dotenv import load_dotenv
import os

# Flask
app = Flask(__name__)
# .env
load_dotenv()
ID = os.environ.get('DB_ID')
PW = os.environ.get('DB_PW')
# DB
client = MongoClient("mongodb+srv://"+ID+":"+PW+"@cluster0.mzxll.mongodb.net/?retryWrites=true&w=majority")
db = client.dbsparta

@app.route('/')
def home():
    return render_template('index.html')

@app.route("/homework", methods=["POST"])
def homework_post():
    name = request.form['name_give']
    comment = request.form['comment_give']
    doc = {
        'name': name,
        'comment': comment
    }
    db.fan.insert_one(doc)
    return jsonify({'msg':'저장 완료!'})

@app.route("/homework", methods=["GET"])
def homework_get():
    fans = list(db.fan.find({},{'_id':False}))
    return jsonify({'fans':fans})

if __name__ == '__main__':
    app.run('0.0.0.0', port=4000, debug=True)