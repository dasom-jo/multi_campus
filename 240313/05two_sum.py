#선형자료구조 - 배열
#배열은 값등을 순서대로 집합,하나의 인덱스로 구별가능
'''
메모리 공간연속
더블링 = 용량과 크기가 꽉차면 자동으로 늘려줌

'''

#문제 두수의 합
from typing import List
class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        nums_length = len(nums)
        for i in range(nums_length-1):
            for j in range(i+1,nums_length):
                if nums[i]+nums[j]== target:
                    return [i,j]


s = Solution()
result = s.twoSum([2,7,6,10],9)
print(result)
