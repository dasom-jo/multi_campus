#투포인터 :선형자료구조에서 활용되는 전략
#왼쪽과 오른쪽 포인터를 활용
# 보편적으로 정렬이 된 상태에서 사용된다(반드시 그런건아님)

rom typing import List
class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        lt,rt = 0,len(nums) - 1 #구조분해 할당

s = Solution()
result = s.twoSum([2,7,6,10],9)
print(result)