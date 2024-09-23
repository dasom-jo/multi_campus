def insertion_sorted(list):
    count = 0
    for i in range(1, len(list)):
        key = list[i]
        temp = i - 1
        while temp >= 0 and list[temp] > key:
            count += 1
            list[temp + 1] = list[temp]
            temp -= 1
        list[temp + 1] = key
    print(count)
    return list

num_list = [1,2,3,4,5,6,7] # 0 1 3 6 10 15 21 28 ... n(n+1)/2 [ O(n ** 2) ]
new_list = insertion_sorted(num_list)
print(new_list)