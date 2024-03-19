#2346
import sys,collections

nums = int(sys.stdin.readline())
letter = [int(i) for i in sys.stdin.readline().split()]
balloon = collections.deque(enumerate(letter))
print(balloon) #deque([(0, 3), (1, 2), (2, 1), (3, -3), (4, -1)])
queue = []

while balloon:
    move_list = balloon.popleft()
    #print(f'터진풍선정보 : {move_list}')
    queue.append(move_list[0]+1)
    #1을더한이유는 인덱스는0부터 시작인데 풍선은 1부터 시작이라
    #print(f"남은 풍선정보 순서변경전:{balloon}")
    move = move_list[1]
    if move > 0:
        balloon.rotate(-1*(move-1))
    else:
        balloon.rotate(-1*(move))
        #print(f"남은 풍선정보 순서변경후:{balloon}")
print(*queue)

#반복문 만들기전에 하나하나 다 돌려보기
