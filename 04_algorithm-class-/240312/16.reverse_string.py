class Solution:
    def reverseString(self, s: list[str]) -> None:
        #N = sys.stdin.readline().rstrip() 
        # 같은의미= 입력을 받을 필요가없다
        s[:] = s[::-1] #얕은 복사
        
sol = Solution() #위에 클래스 생성
list_s = ["h","e","l","l","o"] #이런데서 입력
sol.reverseString(list_s)
print(list_s)
