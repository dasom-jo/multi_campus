my_set1 = set([1, 2, 3, 4, 5, 6])
my_set2 = set([4, 5, 6, 7, 8, 9])


# my_set1.update(my_set2) # my_set1에 my_set2가 합쳐진다.

# my_set1과 my_set2를 합친다.
# result = my_set1 | my_set2
result = my_set1.union(my_set2)
print(result)

# my_set1이 my_set2와 공통된 부분으로 업데이트된다.
# my_set1.intersection_update(my_set2) 

# my_set1과 my_set2의 교집합 반환
# result = my_set1 & my_set2
result = my_set1.intersection(my_set2)
print(result)

# my_set1이 my_set2와 다른 부분으로 업데이트된다.
# my_set1.difference_update(my_set2)

# my_set1과 my_set2의 차집합 반환
# result = my_set1 - my_set2
result = my_set1.difference(my_set2)
print(result)

# my_set1에 my_set2의 대칭차를 업데이트한다.
# my_set1.symmetric_difference_update(my_set2)

# my_set1와 my_set2의 대칭차 반환
# result = my_set1 ^ my_set2
result = my_set1.symmetric_difference(my_set2)
print(result)

# add : 요소 추가
# remove, discard : 요소 삭제 *remove는 없는 요소인 경우 에러 발생!