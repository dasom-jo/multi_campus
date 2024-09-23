#https://leetcode.com/problems/longest-palindromic-substring
class Solution:
    def longesetpalindrome(self,s:str) -> str:
        result = ''
        s_length = len(s)
        if len(s) < 2 or s == s[::-1]:
            #뒤집엇을떄 같거나 문자열이 하나밖에없으면 자동 팰린드롬
            return s
        for i in range(s_length):
            for j in range(i,s_length):
                #i를 범위내에서 각 인덱스 생성j
                #print(i,j)
                # 0 0
                # 0 1
                # 0 2
                # 0 3
                # 0 4
                # 1 1
                # 1 2
                # 1 3
                # 1 4
                # 2 2
                # 2 3
                # 2 4
                # 3 3
                # 3 4
                # 4 4
                if j + 1 - i >= len(result):
                    temp =s[i:j+1]
                    if len(temp) > len(result) and temp == temp[::-1]:
                        #len(temp) > len(result) 문제에 가장 긴 회문을요구
                        result = temp
        return result

sol = Solution()
s = "안녕우영우"
result = sol.longesetpalindrome(s)
print(result)