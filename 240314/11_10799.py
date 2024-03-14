#쇠막댁기
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