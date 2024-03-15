#l = ["dig1 8 1 5 1", "let1 art can", "dig2 3 6",
    #"let2 own kit dig", "let3 art zero"]
#람다를 이용하여 숫자를 정렬하여라 숫자가 같으면 식별자순

class solution:
    def log(self,logs:list[str]) -> list[str]:
        letter_log = []
        number_log = []
        for i in logs:
            if i.split()[1].isalpha():
                letter_log.append(i)
            else:
                number_log.append(i)
        letter_log.sort(key = lambda x: (x.split()[1:],x.split()[0]))
        return letter_log + number_log

s = solution()
l = ["dig1 8 1 5 1", "let1 art can", "dig2 3 6",
        "let2 own kit dig", "let3 art zero"]
result = s.log(l)
print(result)