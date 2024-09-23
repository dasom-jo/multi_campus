

def find_all_num(list, value):
    """
        (선형탐색 혹은 순차 탐색)
        list 내에서 value값에 해당하는 모든 위치를 반환
        없으면 -1반환
    """
    for i in range(len(list)):
        if value == list[i]:
            return i
        return -1
    
my_arr = [int(i) for i in input().split()]
value = int(input())

print(find_all_num(my_arr, value))