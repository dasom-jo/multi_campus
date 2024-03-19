#선형자료구조
#해시테이블
#해시함수:고정된크기의 함수반환
#해싱:해시함수이용
#체이닝 방식 - 동일한해시값으로 충돌이 될경우 연결리스트를 이용해 메모리위치를저장
#오픈어드레싱 방식 - 중복될경우 비어있는해시값을 찾아 들어감/메모리효율좋음
#                  단점: 비어있는값이 없을경우 시간복잡도가 높아짐/
#                       대신이럴일이별로없고 최신의방식 가장 효율좋음
# 파이썬:오픈어드레싱방식

#9375
import sys,collections

TESTCASE = int(sys.stdin.readline())
#=2
for i in range(TESTCASE):
    N = int(sys.stdin.readline())#의상수
    wear = []
    for i in range(N):
        item,category = sys.stdin.readline().split()
        wear.append(category)
    wear_counter = collections.Counter(wear)
    result = 1
    for v in wear_counter.values():
        result *= len(v) + 1
    print(result-1)
