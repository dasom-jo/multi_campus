import requests
from bs4 import BeautifulSoup

url = "https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&query=" + '2024년 03월 26일 대한민국 태국'
res = requests.get(url)
html = BeautifulSoup(res.text, 'html.parser')
result = html.find("div", class_="result")
home_score = result.find('div', class_='home').string.text
away_score = result.find('div', class_='away').string.text

score = f"{home_score}:{away_score}"

bet_dict = {
    "1:0" : ['박유진', '하성덕', '차민성'],
    "3:1" : ['이가영', '김진영', '노성현'],
    "2:1" : ["이은수", "김수아", "박소희", "김다빈", "오동석"],
    "2:0" : ["노효민", "손예림", "박형준", "김우진"],
    "1:1" : ["박석원"],
    "2:2" : ["조다솜"]
}

print(bet_dict[score])
