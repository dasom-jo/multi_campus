#쇠막대기
import sys
stack = []
result = 0
mapping = {
    '(':')'
}
s = sys.stdin.readline().rstrip()
for i in s:
    if i in mapping:
        stack.append(i)
    else:
        if stack.pop() != i:
            result +=len(stack)
        else:result += 1
    return result

print(result)
#쌤풀이
import sys

pipe = sys.stdin.readline().rstrip()
stack = []
result = 0

for i in range(len(pipe)):
    if pipe[i] == '(':
        #여는 괄호는 스택에 append
        stack.append('(')
    else:
        #닫는 괄호를 만나면 pop
        steck.pop()
        if pipe[i-1] == "(": #레이저인경우
            #스택의 길이만큼 누적
            result += len(stack)
        else:
            reuslt += 1

print(result)