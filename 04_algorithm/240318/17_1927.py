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
        heapq.heappush(array, X)