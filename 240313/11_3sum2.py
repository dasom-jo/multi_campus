# https://leetcode.com/problems/trapping-rain-water

class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:
        result = []
        nums.sort()
        # print(nums)
        # [-4, -1, -1, 0, 1, 2]
        nums_length = len(nums)

        for i in range(nums_length-2):
            if i > 0 and nums[i] == nums[i-1]:
                continue
            for j in  range(i+1,nums_length-1):
                if j > i + 1 and nums[j] == nums[j-1]:
                    continue
                for k in  range(j+1,nums_length):
                    if k > j + 1 and nums[k] == nums[k-1]:
                        continue
                    #print(nums[i],nums[j],nums[k])

        return result


s = Solution()
result = s.threeSum([-1,0,1,2,-1,-4])
print(result)

