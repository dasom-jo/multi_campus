def selection_sorted(list):
    count = 0
    for i in range(len(list) - 1):
        min = i
        for j in range(i + 1, len(list)):            
            count += 1
            if list[min] > list[j]:
                min = j
        list[min], list[i] = list[i], list[min]
        # print(list)
    print(count)
    return list

num_list = [1,2,3,4,5,6,7]
new_list = selection_sorted(num_list)
print(new_list)