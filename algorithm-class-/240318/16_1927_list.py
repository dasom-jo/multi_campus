#비선형자료구조 - 힙
#힙은 부모가 항상 자식보다 작거나 같다

import sys
N = int(sys.stdin.readline())
array = []
for _ in range(N):
    X = int(sys.stdin.readline())
    if X == 0:
        if array:
            min_num = min(array)
            print(min_num)
            array.remove(min_num)
        else:
            print(0)
    else:
        array.append(X)