#제너레이터와 리스트의 메모리 사용량비교
#제네레이터는 다음값을 생성하기위해 필요한 최소한의 메모리만사용하고
#리스트는 모든값을 미리 생성하여 메모리에 저장하기에 제너레이터가 더 효율적

import sys
def get_natural_num():
    n=0
    while True:
        n += 1
        yield n
# yield는 파이썬에서 제너레이터(generator)를 만들 때 사용하는 키워드입니다. 
# 제너레이터는 이터레이터(iterator)를 생성해주는 함수로, 
# 함수가 호출될 때마다 일련의 값을 반환할 수 있습니다.
    
n_num = get_natural_num()

n_num_list = [n for n in range(1000000)]

print(n_num,type(n_num))
#<generator object get_natural_num at 0x01CDBAA8>
# <class 'generator'>

# #제너레이터에서 다음거 가져와
# for _ in range(10):
#     print(next(n_num))

#용량을 나타냄
print(sys.getsizeof(n_num)) #용량 96
print(sys.getsizeof(n_num_list)) #용량 4224364

