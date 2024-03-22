class Solution:
    def generate(self, numRows: int) -> list[list[int]]:
        table = [[1], [1, 1]]
        table += [[0] * (i+1) for i in range(2, numRows)]
        for i in range(2, numRows):
            table[i][0] = 1
            table[i][-1] = 1
            for j in range(1, i):
                table[i][j] = table[i-1][j-1] + table[i-1][j]
        return table

s = Solution()
print(s.generate(5))