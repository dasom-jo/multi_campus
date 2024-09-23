#백트래킹- 같은숫자를 여러번 사용할수없다

import sys, itertools

N, M = [int(i) for i in sys.stdin.readline().split()]
nums = [i for i in range(1,N+1)]

result = list(itertools.product(nums, repeat = M))
for i in result:
    print(*i)

def dfs(path):
    if len(path) == M:
        print(path)
        return
    for i in nums:
        if i not in path:
            path.append(i)
            dfs(path) #1호출하고 또 1,2,3호출
            path.pop()
dfs([])