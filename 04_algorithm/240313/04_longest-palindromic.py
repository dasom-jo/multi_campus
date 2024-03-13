class Solution:
    def longestPalindrome(self, s: str) -> str:
        result = ""
        s_length = len(s)
        if len(s) < 2 or s == s[::-1]:
            return s
        for i in range(s_length):
            for j in range(i, s_length):
                if j + 1 - i >= len(result) :
                    temp = s[i:j+1]
                    if len(temp) > len(result) and temp == temp[::-1]:
                        result = temp
        return result

sol = Solution()
s = "안녕우영우"
sol.longestPalindrome(s)
