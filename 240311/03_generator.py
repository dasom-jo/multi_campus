import sys
def get_natural_num():
    n=0
    while True:
        n += 1
        yield n
    
n_num = get_natural_num()

n_num_list = [n for n in range(1000000)]

print(n_num,type(n_num))
#<generator object get_natural_num at 0x01CDBAA8>
# <class 'generator'>

# #제너레이터해서 다음거 가져와
# for _ in range(10):
#     print(next(n_num))

print(n_num,type(n_num))
print(sys.getsizeof(n_num_list))