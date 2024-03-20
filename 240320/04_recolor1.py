#슬라이딩 윈도우 알고리즘
#https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/
import sys

class Solution:
    def minimumRecolors(self, blocks: str, k: int) -> int:
        min_count = k
        for i in range(len(blocks)-k+1):
            new_count = blocks[i:i+k].count('w')
            print(new_count)
            min_count = min(min_count,new_count)
        return min_count

s = Solution()
result = s.minimumRecolors("wbbwbbwbw",7)
print(result)

