#슬라이딩 윈도우 알고리즘
#https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/
from collections import deque
class Solution:
    def minimumRecolors(self, blocks: str, k: int) -> int:
        window = deque(blocks[:k])
        min_count = window.count('W')

        for i in range(k, len(blocks)):
            window.popleft()
            window.append(blocks[i])
            new_count = window.count('W')
            min_count = min(min_count, new_count)
        return min_count

s = Solution()
print(s.minimumRecolors("WBBWBBWBW", 7))

