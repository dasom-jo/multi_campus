import time as t # 시간과 관련된 모듈

now = t.time() # 시간을 초단위(UTC)로 반환
print(now)

current_time = t.localtime() # 시간을 연월일시분초의 형태로 반환
print(current_time)

current_str = t.asctime() # 시간을 "요일 월 일 시:분:초 연도" 순서의 문자열로 반환
print(current_str)

print('a')
t.sleep(3) # 반복문 등에서 활용, sleep(초)만큼 딜레이
print('b')