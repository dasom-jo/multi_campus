class Solution:
    def threesum(self,nums:list[int]) -> list[list[int]]:
        result = []
        nums.sort()
        nums_length = len(nums)
        for i in range(nums_length - 2):
            if i > 0 and nums[i] == nums[i-1]: #중복제거
                continue
            for j in range(i + 1, nums_length - 1):
                if j > i + 1 and nums[j]== nums[j-1]:
                    continue
                for k in range(j + 1,nums_length):
                    if k > j + 1 and nums[k] == nums[k-1]:
                        continue
                    if nums[i] + nums[j] + nums[k] == 0:
                        result.append([nums[i],nums[j],nums[k]])
        return result

s = Solution()
result = s.threesum([-1,0,1,2,-1,-4])
print(result)

