#큐que  push=enqueue pop= deque
import sys,collections
#런타인에러 =pop의  pop(0)떄문에
que = collections.deque()
n = int(sys.stdin.readline().rstrip())

for _ in range(n):
    #???질문
    #char, *num = sys.stdin.readline().strip()
    #위에 코드는 에러가 안뜨지만 출력이안됩니다
    input_str= sys.stdin.readline().split()
    char = input_str[0]
    #이 코드와 차이점이 뭔가요...?

    if char == "push":
        x = int(input_str[1])
        que.append(x)
    elif char == "pop":
        # if que:
        #     print(que.pop(0))
        # else:
        #     print(-1)
        result = que.popleft() if que else -1
        print(result)
    elif char == "size":
        print(len(que))
    elif char == "empty":
        if que:
            print(0)
        else:
            print(1)
    elif char == "front":
        if que:
            print(que[0])
        else:
            print(-1)
    elif char == "back":
        if que:
            print(que[-1])
        else:
            print(-1)

