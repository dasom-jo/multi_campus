import sys
# 시간초과 이슈! input = sys.stdin.readline()

s = set()
M = int(sys.stdin.readline())
for _ in range(M):
    cmd = sys.stdin.readline().split()
    if cmd[0] == 'add':
    