#https://leetcode.com/problems/combination-sum
#중복가능
class Solution:
    def combinationSum(self, candidates: list[int], target: int) -> list[list[int]]:
        result = []
        stack = [(0,target,[])]


s = Solution()
print(s.combinationSum([2,3,6,7], 7))

#2,3,6,7  | target = 7
#1.[2]

#2.[3]

#3.[6]

#4.[7]