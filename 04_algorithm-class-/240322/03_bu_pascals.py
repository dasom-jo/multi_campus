#파스칼 - 바텀업방식
class Solution:
    def generate(self, numRows: int) -> list[list[int]]:
        #table =[[1],[1,1]]
        #table += [[0] * (i+1) for i in range(2,numRows)]
        table = [[0] * (i + 1) for i in range(numRows)]
        #print(table)
        for i in range(len(table)):
            table[i][0] = 1
            table[i][-1] = 1
            #[[1], [1, 1], [1, 0, 1], [1, 0, 0, 1], [1, 0, 0, 0, 1]]
            #if  i >= 2:
        for i in range(2, numRows):
            #table[i-1] i 전줄
            for j in range(1, i):
                #print(j)
                table[i][j] = table[i-1][j-1] +table[i-1][j]
        return table


s = Solution()
print(s.generate(5))