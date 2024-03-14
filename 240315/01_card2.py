import sys
from collections import deque

def Num(self, N: int) -> int:
    N = deque(range(1,int(sys.stdin.readline())+1))
    while len(N) != 1:
        N.popleft()
        N.cards.rotate(-1)

    print(N)
