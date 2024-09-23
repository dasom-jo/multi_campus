
from collections import deque

graph ={
    1 : [2,3,4],
    2 : [5],
    3 : [5],
    4 : [],
    5 : [6,7],
    6 : [],
    7 : [3],
}
#discovered 이미발견된 노드들의집합
#queue 아직방문하지않은 노드들의 대기열
#v시작노드


def queue_bfs(v):
    discovered = [v]
    queue = deque([v])
    while queue:
        v = queue.popleft()
        for w in graph[v]:
            if w not in discovered:
                discovered.append(w)
                queue.append(w)
    return discovered
print(queue_bfs(1))

