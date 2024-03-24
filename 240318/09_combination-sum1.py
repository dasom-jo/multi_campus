#https://leetcode.com/problems/combination-sum
#중복가능
class Solution:
    def combinationSum(self, candidates: list[int], target:int) -> list[list[int]]:
        result = []
        new_list = []
        def dfs(index,target):
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
        dfs(0,target)
        return result
    
s = Solution()
print(s.combinationSum([2,3,6,7], 7))

#2,3,6,7  | target = 7
#2,3,6,7반복
#1.[2]
#   target =target - 2 (5)
#   2,3,6,7 반복
#       1.[2]
#           target = target - 2(3)
#           2, 3, 6, 7반복
#          1.[2]
#              target = target - 2(1)
#               2, 3, 6, 7 반복
#               1. [2]
#                   target = target - 2 (-1) !이건안되네
#               2. [3]
#                   target = target - 2 (-2) !이건안되네
#               2. [7]
#                   target = target - 2 (-5) !이건안되네
#               2. []
#                   target = target - 2 (-6) !이건안되네
#               2.[3]
#                   target = target - 3 (0) [반환]
#           1. [2]
#               target = target - 2 (-2) !!!!!! 이건 안되네?
#           2. [3]
#               target = target - 3 (-3) !!!!!! 이건 안되네?
#           3. [6]
#               target = target - 6 (-6) !!!!!! 이건 안되네?
#           4. [7]
#               target = target - 7 (-7) !!!!!! 이건 안되네?
#       3. [6]
#       4. [7]
#   2. [3]
#   3. [6]
#   4. [7]

# 2. [3]
#
# 3. [6]
#
# 4. [7]