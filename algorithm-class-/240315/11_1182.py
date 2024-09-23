import sys
#깊이유전탐색
# N, S = [int(i) for i in sys.stdin.readline().split()]
# arr = [int(i) for i in sys.stdin.readline().split()]
N, S = [5, 0]
arr = [-7, -3, -2, -5, 8]
result = 0
# 5 0
# -7 -3 -2 5 8
# 1
def dfs(idx, sum):
    global result
    if idx >= N:
        return
    sum += arr[idx] #인덱스 0일데 -7이들어오고
    # print(sum)
    if sum == S: #-7 == 0>
        result += 1
    dfs(idx+1, sum) #그전에 호출한거 하고 내꺼 합치거
    dfs(idx+1, sum - arr[idx])# 호출한거에 내꺼를 뺌 왜냐면 여러 경의수를위해
    print(sum)
    #두 가지 재귀 호출을 통해 현재 인덱스를
    # 포함하거나 포함하지 않는 두 가지 경우를
    # 모두 탐색하여 모든 가능한 부분집합을 만들고 합을 계산합니다.

dfs(0, 0) #인덱스첫번째
print(result)


