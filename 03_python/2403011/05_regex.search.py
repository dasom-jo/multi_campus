import re
#1
c_obj = re.compile('[a-z]+')#소문자 하나이상
print(c_obj) #re.compile('[a-z]+')

#2
# obj = c_obj.match("python")
obj = c_obj.search("Pyth0n")
print(obj)
#<class 're.Match'> <re.Match object; span=(1, 4), match='yth'>
#소문자가 한개이상인 문자열
#yth
print(type(obj),obj)
print(obj.group())
print(obj.start())
print(obj.end())
print(obj.span())

#1+2
obj = re.search('[a-z]+','Pyth0n') #match문자를 처음부터 검사

#매치나 서치는 매치나 NONE을 반환
#매치는 그룹(문자열반환)/스팬(튜플반환:어디서부터 어디까지)/스타트/앤드/


