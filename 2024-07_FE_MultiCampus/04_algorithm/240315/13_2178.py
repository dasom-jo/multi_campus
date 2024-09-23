from collections import deque
import sys

N, M = [int(i) for i in sys.stdin.readline().split()]
maze = [[int(i) for i in sys.stdin.readline().rstrip()] for _ in range(N)]
# maze = []
print(maze)
# for _ in range(N):
#     maze.append([i for i in sys.stdin.readline().rstrip()])

direction = [(-1, 0), (1, 0), (0, -1), (0, 1)]  # 상하좌우

queue = deque()
queue.append([0, 0]) # 시작위치
while queue:
    x, y = queue.popleft()
    for d in direction:
        new_x, new_y = x + d[0], y + d[1]
        if 0 <= new_x < M and 0 <= new_y < N:
            if maze[new_y][new_x] == 1:
                maze[new_y][new_x] = maze[y][x] + 1
                queue.append([new_x, new_y])

print(maze[N-1][M-1])
