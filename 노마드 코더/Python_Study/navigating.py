# requests는 요청기능만을 가진 라이브러리이다.
import requests
# BeautifulSoup는 html에서 원하는 정보를 추출할 수 있는 라이브러리이다.
from bs4 import BeautifulSoup

# requests.get을 사용하여 해당 url의 정보를 가져온다.
indeed_result = requests.get(
    "https://www.indeed.com/jobs?as_and=python&limit=50")

# .text를 사용하여, 해당 페이지의 html을 가져온다. html에서 원하는 기능을 추출하려면 beautifulesoup를 사용한다.
# print(indeed_result.text)

# BeautifulSoup는 데이터를 추출하며, 2가지 인수를 받는다.
# 첫번째 인수는 html이고, 두번째 인수는 첫번째 인수가 무엇인지 알려주는 문자열을 적는다.
indeed_bs4 = BeautifulSoup(indeed_result.text, "html.parser")

# .find를 사용하여, 태그와 class명이 일치하는 태그만 가져온다.
pagination_list = indeed_bs4.find("ul", {"class": "pagination-list"})

# .find_all을 사용하여, a태그인것을 가져온다.
links = pagination_list("a")

# a태그안의 span을 pages라는 배열에 넣는다.
pages = []
for link in links[:-1]:
    # .string은 해당 태그 안에 있는 문자를 추출한다.
    pages.append(int(link.find("span").string))
max_page = pages[-1]

for n in range(max_page):
    print(f"start={n * 50}")
