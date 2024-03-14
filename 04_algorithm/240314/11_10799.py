# 공개합니다.
import sys
pipe = sys.stdin.readline().rstrip()  # ()(((()())(())()))(())   \n
stack = []
result = 0

for i in range(len(pipe)):
    if pipe[i] == '(':
        # 여는 괄호를 만나면 무조건!!! 스택에 append
        stack.append('(')
    else:
        # 닫는 괄호를 만나면 무조건, pop
        stack.pop()
        if pipe[i-1] == '(': # 레이저인 경우
            #스택의 길이만큼 누적
            result += len(stack)
        else: # 파이프인 경우
            result += 1
print(result)


