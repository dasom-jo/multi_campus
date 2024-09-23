
import itertools
class Solution:
    def combinationSum(self, candidates: list[int],target:int)->list[list[int]]:
        result = []
        def dfs(index, target, list):
            if target ==0:
                result.append(list)
                return
            elif target < 0:
                return
            for i in range(index, len(candidates)):
                dfs(i, target - candidates[i], list + [candidates[i]])
        dfs(0,target,[])
        return result
s= Solution()
print(s.combinationSum([2,3,6,7],7))