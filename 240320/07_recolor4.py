#슬라이딩 윈도우 알고리즘
#https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/
import sys

class Solution:
    def minimumRecolors(self, blocks: str, k: int) -> int:
        i = 0
        min_count = k
        while i <= len(blocks) - k:
            window = blocks[i:k+i]
            new_count = window.count('w')
            min_count = min(new_count,min_count)
            i += 1

        return min_count

s = Solution()
result = s.minimumRecolors("wbbwbbwbw",7)
print(result)

