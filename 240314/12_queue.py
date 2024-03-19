class Node:
    #노드클래스:데이터와 다음노드를 가리키는 포인터를 갖고잇는 단일연결리스트
    #__init__:노드를 초기화하는 메서드,매개변수로받은 데이터를 저장하고 다음노드를 none으로 초기화
    def __init__(self, data):
        self.data = data
        self.next = None

    #queue:데이터를 저장하고 관리하는 큐를 구현
class Queue:
    #__init__큐를초기화,매개변수로 받은 데이터로 노드를 생성하여 큐를 헤드에 할당하고
    #꼬리도 헤드로 초기화합니다
    def __init__(self, data):
        self.head = Node(data)
        self.tail = self.head

    #is_empty:큐가 비어있는지확인합니다
    #헤드가 none이면 비어있다고 판단합니다
    def is_empty(self):
        return self.head is None

    #enqueue:새로운데이터를 추가합니다. 새로운 노드를 생성하고 이전 꼬리노드의 다음 노드로
    #새로운 노드를 지정한후, 꼬리를 새로운 노드로 업데이트합니다
    def enqueue(self, data):
        new_node = Node(data)
        self.tail.next = new_node
        self.tail = new_node

    #dequeue:큐에서 데이터를 반환합니다
    #큐가비어있으면 none을 반환하도 그렇지않으면 헤드의 데이터를 반환하고 헤드를 다음노드로 이동시킵니다
    def dequeue(self):
        if self.is_empty():
            return None
        data = self.head.data
        self.head = self.head.next
        return data

    #peek : 큐의 첫번째데이터를 반환합니다.
    #큐가 비어있으면  none을 반환하고 그렇지않으면 헤드의 데이터를 반환합니다
    def peek(self):
        if self.is_empty():
            return None
        return self.head.data