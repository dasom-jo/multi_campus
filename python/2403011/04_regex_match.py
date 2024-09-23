import re
#1
c_obj = re.compile('[a-z]+')#소문자 하나이상
print(c_obj) #re.compile('[a-z]+')

#2
# obj = c_obj.match("python")
obj = c_obj.match("pyth0n")
print(obj)
#<re.Match object; span=(0, 6), match='python'>
print(type(obj),obj)
print(obj.group())
print(obj.start())
print(obj.end())
print(obj.span())

#1+2
obj = re.match('[a-z]+','pyth0n') #match문자를 처음부터 검사


