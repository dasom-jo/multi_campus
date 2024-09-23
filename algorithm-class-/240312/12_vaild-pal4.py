import re
from collections import deque
#'',join() ''안에있는걸 사이에넣어 문자열을 연결 지금은 공백이지만 다른걸 넣을수잇음

class Solution:
    def isPalindrome(self, s: str) -> bool:
        new_s = ':'.join([char.lower() for char in s if char.isalnum()])
        print(new_s)
        new_new_s = new_s[::-1]# 역순정렬
        # print(new_new_s)
        # print(new_s)
        return new_new_s == new_s

s = Solution()
result = s.isPalindrome('A man, a plan, a canal: Panama')
print(result)