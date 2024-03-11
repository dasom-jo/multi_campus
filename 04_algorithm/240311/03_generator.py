import sys

def get_natural_num():
    n = 0
    while True:
        n += 1
        yield n
        
n_num = get_natural_num()

for _ in range(100):
    print(next(n_num))
