#리스트가 정렬이되야한다 중복이나 아무순서로 되있으면 오류가 생김 

def num (list, value):
    """
    [이진탐색, 이분탐색]
    list 내에서 value 값에 해당하는 위치를 반환
    없으면 -1 반환
    """
    #변수를 생성
    start = 0
    end = len(list) -1 
    # 가운데 위치 가져와서 비교 
    while start <= end:
        global count
        count = count +1
        mid = (start + end)//2
        if list[mid] == value:
            return mid
        elif list[mid] > value:
            end = mid - 1
        else : # elif list[mid] < value:
            start = mid + 1
        return -1
my_list = [1,2,3,4,5,6,7,8,9]
my_value = 5
count = 0
print(find_num(my_list,my_value))
print(f"참으려고 노력한횟수 : {count}")

