import re
from collections import deque
#큐(queue)와 스택(stack)의 기능을 모두 갖춘 자료구조로,
# 양쪽 끝에서의 데이터 추가 및 삭제가 빠르게 이루어집니다.

class Solution:
    def isPalindrome(self, s: str) -> bool:
        new_s = deque(re.sub('[a-zA-Z0-9]','',s.lower()))
        #deque = 사용 선언
        while len(new_s) > 1:
            if new_s.popleft() != new_s.pop():
                #popleft deque 매서드
                return False
            return True


s = Solution()
result = s.isPalindrome('A man, a plan, a canal: Panama')
print(result)