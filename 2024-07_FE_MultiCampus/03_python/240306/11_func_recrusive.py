def recursion_sum(num):
    if num == 1:
        return 1
    result = recursion_sum(num-1)
    return num + result

print(recursion_sum(5))