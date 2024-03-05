# arr = input().split()
# print(int(arr[0]) + int(arr[-1]))

# x_list = [int(i) for i in input().split()]
# result = x_list[0] + x_list[-1]
# print(result)

# x_list = [int(i) for i in input().split()]
# result = x_list.pop(0) + x_list.pop()
# print(result)

x, *_, y = [int(i) for i in input().split()]
result = x + y
print(result)
