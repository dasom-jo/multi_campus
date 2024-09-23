# 시간초과 이슈! input = sys.stdin.readline()
import sys

s = set()
M = int(sys.stdin.readline())
for _ in range(M):
    cmd = sys.stdin.readline().split()
    if cmd[0] == 'add':
        # 집합에 int(cmd[1]) 추가 [성공]
        num = int(cmd[1])
        s.add(num)
    elif cmd[0] == 'remove':
        # 집합에 int(cmd[1]) 제거 [성공 _ remove를 써볼까?]
        num = int(cmd[1])
        s.discard(num)
    elif cmd[0] == 'check':
        # 집합에 int(cmd[1])가 있는지 여부를 출력 [성공]
        num = int(cmd[1])
        if num in s:
            print(1)
        else:
            print(0)
    elif cmd[0] == 'toggle':
        # 집합에 int(cmd[1])가 있는지 여부에 따라 추가 or 제거 [성공]
        num = int(cmd[1])
        if num in s:
            s.discard(num)
        else:
            s.add(num)
    elif cmd[0] == 'all':
        # 집합에 1~20인 집합으로 재할당
        s = set([i for i in range(1, 20+1)])
    elif cmd[0] == 'empty':
        # 집합을 공집합으로 재할당
        s = set()
        # s.clear()