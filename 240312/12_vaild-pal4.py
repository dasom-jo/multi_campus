import re
from collections import deque

class Solution:
    def isPalindrome(self, s: str) -> bool:
        #new_s = deque([char.lower() for char in s if char.isalnum()])
        # print(new_s)
        # new_s = re.findall('\w',s)
        # print(new_s)
        new_s = list(re.sub('\W','',s.lower()))
        new_new_s = new_s[::-1]# 역순정렬
        print(new_new_s)
        print(new_s)
        return new_new_s == new_s
        
s = Solution()
result = s.isPalindrome('A man, a plan, a canal: Panama')
print(result)