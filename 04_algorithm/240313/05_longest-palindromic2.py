class Solution:
    def longestPalindrome(self, s: str) -> str:
        def evenCheck(idx):
            left = idx
            right = idx + 1
            while left >= 0 and right <= s_length-1 and s[left] == s[right]:
                left -= 1
                right += 1
            return s[left+1:right]
        def oddCheck(idx):
            left = idx
            right = idx + 2
            while left >= 0 and right <= s_length-1 and s[left] == s[right]:
                left -= 1
                right += 1
            return s[left+1:right]
        result = ""
        s_length = len(s)
        if len(s) < 2 or s == s[::-1]:
            return s
        for i in range(s_length - 1):
            # print(result, evenCheck(i), oddCheck(i))
            result = max(result, evenCheck(i), oddCheck(i), key=len)
        return result
            
                
sol = Solution()
s = "cbbd"
result = sol.longestPalindrome(s)
print(result)
