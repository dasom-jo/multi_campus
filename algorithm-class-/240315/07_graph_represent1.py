#비선형자료구조: 데이터요소가 순차적으로 배열되있지않은상태
#DFS 깊이우선탐색 /정답이 몇가지인가하는 문제에 적합/재귀/스택으로구현
#BFS 너비우선탐색/큐를이용해구현/최단경로를 찾는문제에 적합

graph =[
    [0,1,1,1,0,0,0],
    [0,0,0,0,1,0,0],
    [0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,1,1],
    [0,0,0,0,0,0,0],
    [0,0,1,0,0,0,0],
]

import sys
node = int(sys.stdin.readline())
print(graph[node-1])

#node 입력시 해당 줄 출력

