class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        for i, v in enumerate(nums):
            gap = target - v
            new_nums = nums[i+1:]
            if gap in new_nums:
                return [i, new_nums.index(gap)+i+1]

s = Solution()
result = s.twoSum([2,7,6,10], 9)
print(result)