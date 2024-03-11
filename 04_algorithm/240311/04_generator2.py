import sys

a = [n for n in range(1000000)] # 아미 생성되어 값이 담겨있다.
b = range(1000000) # 생성한다는 조건만 있다.

print(len(a) == len(b))

import sys
print(sys.getsizeof(a))
print(sys.getsizeof(b))