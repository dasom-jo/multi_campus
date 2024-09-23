#선택정렬
def selection_sorted(list) :
    
    for i in range(len(list) - 1):
        #마지막 요소는 이미 이전 단계에서 최소값으로 선택되었기 때문에 
        #추가적인 비교 없이 외부 루프가 종료될 수 있습니다.
        min = i #선택된위치가 최초 최소값 지정 0번째자리
        for y in range(i + 1,len(list)):
            if list[min] > list[y]:
                min = y # 최솟값이라고 생각햇는 다른 최소값이 나타나가지고 자리뺏김
                print(f'이제 최소값은 {list[y]}이다')
            list[min], list[i] = list[i],list[min] #보이는 자리도 바꾸자 
        return list
    
num_list = [1,2,3,4,5,6,7]
new_list = selection_sorted(num_list)
print(new_list)
