class Solution: #[012345]
    def longestPalindrome(self,s:str)->str:
        def evenCheck(idx): #짝수길이
            left = idx #idx는 회전문의 중간위치부터
            right = idx + 1
            while left >= 0 and right <= s_length -1 and s[left] == s[right]:
                left -= 1
                right +=1
            return s[left+1:right]
        def oddCheck(idx):
            left = idx
            right = idx + 2
            while left >= 0 and right <= s_length-1 and s[left] ==s[right]:
                left -=1
                right +=1
            return s[left+1:right]

        result = ""
        s_length = len(s)
        if len(s) < 2 or s ==s[::-1]:
            return s
        for i in range(s_length - 1):
            result = max(result,evenCheck(i),oddCheck(i), key = len)
        return result

#일단 (최소한의 글자 )세글자(혹은 두글자)를 찾고 찾앗댜면 while문을 이용해 그를 중심으로 앞뒤를 찾고 아니면
# 다시 세자리부터 찾아감
#짝수그램 right = i + 1
#홀수그램 right = i + 2

sol = Solution()
s = "김김최최최이"
result = sol.longestPalindrome(s)
print(result)