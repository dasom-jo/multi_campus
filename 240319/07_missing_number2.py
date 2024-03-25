#https://leetcode.com/problems/missing-number
#103ms

class Solution:
    def missingNumber(self, nums: list[int]) -> int:
        #인덱스를 이용해보자
        l = len(nums)
        #배열에 각요소는 초기에 false로 설정
        arr = [False]*(l + 1)
        #찾는 값을 제외한 index의 value는 True 가 될것!
        for i in nums:
            arr[i] = True
        #트루가 나오지않은 가장 작은 인덱스 반환
        return arr.index(False)

sol = Solution()
print(sol.missingNumber([3, 0, 1, 2, 4, 5, 9, 7, 6]))