#defaultdict:
# 존재하지 않는 키를 조회할 때 오류를 발생시키지 않고 기본값을 반환하는 딕셔너리입니다.

from collections import defaultdict

#my_dict의 모든값은 기본값이 0으로 설정된다
my_dict = defaultdict(int)

my_dict['first'] = 1
my_dict['second'] = 1
# my_dict['third'] += 1
print(my_dict['third'])
#키에러대신 0을 반환
#애너그램 풀어보셈