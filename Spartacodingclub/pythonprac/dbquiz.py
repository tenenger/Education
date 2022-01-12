from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client.dbsparta

db.movies.updata_one({'title':'매트릭스'},{'$set':{'rate':0}})


