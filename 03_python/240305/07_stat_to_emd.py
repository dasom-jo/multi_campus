#pop요소
num_list = [int(num) for num in input().split() ]
result = [num_list.pop(0) + num_list.pop()]
print(result)

#배열
arr = input().split()
print(int(arr[0]) + int(arr[-1]))

#list이용
x_list = [int(i) for i in input().split()]
result = x + y
print(result)

# * 
x, *_, y = [int(i) for i in input().split()]
result = x + y
print(result)
