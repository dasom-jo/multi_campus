import sys
from collections import deque
N = deque([i for i in range(1,N+1)])
def Num(self, N: int) -> int:
    while len(N) != 1:
        N.popleft()
        N.append(N.popleft())
        print(*N)
#함수호출
#시간초과 안나려면 depue