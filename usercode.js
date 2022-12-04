import requests
import random
from bs4 import BeautifulSoup


def get_html(url):
    r = requests.get(url)
    return r.text


def get_jokes(html):
    result_tab = []
    soup = BeautifulSoup(html,'lxml')
    page = soup.find('ul',class_='item-list')
    jokes = page.find_all('li')
    
    for joke in jokes:
        result_tab.append(joke.p.text.strip())
    return result_tab


def main():
    url1 = 'http://anekdoty.ru/pro-robotov/'
    url2 = 'http://anekdoty.ru/'
    html = get_html(url1)
    jokes = get_jokes(html)
    jokes.extend(get_jokes(get_html(url2)))
    print(random.choice(jokes))
    input()

if name == 'main':
    main()
