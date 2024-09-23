#큐que  push=enqueue pop= deque
import sys, collections

queue = collections.deque()
num = int(sys.stdin.readline())

for i in range(num):
    order, *count = sys.stdin.readline().split()
    if order == 'push':
        queue.append(count[0])
    elif order == 'pop':
        result = queue.popleft()if queue else -1
        print(result)
    elif order == 'size':
        result == len(queue)
        print(result)
    elif order == 'empty':
        result = 0 if queue else 1
        print(result)
    elif order == 'front':
        result = queue[0] if queue else -1
        print(result)
    elif order == 'back':
        result = queue[-1] if queue else -1
        print(result)
