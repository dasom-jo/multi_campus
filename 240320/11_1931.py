#1931
#1) 입력받기위해 import
import sys
#2) 입력받는 횟수(n)를 입력받는다
N = int(sys.stdin.readline())

meeting = []
# #3) n번 만큼 반복해서 시작시간과 끝나는 시간을 가져온다
# #   (start,end) 튜플로 만들어서 meeting이라는 배열에 추가
# # 확인 : meeting = [(),(),(),(),(),(),(),()]
for _ in range(N):
    start, end = [int(j) for j in sys.stdin.readline().split()]
    meeting.append((start,end)) #이게 튜플로 바꾸는거임

# #4) end가 짧은 순으로 meeting 정렬 !!!(만약 end가 같다면, start가 짧은순)
meeting.sort(key = lambda x: (x[1],x[0]))
print(meeting)
result = 0
finish = 0
# 5) 정렬된 meeting 을 반복한다. [변수 i]
for i in meeting:
    #6) i 는 (start, end)로 구성되어있다.
    start, end = i
    #7) start가 끝나는 시간보다 크거나 같으면,
    if start >= finish: #같은 괄호안 스타트 엔드가 아니랑 전 엔드와 후 스타트 바톤터치비교
        #8) result 증가 & finish = end
        result += 1
        finish = end
#9)result출력
print(result)