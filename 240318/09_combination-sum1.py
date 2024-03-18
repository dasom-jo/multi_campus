#https://leetcode.com/problems/combination-sum
#중복가능
class Solution:
    def combinationSum(self, candidates: list[int], target: int) -> list[list[int]]:
        result = []
        new_list = []
        def dfs(index, target):
            if target == 0:
                result.append(new_list[:])
                return
            elif target < 0:
                return
            for i in range(index, len(candidates)):
                new_list.append(candidates[i])
                new_target = target - candidates[i]
                dfs(i, new_target)
                new_list.pop()
        dfs(0, target)
        return result

s = Solution()
print(s.combinationSum([2,3,6,7], 7))

#2,3,6,7  | target = 7
#1.[2]

#2.[3]

#3.[6]

#4.[7]