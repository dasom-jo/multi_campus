import sys, collections

N = int(sys.stdin.readline())
queue = collections.deque([i for i in range(1, N + 1)])
# queue = [i for i in range(1, N + 1)]

while len(queue) != 1:
    queue.popleft()
    queue.rotate(-1)
print(*queue)