from regex_check import match_check as mc

mc("[abc]", 'alphabet') # T
mc("[abc]", 'liberty')  # T
mc("[abc]", 'digit') # F

mc("[0-9]", '123') # T
mc("\d", "123") # T
mc("[^0-9]", '123') # F
mc("\D", "123") # T
mc("[0-9]", 'number') # F

mc("[a-z]", "Alphabet") # T
mc("[a-zA-Z]", "Alphabet")  # T
mc("[^a-zA-Z]", "Alphabet")  # F

mc("[a-zA-Z0-9]", "GilDong123") # T
mc("\w", "GilDong123")  # T
mc("[^a-zA-Z0-9]", "GilDong123") # F
mc("\W", "GilDong123")  # T

mc('\s', 'Hello World')  # T
mc('\s', 'HelloWorld')  # F

mc('[가-힣]', '홍길동') # T