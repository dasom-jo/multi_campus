import re
from collections import deque

class Solution:
    def isPalindrome(self, s: str) -> bool:
        #new_s = deque([char.lower() for char in s if char.isalnum()])
        # print(new_s)
        # new_s = re.findall('\w',s)
        # print(new_s)
        new_s = list(re.sub('[^a-zA-Z0-9]','',s.lower()))
        new_new_s = list(reversed(new_s))
        print(new_new_s)
        print(new_s)
        return new_new_s == new_s
        
s = Solution()
result = s.isPalindrome('A man, a plan, a canal: Panama')
print(result)