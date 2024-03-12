import re
from collections import deque

class Solution:
    def isPalindrome(self, s: str) -> bool:
        new_s = deque([char.lower() for char in s if char.isalnum()])
        # print(new_s)
        # new_s = re.findall('\w',s)
        # print(new_s)
        #new_s = list(re.sub('\W','',s.lower()))
        
        while len(new_s) > 1:
            if new_s.popleft() != new_s.pop():
                return False
            return True

        
s = Solution()
result = s.isPalindrome('A man, a plan, a canal: Panama')
print(result)