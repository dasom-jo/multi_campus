# https://leetcode.com/problems/number-of-islands

class Solution:
    def numIslands(self, grid: list[list[str]]) -> int:
        def dfs(x,y):
            stack = [(x,y)]
            while stack:
                x,y = stack.pop()
                direction = [(),(),(),()]


s = Solution()
grid =[
["1","1","1","1","0"],
["1","1","0","1","0"],
["1","1","0","0","1"],
["0","0","0","1","1"]
]
print(s.numIslands(grid))

















