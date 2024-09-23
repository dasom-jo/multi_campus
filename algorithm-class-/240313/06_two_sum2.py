
#문제 두수의 합
#키와 인덱스 값을 함꺼번에 가져올수있는 함수 enumerate
#더하는게 아니라 특정 숫자에서 9를빼고 부족한 값을 찾는법

#딕셔너리와 enumerater의 차이
#딕셔너리는 키값- 쌍의 집합으로 구성됩니다. 각 키는 유일해야하며,해당키에 대응하는 값이있습니다
#딕셔너리 키는 해시가능해야하고 불변자료형이며 순서를 보장하지않습니다
#enumerater
#반복가능한 객체를 입력으로받아 각 원소와 해당원소의 인덱스를 순회하는데사용
#인덱스는 해당원소의 위치를 나타내는값

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
