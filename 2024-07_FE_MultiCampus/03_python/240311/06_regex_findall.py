import re

# c_obj = re.compile('[a-z]+') # 소문자 하나 이상
# str_list = c_obj.findall('Pyth0n')
str_list = re.findall('[a-z]+', 'Pyth0n')

print(type(str_list), str_list)

for str in str_list:
    print(str)