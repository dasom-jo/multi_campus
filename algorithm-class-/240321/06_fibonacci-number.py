#https://leetcode.com/problems/fibonacci-number/
#피보나치 수열
# 0 1 1 2 3 5.... 전 숫자와 전전 숫자의 합이 다음숫자에 나오는것
class Solution:
    def fib(self, n: int) -> int:
        # if  n == 0:
        #     return 0
        # if n == 1:
        #     return 1
        if n <= 1:
            return n
        else:
            return self.fib(n-1) + self.fib(n-2)


s = Solution()
result = s.fib(3)
print(result)