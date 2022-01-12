import requests
# requests로 해당 주소의 데이터를 긁어온다.
from bs4 import BeautifulSoup
# request로 긁어온 데이터를 잘 솎아 내는게 bs4이다.

headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
# 내가 브러우저로 검색한거 처럼 하게 만들어 준다.(차단 뚫음)

data = requests.get('https://movie.naver.com/movie/sdb/rank/rmovie.nhn?sel=pnt&date=20200303',headers=headers)


soup = BeautifulSoup(data.text, 'html.parser')

title = soup.select_one('#old_content > table > tbody > tr:nth-child(2) > td.title > div > a')

print(title.text)
# 태그에 감싸진 문자를 가져오려면 .text를 사용한다.
# title.text
# 태그의 속성을 가져오려면 ['속성']을 붙인다.
# title['href']