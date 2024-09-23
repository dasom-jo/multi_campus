#습관! 과정쓰기
'''
1.사실확인
나무는 v미터이다
    -달팽이는 낮에 a미터를간다
    -달팽이는 밤에 b미터를 떨어진다
    -정상에 올라간 이후로는 미끄러지지않는다
2.추론
    -달팽이의 하루 총 미터는 a-b미터이다
    -총 올라가야 할 거리 V 높이에서 다음 날 밤에
    이동한 거리를 제외하기 위해 현재 위치 b를 뺀 값에서 시작한다.
3.공식선언
    -day = a-b
    -now = v-b
4.코드
    1.입력값받기
    2.반복문 만들기
    3.하루동안 간 거리 만들기
    4.특정 높이에 도달하면 출력
'''
#1.입력값받기
import sys

a, b, v = [int(i) for i in sys.stdin.readline().split()]
morning = 0 #현재위치
day = 0 #이동하는데 걸리는 날
while morning < v: #목표지점도착전까지 반복
    day +=1 #하루가 지날때까지 반복
    morning += a #낮에 이동한거리
    if morning >=v: #목표 도달시
        break #종료
    #밤이되었습니다
    morning -= b #밤에 되돌아간 거리
print(day)

def fast_sanil(A, B, V):#def 함수선언
    every_day = A-B #매일간 거리
    real_v = V-B #실제 총거리 도착하는때 미끄러지는거리제외
    if real_v % every_day: #0이아닌경우/남은거리가 하루이동거리보다클경우
        day = real_v // every_day + 1 #소수점제외해서 하루 더함
    else:#정확히 0으로 떨어지면 소수점없어서 더할필요없음
        day = real_v // every_day#남은거리를 하루에 이동하는거리로나눈몫을 일수로 설정
    print(day)

A, B ,V = [int(i) for i in sys.stdin.readline().split()]
fast_sanil(A, B, V)
