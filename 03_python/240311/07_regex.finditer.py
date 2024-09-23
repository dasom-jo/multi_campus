import re

# c_obj = re.compile('[a-z]+')
# match_iter = c_obj.finditer('Pyth0n')

match_iter = re.finditer('[a-z]+','Pyth0n')

print(type(match_iter),match_iter)

for str in match_iter:
    print(str)
    
# <class 'callable_iterator'> <callable_iterator object at 0x01813778>
# <re.Match object; span=(1, 4), match='yth'>
# <re.Match object; span=(5, 6), match='n'>
#각각의 매치 객체를 반환 