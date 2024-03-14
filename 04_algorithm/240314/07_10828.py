import sys

stack = []
N = int(sys.stdin.readline())

for i in range(N):
    cmd, *num = sys.stdin.readline().split()
    if cmd == 'push':
        x = int(num[0])
        stack.append(x)
    elif cmd == 'pop':
        if stack:
            print(stack.pop())
        else:
            print(-1)
    elif cmd == 'empty':
        print(int(bool(not stack)))
        # if stack:
        #     print(0)
        # else:
        #     print(1)
    elif cmd == 'top':
        if stack:
            print(stack[-1])
        else:
            print(-1)
    elif cmd == 'size':
        print(len(stack))