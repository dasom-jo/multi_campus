def insertion_sorted(list) :
    length = len(list)
    for x in range(1, length):
        '''삽입 정렬(insertion sort) 알고리즘이 처음 요소를 정렬된 부분으로 간주하고 시작하기 때문입니다.'''
        key = list[x]
        y = x-1
        while y >= 0 and list[y] > key : #x의 이전위치부터 역순으로 탐색
            list[y + 1] = list[y]
            y -= 1 
            list[y + 1] = key
        return list
        
    num_list= [5,4,2,6,3,1]
    new_list = sorted(num_list)
    print(num_list)