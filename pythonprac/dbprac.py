from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()
myID = os.environ.get('ID')
myPW = os.environ.get('PW')
client = MongoClient("mongodb+srv://"+myID+":"+myPW+"@cluster0.mzxll.mongodb.net/?retryWrites=true&w=majority")
db = client.dbsparta

db.users.delete_one({'name':'bobby'})
users = list(db.users.find({},{'_id':False}))
for user in users:
    print(user)