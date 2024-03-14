#유효한 괄호

class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        mapping = {
            '(' : ")",
            '[' : "]",
            '{' : "}"
        } #키값만 i
        for i in s:
            #열린괄호 스택에보관
            if i in mapping:
                stack.append(i)
            #닫힌괄호 스택에서 최근껄 꺼내 지금 닫힌괄호랑 맞는지 확인
            elif not stack or mapping[stack.pop()!=i] :
                print('False')
        return bool(not stack)
        #t 소거를 완젹하게 해서 비어있는 스택
        #f 여는 괄호가 남아잇따 닫힌괄호가 빠져잇다
sol = Solution()
sol.isValid("(){}[]")
