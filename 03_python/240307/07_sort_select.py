def selection_sorted(list):
    for i in range(len(list) - 1):
        min = i
        for j in range(i + 1, len(list)):
            if list[min] > list[j]:
                min = j
        list[min], list[i] = list[i], list[min]
        # print(list)
    return list

num_list = [5, 4, 2, 6, 3, 1]
new_list = selection_sorted(num_list)
print(new_list)