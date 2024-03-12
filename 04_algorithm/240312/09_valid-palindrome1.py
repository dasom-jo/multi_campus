import re

class Solution:
    def isPalindrome(self, s: str) -> bool:
        # new_s = [char.lower() for char in s if char.isalnum()]   
        # new_s = [char.lower() for char in re.findall('\w', s)]
        new_s = list(re.sub('[^a-zA-Z0-9]', '', s.lower()))
        print(new_s)
        while len(new_s) > 1:
            if new_s.pop(0) != new_s.pop() :
                return False
        return True
        
s = Solution()
result = s.isPalindrome("ab_a")
print(result)
