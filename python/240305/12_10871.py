# A = [1,10,4,9,2,3,8,5,7,6]

# x = int(input())
# num = A[0]
# for i in range(len(A)):
#     if x > A[i]:
#         print(A[i])
        
        
        
#쌤풀이
n, x = [int(x) for x in input().split()]
a = [int(x) for x in input().split()]

#a 배열 안에서 x보다 작은수를 출력

result = []
for num in a:
    if num < x:
        result.append(num)
print(*result)

result = [num for num in a if num < x]

for num in a:
    if num < x:
        print(num, end=' ')