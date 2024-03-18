#비선형자료구조 - 힙
#힙은 부모가 항상 자식보다 작거나 같다

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