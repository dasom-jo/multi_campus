#문자열은 불변개체이다
word = 'apple'
word = 'orange'
print(id(word),id('apple'),id('orange'))
#30124256 30124352 30124256
print(word == 'orange')
print(word is 'apple')

#문자열 변경불가
#word[0] = '0'
#'str' object does not support item assignment