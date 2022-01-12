from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client.dbsparta

# insert / find / updata / delete 4가지를 위주로 사용한다.
# db에 추가된다.
db.users.update_one({'name':'bobby'},{'$set':{'age':19}})

# __id':False 는 id를 가져오지 말라는 뜻이다.
#
same_ages = list(db.users.find({'age':21},{'_id':False}))
print(same_ages)

user = db.users.find_one({'name':'bobby'})

# 이름이 bobby인 애를 찾아서 age를 19로 set해라하는 뜻이다.
db.users.update_one({'name':'bobby'},{'$set':{'age':19}})

# 이름이 booby인 애를 찾아서 삭제해라 라는 뜻이다.
db.users.delete_one({'name':'bobby'})


# 저장 - 예시
doc = {'name':'bobby','age':21}
db.users.insert_one(doc)

# 한 개 찾기 - 예시
user = db.users.find_one({'name':'bobby'})

# 여러개 찾기 - 예시 ( _id 값은 제외하고 출력)
same_ages = list(db.users.find({'age':21},{'_id':False}))

# 바꾸기 - 예시
db.users.update_one({'name':'bobby'},{'$set':{'age':19}})

# 지우기 - 예시
db.users.delete_one({'name':'bobby'})