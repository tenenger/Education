from indeed import extract_indeed_pages, extract_indeed_jobs

# 페이지의 마지막 번호를 추출한다.
last_indeed_pages = extract_indeed_pages()

# 이를 통해 url에 적을 문자를 생성한다.
extract_indeed_jobs(last_indeed_pages)
