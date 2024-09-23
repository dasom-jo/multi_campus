import sys
#제너레이터...
a = [n for n in range(1000000)]#이미 생성되어 값이 담겨잇다
b = range(1000000)#생성한다는 조건만 잇다

#print(len(a) == len(b))

import sys 
#용량의 차이 뭔가 잘못적음
print(sys.getsizeof(a))
print(sys.getsizeof(b))