#팰린드롬:앞으로읽나 뒤로읽나 같은것

#https://leetcode.com/problems/valid-palindrome/

import re

class Solution:
    def isPalindrome(self, s: str) -> bool:
    #매개변수인 s가 문자열자료형 -> 불리언/팰린드롬의 참 거짓 반환
        # new_s = [char.lower() for char in s if char.isalnum()]
        #isalnum()=문자열이 알파벳과숫자로만이루어지면 참, 공백및특수기호가있으면 거짓
        # new_s = [char.lower() for char in re.findall('\w',s)
        #re.findall('\w',s) : s 내에서 알파벳과 숫자만 추출
        new_s = list(re.sub('\W','',s.lower()))
        '''
        파이썬의 문자열(str,tuple,byths)은 불변자료형이기때문에 문자열의 특정위치의 문자를 직접
        수정하거나 삭제할수없다, 하지만 리스트는 가변 자료형이므로 인덱스를 사용하거나
        수정삭제 가능
        '''

        while len(new_s) > 1:
            if new_s.pop(0) != new_s.pop():
                '''처음 요소를 꺼내어 비교하고 비교가끝나면 삭제하기 때문에
                    while문으로 다시 돌아가면 해당요소가 삭제된 새로운 new_s가 등장한다 '''
                return False
            '''한글자라도 틀리면 팰린드롬이 완성이 안되기떄문에'''
            return True


s = Solution()
result = s.isPalindrome('A man, a plan, a canal: Panama')
print(result)