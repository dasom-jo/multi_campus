#https://leetcode.com/problems/missing-number
#방법1
# class Solution:
#     def missingNumber(self, nums: list[int]) -> int:
#         nums = sorted(nums)
#         for i in range(len(nums)):
#             if i !=nums[i]:
#                 return i
#         return len(nums)

# s = Solution()
# result = s.missingNumber([9,7,6,4,2,3,5,0,1])
# print(result)

#방법2
class Solution:
    def missingNumber(self, nums: list[int]) -> int:

        #[0, 1, 2, 3, 4, 5, 6, 7, 9]


s = Solution()
result = s.missingNumber([9,7,6,4,2,3,5,0,1])
print(result)
#방법3
#방법4
#방법5
#방법6
#방법7
