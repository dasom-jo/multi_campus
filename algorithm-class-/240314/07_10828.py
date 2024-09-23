#10828
import sys

stack = []
N = int(sys.stdin.readline())

for i in range(N):
    cmd,*num = sys.stdin.readline().split()
    if cmd == 'push':
        x = int(num[0])
        stack.append(x)
    elif cmd == 'pop':
        if stack:
            print(stack.pop())
        else:
            print(stack.pop())
    elif cmd == 'empty':
        print(int(bool(not stack)))
        #bool으로 stack이 비었으면 참 '1'반환
        # if stack:
        #     print(0)
        # else:
        #     print(1)
    elif cmd == 'top':
        if stack:
            print(stack[-1])
        else:
            print(-1)
    elif cmd == 'size'