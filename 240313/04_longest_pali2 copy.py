#https://leetcode.com/problems/longest-palindromic-substring
class Solution:
    def longestPalindrome(self, s: str) -> str:
        # def oddCheck(i):
        #     left = i
        #     right = i+2
        #     while left >= 0 and right <= s_length-1 and s[left] == s[right]:
        #         left -= 1
        #         right += 1
        #     return s[left+1:right]

        # def evenCheck(i):
        #     left = i
        #     right = i+1
        #     while left >= 0 and right <= s_length-1 and s[left] == s[right]:
        #         left -= 1
        #         right += 1
        #     return s[left+1:right]

        # result = ""
        # s_length = len(s)
        # if len(s) < 2 or s == s[::-1]:
        #     return s
        # for i in range(s_length - 1):
        #     print(evenCheck(i))
        #     print(oddCheck(i))
        # return result
#일단 (최소한의 글자 )세글자(혹은 두글자)를 찾고 찾앗댜면 while문을 이용해 그를 중심으로 앞뒤를 찾고 아니면
# 다시 세자리부터 찾아감
#짝수그램 right = i + 1
#홀수그램 right = i + 2
sol = Solution()
s = "김김최최김"
sol.longestPalin drome(s)
