#스택구조로 탐색
#스택은 후입선출의 원칙,가장최근에 추가된요소가 가장먼저 제거
#스택은 명시적으로 데이터를 추가하고제거할수잇다(push,pop)
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