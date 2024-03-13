
#문제 두수의 합
#키와 인덱스 값을 함꺼번에 가져올수있는 함수 enumerate
#딕셔너리 사용
from typing import List
class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        nums_dict = {}
        for i,v in enumerate(nums):
            nums_dict[v] = i
        #print(nums_dict)
        for i,v in enumerate(nums):
            gap = target - v
            if gap in nums_dict and i != nums_dict[gap]:
                return [i,nums_dict[gap]]

s = Solution()
result = s.twoSum([2,7,6,10],9)
print(result)
