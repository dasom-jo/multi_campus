#스택구조로 탐색
graph ={
    1 : [2,3,4],
    2 : [5],
    3 : [5],
    4 : [],
    5 : [6,7],
    6 : [],
    7 : [3],
}


def stack_dfs(start_v):
    discoverd = []
    stack = [start_v]

    while stack:
        v=stack.pop()
        if v not in discovered:
            discovered.append(v)
            #stack.graph[v]:
            stack.append(w)
    return discovered

print(stack_dfs(1))