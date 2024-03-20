#너비전 탐색 :최소최단기간
from collections import deque
import sys

N,M = [int(i) for i in sys.stdin.readline().split()]
maze = [[int(i) for i in sys.stdin.readline().rstrip()] for _ in range(N)]
#maze = []
print(maze)

direction = [(-1, 0),(1, 0),(0, -1),(0, 1)] #이동방향표시,튜플

queue = deque()
queue.append([0,0]) #시작위치
while queue:
    x, y = queue.popleft()
    for d in direction:
        #이동중
        new_x, new_y = x + d[0], y + d[1] #0은 x축 1 y축
        if 0 <= new_x < M and 0 <= new_y < N:
            #해당위치가 1이면 이동가능한공간
            if maze[new_y][new_x] == 1:
                #새로운 위치 업데이트
                maze[new_y][new_x] = maze[y][x] + 1
                #새로업데이트한 위치를 추가하여 거기부터 재탐색
                queue.append([new_x, new_y])

print(maze[N-1][M-1])