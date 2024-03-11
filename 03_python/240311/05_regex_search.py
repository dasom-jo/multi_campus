import re

# c_obj = re.compile('[a-z]+') # 소문자 하나 이상
# obj = c_obj.search('Pyth0n')
obj = re.search('[a-z]+', 'Pyth0n')

print(type(obj), obj)
print(obj.group())
print(obj.start())
print(obj.end())
print(obj.span())