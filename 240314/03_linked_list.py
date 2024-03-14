#선형자료구조 - 연결리스트
'''
LinkedList 데이터를 저장한느데 사용되는 선형자료구조로, 각데이터 요소가
노드로 이루어진다.
노드는 데이터필드와 다음 노드를 가리키는 링크필드로 구성된다
'''

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self, value):
        self.head = Node(value)

    def append(self, value):
        current = self.head
        while current.next is not None:
            current = current.next
        current.next = Node(value)

    def index(self, idx):
        current = self.head
        count = 0
        while count < idx:
            count += 1
            current = current.next
        return current

    def pop(self, idx):
        if idx == 0:
            del_data = self.head.data
            self.head = self.head.next
            return del_data
        node = self.index(idx - 1)
        del_data = node.next.data
        node.next = node.next.next
        return del_data

if__name__ ==="__main__":
    ll =  LinkedList('첫')
    ll.append('2')
    # print(ll.head.next)
    # print(ll.head.next.data)