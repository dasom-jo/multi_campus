import sys
sys.setrecursionlimit(10**6)

tree = []
#전위순회된 이진트리저장
while True:
    try:
        tree.append(int(sys.stdin.readline()))
    except:
        break
    #전위순회된 범위를 후위순회한결과를출력하는 재귀함수
def pre_to_post(start, end):
    if start > end:
        return
    temp = end + 1
    # 새로운 루트 찾기 반복
    for i in range(start + 1, end + 1):
        if tree[start] < tree[i]:
            #tree[start] 루트노드
            #왼쪽서브트리와오른쪽 서브트리를 찾기위해 루트노드보다 큰값을 가지는 노드 찾고
            #이변수를 temp에 저장
            temp = i
            break
    # 왼쪽 서브트리 후위순회 작성
    pre_to_post(start + 1, temp - 1)
    # 오른쪽 서브트리 후위순회 작성
    pre_to_post(temp, end)
    print(tree[start])
#왼쪽 서브트리를 순회하다가 서브트리보다 갑자기 큰값이나오면 그건 오른쪽 서브트리의시작
pre_to_post(0, len(tree) - 1)