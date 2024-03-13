class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        nums_length = len(nums)
        for i in range(nums_length-1):
            for j in range(i + 1, nums_length):
                if nums[i] + nums[j] == target:
                    return [i, j]

s = Solution()
result = s.twoSum([2,7,6,10], 9)
print(result)