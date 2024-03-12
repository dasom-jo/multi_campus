# my_dict = {
#     'uid1234': 'Prodo',
#     'uid4567': 'Ryan'
# }
# print(my_dict['uid8901']) # 없는 경우에, keyError

from collections import defaultdict

my_dict = defaultdict(int)

my_dict['first'] = 1
my_dict['second'] = 2
my_dict['third'] += 1

print(my_dict)
