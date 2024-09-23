import re
from collections import deque

class Solution:
    def isPalindrome(self, s: str) -> bool:
        #new_s = [char.lower() for char in s if char.isalnum()]
        # new_s = [char.lower() for char in re.findall()]
        new_s = list(re.sub('[^a-zA-Z0-9]','',s.lower()))
        new_new_s = list(reversed(new_s))#뒤집기
        print(new_new_s)
        print(new_s)
        return new_new_s == new_s

s = Solution()
result = s.isPalindrome('A man, a plan, a canal: Panama')
print(result)