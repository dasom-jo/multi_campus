class Solution:
    def reverseString(self, s: list[str]) -> None:
        #투포인터를 이용한스왑
        left = 0
        right = len(s)-1
        
        while left < right :
                s[left],s[right]=s[right],s[left]
                left +=1
                right -=1
                print(left,right)
        
sol = Solution() #위에 클래스 생성
list_s = ["h","e","l","l","o"] #이런데서 입력
sol.reverseString(list_s)
print(list_s)
