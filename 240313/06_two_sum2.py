
#문제 두수의 합
#키와 인덱스 값을 함꺼번에 가져올수있는 함수 enumerate
#더하는게 아니라 특정 숫자에서 9를빼고 부족한 값을 찾는법
from typing import List
class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        for i,v in enumerate(nums):
            gap = target - v
            new_nums = nums[i+1:]
            if gap in nums[i + 1:]:
                return [i,nums[i+1:].index(gap)+i+1]

s = Solution()
result = s.twoSum([2,7,6,10],9)
print(result)
