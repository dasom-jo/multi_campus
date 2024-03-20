#
import sys

# N,S = [int(i) for i in sys.stdin.readline().split()]
# arr = [int(i) for i in sys.stdin.readline().split()]

N,S = [5, 0]
arr = [-7,-3,-2,5,8]

result = 0

#arr와 s값 사용
def dfs(idx,sum):
    global result
    if idx >= N:
        return
    sum += arr[idx]
    if sum == S:
        result +=1
    dfs(idx+1,sum)
    dfs(idx+1,sum - arr[idx])

dfs(0,0)
print(result)

