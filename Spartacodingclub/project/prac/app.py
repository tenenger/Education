from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

@app.route('/')
def home():
   # html 코드도 작성가능하다.
   # react와 비슷한듯...?
   return render_template('index.html')

# /mypage하면 해당페이지로 넘어간다.
@app.route('/mypage')
def mypage():
   return 'mypage 입니다'

@app.route('/test', methods=['POST'])
def test_post():
   title_receive = request.form['title_give']
   print(title_receive)
   return jsonify({'result':'success', 'msg': '이 요청은 POST!'})

# 서버에 접속하려면 localhost:5000으로 들어간다. 5000 변경가능
if __name__ == '__main__':
   app.run('0.0.0.0',port=5000,debug=True)