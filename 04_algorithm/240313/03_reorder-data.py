class Solution:
    def reorderLogFiles(self, logs: list[str]) -> list[str]:
        letter_log = []
        number_log = []
        for i in logs:
            if i.split()[1].isalpha():
                letter_log.append(i)
            else:
                number_log.append(i)
        letter_log.sort(key=lambda x: (x.split()[1:],  x.split()[0]))
        return letter_log + number_log

s = Solution()
l = ["dig1 8 1 5 1", "let1 art can", "dig2 3 6",
     "let2 own kit dig", "let3 art zero"]
result = s.reorderLogFiles(l)
print(result)
