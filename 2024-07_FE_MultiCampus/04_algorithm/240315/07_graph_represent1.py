graph = [
            [0,1,1,1,0,0,0],
            [0,0,0,0,1,0,0],
            [0,0,0,0,1,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,1,1],
            [0,0,0,0,0,0,0],
            [0,0,1,0,0,0,0],
    ]

import sys
node = int(sys.stdin.readline())
print(graph[node-1])
