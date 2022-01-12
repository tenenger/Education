import requests
from bs4 import BeautifulSoup

url = 'https://movie.naver.com/movie/bi/mi/basic.nhn?code=171539'

headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get(url,headers=headers)

soup = BeautifulSoup(data.text, 'html.parser')

# 코드로 접근하는 방식과 사람이 접근하는 방식이달라 meta~로 사용한다.
image = soup.select_one('meta[property="og:image"]')['content']
title = soup.select_one('meta[property="og:title"]')['content']
desc = soup.select_one('meta[property="og:description"]')['content']
print(image, title, desc)