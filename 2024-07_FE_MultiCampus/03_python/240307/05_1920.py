def get_int_list():
    int(input())
    return [int(i) for i in input().split()]

A = get_int_list()
B = get_int_list()

# B의 크기 * A의 배열 크기 (n**2)
for i in B:  # for -  O(n)
    if i in A: # in의 복잡도 : O(n)
        print(1)
    else:
        print(0)