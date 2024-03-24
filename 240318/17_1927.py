#비선형자료구조 - 힙
#힙은 부모가 항상 자식보다 작거나 같다
#heapq 모듈은 힙 자료구조를 제공하는 모듈입니다
#힙은 우선순위 큐를 구현하는데 사용되며, 최소힙또는 최대힙으로 구현할수있다
#힙은 튿정한 규칙에 따라 데이터를 저장하고 삭제할때 빠르게 동작할수있도록 설계되어있습니다
#최소값 또는 최대값을 빠르게 찾을수있습니다.
import sys, heapq
N = int(sys.stdin.readline())
array = []
for _ in range(N):
    X = int(sys.stdin.readline())
    if X == 0:
        if array:
            # heapq.heappop(array)
            # print(array)
            print(heapq.heappop(array))
        else:
            # pass
            print(0)
    else:
        heapq.heappush(array, X)
        # print(array)