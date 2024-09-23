from collections import deque

graph = {
    1: [2, 3, 4],
    2: [5],
    3: [5],
    4: [],
    5: [6, 7],
    6: [],
    7: [3],
}

def queue_bfs(v):
    discovered = [v]
    queue = deque([v])
    while queue:
        v = queue.popleft()
        for i in graph[v]:
            if i not in discovered:
                discovered.append(i)
                queue.append(i)
    return discovered

print(queue_bfs(1))