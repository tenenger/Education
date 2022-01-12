import requests
# requests로 해당 주소의 데이터를 긁어온다.
from bs4 import BeautifulSoup
# request로 긁어온 데이터를 잘 솎아 내는게 bs4이다.

headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
# 내가 브러우저로 검색한거 처럼 하게 만들어 준다.(차단 뚫음)

data = requests.get('https://movie.naver.com/movie/sdb/rank/rmovie.nhn?sel=pnt&date=20200303',headers=headers)


soup = BeautifulSoup(data.text, 'html.parser')
trs = soup.select('#old_content > table > tbody > tr')

for tr in trs:
    a_tag = tr.select_one('td.title > div > a')
    if a_tag is not None:
        title = a_tag['title']
        rate = tr.select_one('td.point').text
        rank = tr.select_one('td.ac > img')['alt']
        print(rank, title, rate)