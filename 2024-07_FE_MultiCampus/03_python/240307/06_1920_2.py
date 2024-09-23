def get_int_list():
    int(input())
    return [int(i) for i in input().split()]

A = sorted(get_int_list())
B = get_int_list()

for e in B:
    result = 0
    start = 0
    end = len(A) - 1
    while start <= end:
        mid = (start + end) // 2
        if e > A[mid]:
            start = mid + 1
        elif e < A[mid]:
            end = mid - 1
        else:
            result = 1
            break
    print(result)