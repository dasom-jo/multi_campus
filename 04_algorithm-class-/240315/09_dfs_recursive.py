#재귀구조로 탐색
graph = {
    1: [2, 3, 4],
    2: [5],
    3: [5],
    4: [],
    5: [6, 7],
    6: [],
    7: [3],
}
#그래프를 확인할것
#1번은 2,3,4번을 자식노드로 두고잇고
#2번은 5번노드를 자식으로
#3번도 2번과같이 5번노드를 자식으로
#4번은 자식이 없고
#5번은 6,7번을 자식으로
#6번은 없고
#7번은 3번을 자식으로둠

#[1, 2, 5, 6, 7, 3, 4]
#1번노드에 들어가서 2번노드를 봣더니 5번노드로 이어져서
#5번 노드로 갓다가 5번은 6,7번 노드로 가고 7번 노드가 3번 노드로 이어져서 탐색하고
#마지막으로 4번노드  탐색

def recursive_dfs(v, discovered=[]):
    discovered.append(v)
    for i in graph[v]:
        if i not in discovered:
            discovered = recursive_dfs(i,discovered)
    return discovered
print(recursive_dfs(1))