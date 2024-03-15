#선형자료구조-deque
#rotate:회전
import sys
from collections import deque

def Num(N: int) -> None:
    #queue = deque([i for i in range(1, N+1)])
    while len(queue) != 1:
        queue.popleft()
        queue.rotate(-1)
        print(*queue)

N = [1,2,3,4,5,6]
Num(N)