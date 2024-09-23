# https://leetcode.com/problems/number-of-islands

class Solution:
    def numIslands(self, grid: list[list[str]]) -> int:

        def dfs(x,y):
            if x < 0 or x >= len(grid[0]):
                return
            if y < 0 or y >= len(grid):
                return
            if grid[y][x] != '1':
                return
            #내주변에있는 육지들을 찾아서 '*'로 바꾼다
            grid[y][x] = '*'
            #상하좌우탐색
            dfs(x+1,y)
            dfs(x-1,y)
            dfs(x,y+1)
            dfs(x,y-1)
        count = 0
        #반복문 돌리기!
        for y in range(len(grid)):
            for x in range(len(grid[y])):
                print(x,y, grid[y][x])
                if grid[y][x] == '1':
                    dfs(x,y)
                    #다 바꿧다면 육지갯수를 1증가
                    count +=1
                    #재귀로함 육지로바꾸는동안 멈처잇어야함
        return count


s = Solution()
grid =[
["1","1","1","1","0"],
["1","1","0","1","0"],
["1","1","0","0","1"],
["0","0","0","1","1"]
]
print(s.numIslands(grid))

















