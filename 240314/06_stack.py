#10828
import sys

stack = []
n = int(sys.stdin.readline())

for i in range(n):
    cmd, *num = sys.stdin.readline().split()
    if cmd == 'push':
        x =int(num[0])
        stack.append(x)
    elif cmd == 'pop':
        if stack:
            print(stack.pop())
        else:print(-1)
    elif cmd == 'empty':
        if stack:
            print(0)
        else:print(1)
    elif cmd == 'size':
        print(len(stack[0]))
    elif cmd == 'top':
        if stack:
            print(stack[-1])
        else:print(-1)