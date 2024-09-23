def sayhello():
    print('안녕')

sh = sayhello
sh()

import sys
new_input = sys.stdin.readline
data=new_input().strip()
print(data)

print('<------------------------>')

def plus(a, b):
    return a + b

def minus(a, b) :
    return a - b

# calc_list = [plus, minus]
# print(calc_list[0](10,20))
# print(calc_list[1](10,20))
calc_dict = {'합' : plus, '차' : minus}
print(calc_dict['합'](20,30))
print(calc_dict['차'](20,30))