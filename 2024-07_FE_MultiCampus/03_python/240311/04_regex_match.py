import re

# c_obj = re.compile('[a-z]+') # 소문자 하나 이상
# obj = c_obj.match('pyth0n')
obj = re.match('[a-z]+', 'Pyth0n') # match : 문자를 처음부터 검사

print(type(obj), obj)
print(obj.group())
print(obj.start())
print(obj.end())
print(obj.span())