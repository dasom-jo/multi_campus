def find_num(list, value):
    """
        [선형탐색, 순차탐색]
        list 내에서 value 값에 해당하는 위치를 반환
        없으면 -1 반환
    """
    # 리스트 길이
    l = len(list)
    
    # 리스트의 모든 원소와 일일이 대조
    for i in range(l):
        if value == list[i]:
            # 일치하는 index를 발견하면 즉시 return
            return i
    return -1
my_arr = [3,4,5,1,89,4,8,9]

print(find_num(my_arr, 89))
print(my_arr.index(89))