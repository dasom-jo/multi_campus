import sys

N, S = [int(i) for i in sys.stdin.readline().split()]
arr = [int(i) for i in sys.stdin.readline().split()]

result = 0
# 5 0
# -7 -3 -2 5 8
# 1
def dfs(idx, sum):
    global result
    if idx >= N:
        return
    sum += arr[idx]
    # print(sum)
    if sum == S:
        result += 1
    dfs(idx+1, sum)
    dfs(idx+1, sum - arr[idx])
    print(sum)
    #두 가지 재귀 호출을 통해 현재 인덱스를
    # 포함하거나 포함하지 않는 두 가지 경우를
    # 모두 탐색하여 모든 가능한 부분집합을 만들고 합을 계산합니다.

dfs(0, 0)
print(result)