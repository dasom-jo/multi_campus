#키가 없으면 키에러나는걸 타게하기위해

from collections import defaultdict

my_dict = defaultdict(int)

my_dict['first'] = 1
my_dict['second'] = 1
# my_dict['third'] += 1
print(my_dict['third'])
#키에러대신 0을 반환
#애너그램 풀어보셈