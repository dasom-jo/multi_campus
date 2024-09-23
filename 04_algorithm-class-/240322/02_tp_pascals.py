#1번 파스칼의삼각형-탑다운방식
class Solution:
        def generate(self, numRows: int) -> list[list[int]]:
            if numRows == 1:
                return [[1]]
            # 1 이 아닌 경우, 그전까지 삼각형 가져와야지
            triangle = self.generate(numRows-1) #[[-1]]
            prev_row = triangle[-1] #[1]
            new_row = [1]
            for i in range(1, numRows - 1):
                new_row.append(prev_row[i-1] + prev_row[i])
            new_row.append(1)
            triangle.append(new_row)
            return triangle

s = Solution()
print(s.generate(5))