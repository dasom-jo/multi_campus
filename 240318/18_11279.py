#비선형자료구조 - 힙
#힙은 부모가 항상 자식보다 작거나 같다
#heapq.heappop : heapq 모듈에서 제공되는 함수 중 하나입니다.
# 이 함수는 최소 힙(min-heap)에서 가장 작은 원소를 꺼내 반환하는 역할을 합니다.
# 시간 초과
import sys, heapq
N = int(sys.stdin.readline())
array = []
for _ in range(N):
    X = int(sys.stdin.readline())
    if X == 0:
        if array:
            print(heapq.heappop(array))
        else:
            print(0)
    else:
        heapq.heappush(array,X)

