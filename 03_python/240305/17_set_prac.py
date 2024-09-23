#업데이트(Update):
#set.update() 메서드는 집합(set)에 다른 집합이나 반복 가능한
# (iterable) 객체의 모든 요소를 추가합니다.
#집합에 중복된 요소는 추가되지 않고, 유일한 값만 추가됩니다.
#이 메서드는 집합을 직접 변경합니다 (in-place).

'''
반환(Return):
set() 함수는 새로운 집합(set)을 반환합니다.
이 때 반환된 집합은 인자로 전달된 반복 가능한(iterable) 
객체의 중복된 요소가 제거된 유일한 값으로 구성됩니다.'''

my_set1 = set([1,2,3,4,5,6])
my_set2 = set([4,5,6,7,8,9])

#중복제외 합침-1
#{1, 2, 3, 4, 5, 6, 7, 8, 9}
#my_set1.update(my_set2)
#print(my_set1)

#합침-2
#result = my_set1 | my_set2
#{1, 2, 3, 4, 5, 6, 7, 8, 9}
#result = my_set1.union(my_set2)
#{1, 2, 3, 4, 5, 6, 7, 8, 9}
#print(result)

#공통된 부분만 업데이트
#교집합에 속하지않은 요소는 제거
#my_set1.intersection_update(my_set2)
#print(my_set1) #{4, 5, 6}

#my_set1과 my_set2 의 교집합 반환
#result = my_set1 & my_set2 #{4, 5, 6}
#result= my_set1.intersection(my_set2){4, 5, 6} 
#함수는 직접 변경되지않고 교집합의 결과를 새로운 집합으로 반환
#print(result)

'''my_set1이 my_set2와 다른부분으로 업데이트된다'''
#my_set1.difference_update(my_set2)
#print(my_set1) #{1, 2, 3}

'''my_set1과 my_set2의 차집합 반환'''
#result = my_set1 - my_set2  {1, 2, 3}
#result = my_set1.difference(my_set2)
#print(result)#{1, 2, 3}

'''my_set1에 my_set2의 대칭차를 업데이트한다'''
#my_set1.symmetric_difference_update(my_set2)

'''my_set1 와 my_set2의 대칭차를 업데이트한다
중복된 요소를 제외하고 '''
#result = my_set1 ^ my_set2 {1, 2, 3, 4, 5, 6, 7, 8, 9}
result = my_set1.symmetric_difference(my_set2) #{1, 2, 3, 4, 5, 6, 7, 8, 9}
print(result) #{1, 2, 3, 7, 8, 9}

#add : 요소추가
#remove, discard :요소 삭제 *remove는 없는 요소인 경우 에러 발생
