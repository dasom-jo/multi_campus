#그리드알고리즘 - 최선은 아니지만 최적의 결과
#탐욕속성 선택을 갖고있는 최적부분 구조 문제에 적합하다.
#탐욕 선택 속성: 앞으로 선택이후 선택에 영향을 주지않는것(독립)
#최적 부분 구조 문제: 작은 부분 문제에대한 해결이 전체 최적해결이되는것
#1541

import sys

expr = sys.stdin.readline().rstrip().split('-')
#print(expr)
result = 0

#2) expr에서 0번쨰는 그냥 더하기 결과에 더해주기
for i in expr[:1]:
    for j in i.split('+'):
        result += int(j)
#3)1번째 이후로는 각각 더해서 뺴주기 결과에 빼주기
for i in expr[1:]:
    for j in i.split('+'):
        result -=int(j)


print(result)