# requests는 요청기능만을 가진 라이브러리이다.
import requests
# BeautifulSoup는 html에서 원하는 정보를 추출할 수 있는 라이브러리이다.
from bs4 import BeautifulSoup

LIMIT = 50
URL = f"https://www.indeed.com/jobs?as_and=python&limit={LIMIT}"


def extract_indeed_pages():
    result = requests.get(URL)
    soup = BeautifulSoup(result.text, "html.parser")
    pagination = soup.find("ul", {"class": "pagination-list"})
    links = pagination("a")
    pages = []
    for link in links[:-1]:
        pages.append(int(link.find("span").string))
    max_page = pages[-1]
    return max_page


def extract_indeed_jobs(last_pages):
    # 채용공고를 담을 배열을 선언해준다.
    jobs = []
    # 각 페이지마다 요청이 정상작동하는지 체크한다.
    for page_num in range(last_pages):
        page = requests.get(f"{URL}start={page_num * LIMIT}")
        # 채용공고 내용이 담긴 태그의 문자를 추출한다.
        soup = BeautifulSoup(page.text, "html.parser")
        # class명에 '-' 가 들어가 있으면 추출이 안되니 class명을 확인해본다.
        results = soup.find_all("div", {"class": "job_seen_beacon"})
        for result in results:
            title = result.find("h2", {"class": "jobTitle"}).find("span", title=True).text
            jobs.append(title)
    return jobs
