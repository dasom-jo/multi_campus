class Solution:
    def generate(self, numRows: int) -> list[list[int]]:
        table = [[0] * (i + 1) for i in range(numRows)]
        for i in range(len(table)):
            table[i][0] = 1
            table[i][-1] = 1
        
        
        return table

s = Solution()
print(s.generate(5))