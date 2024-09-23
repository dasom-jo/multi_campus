#슬라이딩 윈도우 알고리즘
#https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/
class Solution:
    def minimumRecolors(self, blocks: str, k: int) -> int:
        result = count = blocks[:k].count('w')
        for i in range(k, len(blocks)):
            count +=blocks[i] == 'w' #참거짓으로 1,0
            count -=blocks[i-k] == 'w'#좌우
            result =min(result, count)
        return result

s = Solution()
result = s.minimumRecolors("wbbwbbwbw",7)
print(result)

