import requests
from bs4 import BeautifulSoup

# ready to crawl
headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get('https://www.genie.co.kr/chart/top200?ditc=M&rtm=N&ymd=20210701',headers=headers)
soup = BeautifulSoup(data.text, 'html.parser')

# start crawling
songs = soup.select('#body-content > div.newest-list > div > table > tbody > tr')
for song in songs:
    rank = song.select(':nth-child(2)')[0].text[0:2].strip()
    title = song.select(':nth-child(5) > a:first-child')[0].text.strip()
    artist = song.select(':nth-child(5) > a:nth-child(2)')[0].text
    print(rank, ":", title, ":", artist)