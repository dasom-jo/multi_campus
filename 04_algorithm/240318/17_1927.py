# 시간 초과
import sys, heapq
N = int(sys.stdin.readline())
array = []
for _ in range(N):
    X = int(sys.stdin.readline())
    if X == 0:
        if array:
            pass # 최소값 반환 후 삭제
        else:
            print(0)
    else:
        pass # 배열에 값 넣기