#숫자를 한글로바꾸기
#힌트:


class Solution:
    def num_to_word(self, n:int) -> str:
        nums_dict = {
        #100_000_000 : '억', 10_000 : '만', 1_000: '천',
        100 : '백',10 : '십',9: '구', 8: '팔', 7: '칠', 6: '육', 5: '오', 4: '사', 3: '삼', 2: '이', 1: '일'
        }
        result = ""
        for key, kor in nums_dict.items(): #여기 목이 9면 십 지나고 9에서 또비교들어감 계속 반복돌아감
            print(key,kor,n)
            #만약 입력한 n이 크거나
            if n >= key:
                #몫
                m = n // key
                #n을 나머지값으러 변경
                n = n % key
                if n == 0:
                    result += kor
                    break
                #몫이 1보다 크면 (일억->억 )
                if m > 1:
                    result += self.num_to_word(m) + kor #여기kor은 위에 kor 만약 9에서 햇다면 '구'임
                    #재귀함수이고 만약 25해서 5나머지면 재귀돌아서 elif로들어감
                else:
                    result += kor
        return result

s = Solution()
print(s.num_to_word(99))