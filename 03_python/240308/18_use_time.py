import time as t #시간과 관련된모듈

now = t.time() #시간을 초단위(utc)로 반환
print(now)

current_time = t.localtime() #시간을 연월일시초분으로 반환
print(current_time)

current_srt =t.asctime() #시간을 요일 월일시분초 연도 순서의 문자열로 반환
print(current_srt)

print('a')
t.sleep(3) #반복문 등에서 활용, sleep(초) 만큼 사용
print('b')