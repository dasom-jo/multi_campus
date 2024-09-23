import re


# c_obj = re.compile('[a-z]+')
# str_list = c_obj.findall('Pyth0n')

str_list = re.findall('[a-z]+','Pyth0n')

print(type(str_list),str_list)

for str in str_list:
    print(str)
    
#<class 'list'> ['yth', 'n']
# yth
# n
#매치객체 리스트를 반환