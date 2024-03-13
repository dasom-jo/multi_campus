#https://leetcode.com/problems/reorder-data-in-log-files/description/
class Solution:
    def reorderLogFiles(self, logs: list[str]) -> list[str]:
        letter_log = []
        number_log = []
        #숫자정렬하라
        for i in logs:
            #먼저 나오는게 알파벳인지 물음
            if i.split()[1].isalpha():
                #문자로그
                letter_log.append(i)
            else:
                #숫자로그
                number_log.append(i)
        #1번쨰부터 사전식 정렬,같으면 0번쨰 식별자
        letter_log.sort(key=lambda x:(x.split()[1:],x.split()[0]))
        #print (letter_log)
        number_log.sort(key=lambda x:(x.split()[1:],x.split()[0]))
        #print(number_log)
        return letter_log+number_log

s = Solution()
l = logs = ["dig1 8 1 5 1",
            "let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
result = s.reorderLogFiles(l)
print(result)