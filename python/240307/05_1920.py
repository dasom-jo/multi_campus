N=input("숫자를 하나 입력해주세요").split()

A = [int(i) for i in input(f'({N}개의 숫자를 입력해주세요)').split()]

M = input("숫자를 하나 입력해주세요").split()

M1=[int(i) for i in input(f'({M}개의 숫자를 입력해주세요)').split()]

#print(M1)

#B의 크기 * A의 배열크기 O(n**2)

for i in M1: #for  O(n)
    if i in A: #in의 복잡도 : O(n)
        print(1)
    else:
        print(0) 
        #M1입장출력
        

#함수로 바꾸기
def get_int_list():
    int(input())
    return[int(i) for i in input().split()]

A = get_int_list()
B = get_int_list()

# B의 크기 * A의 배열 크기 (n**2)
for i in B:
    if i in A:
        print(1)
    else:
        print(0)
        
#2
def get_lnt_list():
    int(input())
    return [int(i) for i input().split()]

A = sorted(get_int_list())
B = get_int_list()

for e in B:
    result = 0
    start = 0
    end = len(A) - 1
    while start <= end:
        mid = (start + end)//2
        if e > A[mid]:
            start = mid + 1
        elif e < A[mid]:
            end = mid - 1
        else:
            result = 1
            break
    print(result)