from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()
myID = os.environ.get('ID')
myPW = os.environ.get('PW')
client = MongoClient("mongodb+srv://"+myID+":"+myPW+"@cluster0.mzxll.mongodb.net/?retryWrites=true&w=majority")
db = client.dbsparta

db.movies.update_one({'title':'가버나움'},{'$set':{'star': "0"}})