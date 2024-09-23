import re

# c_obj = re.compile('[a-z]+') # 소문자 하나 이상
# match_iter = c_obj.finditer('Pyth0n')
match_iter = re.finditer('[a-z]+', 'Pyth0n')

print(type(match_iter), match_iter)

for match_obj in match_iter:
    print(match_obj.group())
    print(match_obj.span())
