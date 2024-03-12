#문자열은 불변개체이다
word = 'apple'
word = 'orange'
print(id(word),id('apple'),id('orange'))
#30124256 30124352 30124256 주소
print(word == 'orange')
#True == 값이 같은지
print(word is 'apple')
#False is  메모리상 정확히같은 객체인지

#문자열 변경불가
#word[0] = '0'
#'str' object does not support item assignment