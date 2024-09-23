#비선형 자료 구조 - 트리
#이진트리- 자식이 최대 두명
#완전이진트리 - 마지막 레벨을 제외한 레벨에서는 자식이 두개씩잇어야하고
                # 가장 마지막 레벨 노드는 왼쪽으로 밀착되있어야한다
#전위,중위,후위순회

class Node:
    def __init__(self,item,left,right):
        self.item = item
        self.left = left
        self.right = right

#전위순회 (중간(루트),왼,오)
# def preorder(node):
#     print(node.item, end=' ')
#     if node.left != ".":
#         preorder(tree[node.left])
#     if node.right != ".":
#         preorder(tree[node.right])

#중위순회(좌측,루트,우측)
# def inorder(node):
#     if node.left != ".":
#         inorder(tree[node.left])
#     print(node.item, end=" ")
#     if node.right != ".":
#         inorder(tree[node.right])


# #후위순회(좌측,우측,루트)
def postorder(node):
    if node.left != ".":
        postorder(tree[node.left])
    if node.right != ".":
        postorder(tree[node.right])
    print(node.item, end = " ")

#전위 순회(중간,왼쪽,오른쪽)
tree ={
    'A' : Node('A','B','C'),
    'B' : Node('B','D','E'),
    'C' : Node('C','F','G'),
    'D' : Node('D','H','.'),
    'E' : Node('E','.','.'),
    'F' : Node('F','.','.'),
    'G' : Node('G','.','.'),
    'H' : Node('H','.','.'),
}



# preorder(tree['A'])
# print()
# inorder(tree['A'])
# print()
postorder(tree['A'])