#순열 permutation
#https://leetcode.com/problems/combinations
import itertools
class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        result = []
        itertools.combinations(range(1,n+1),k)
            result.append(list(i))
        return result

s =Solution()
print(s.combine(4,2))
