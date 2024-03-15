#재귀구조로 탐색

def recursive_dfs(v, discovered = []):
    discoverd.append(v)
    for i in graph[v]:
        if i not in discoverd:
            discoverd = recursive_dfs()