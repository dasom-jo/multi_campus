def find_all_num(list, value):
    """
        [선형탐색, 순차탐색]
        list 내에서 value 값에 해당하는 모든 위치를 반환
        없으면 -1 반환
    """
    l = len(list)
    result = [idx for idx in range(l) if list[idx] == value]    
    # result = []
    # for idx in range(l):
    #     if list[idx] == value:
    #         result.append(idx)
    
    # 삼항연산자 :  [True 값] if [조건] else [False 값]
    return result if result else -1
    # if result:
    #     return result
    # return -1

my_arr = [7,1,9,3,3,5,5,3]
# my_arr = [int(i) for i in input().split()]
value = int(input())
print(find_all_num(my_arr, value))
