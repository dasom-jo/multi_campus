#https://leetcode.com/problems/largest-number
#문자열 정렬
# strs = ['3',"30","34","5","9"]
# strs.sort(reverse = True)
# print(strs) #['9', '5', '34', '30', '3']

class Solution:
    def largestNumber(self, nums: list[int]) -> str:
        nums.sort(key = lambda x:x*9 ,reverse = True)
        #여기 나오는 9는 문제의 범위이다
        max_nums = ""
        for i in nums:
            max_nums += i
        return max_nums

s = Solution()
result = s.largestNumber(['3',"30","34","5","9"])
print(result)