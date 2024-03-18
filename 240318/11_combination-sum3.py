
import itertools
class Solution:
    def combinationsum(self, candidates: list[int],target:int)->list[list[int]]:
        result = []
        for i in range(target//2+1):
            for j in intertools.combinations_with_replacement(candidates,i):
                if sum(j) == target:
                    result.append(list(j))
        return result

s= Solution()
print(s.combinationSum([2,3,6,7],7))