import requests


def start():
    print('Welcome to IsItDown.py!')
    print('Please write a URL or URLs you want to check. (separated by comma)')
    return input().split(',')


def check(URLs):
    for URL in URLs:
        try:
            result = requests.get(f'http://{URL.strip()}').status_code
            if result == 200:
                print(f'http://{URL} is up!')
            else:
                print(f'http://{URL} is down!')
        except Exception:
            print(f'http://{URL} is down!')
            continue
    return input('Do ypu want to start over? y/n ')


while True:
    URLs = start()
    restart = check(URLs)
    if restart == 'n':
        break
