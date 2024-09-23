#퀵정렬 - /left 피벗보다 클떄까지 이동(현상태가 작아야이동)
#right 피벗보다 작을때까지 이동 (현상태가 커야 이동)
#기본 :왼 , 피벗, 오

array = [76,10,12,25,13,55,25,35,99,8]

def quick_sorted(list,start,end):
    if start >= end:
        return list
    left = start + 1
    right = end
    while left <= right:
        while left <= end and list[left] <= list[start]:
            left +=1
        while right > start and list[right] >= list[start]:
            right -=1
        if left > right:
            list[right],list[start] = list[start],list[right]
        else:
            list[right],list[left] = list[left],list[right]
    print(list)
    quick_sorted(list, start, right-1)
    quick_sorted(list, right+1,end)

print(quick_sorted(array,0,len(array)-1))
