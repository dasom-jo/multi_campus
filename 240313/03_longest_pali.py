#https://leetcode.com/problems/longest-palindromic-substring
class Solution:
    def longestPalindrome(self, s: str) -> str:
        s_length = len(s)
        result = ''
        for i in range(s_length):
            for j in range(i,s_length):
                #print(s[i:j+1])
                temp = s[i:j+1]
                if len(temp)> len(result) and temp == temp[::-1]:
                    result =temp
                    print(result)
        return result
#글자가 하나있으면 플랜드롬
sol = Solution()
s = "안녕 우영우"
sol.longestPalindrome(s)
