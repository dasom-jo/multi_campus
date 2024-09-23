#setset() 함수는 파이썬에서 사용되는 내장 함수 중 하나로, 
# 반복 가능한(iterable) 객체(리스트, 튜플 등)를 받아서 
# 중복된 요소를 제거하고 
# 유일한 값만을 포함하는 집합(set)을 생성합니다. 
# 집합은 중괄호 {}를 사용하여 정의하지만, 
# set() 함수를 사용하여 생성할 수도 있습니다.

empty_set = set()

my_set1 = set([1,2,3,4,5])
my_set2 = set([3,1,2,4,5])
print(my_set1,my_set2)
print(my_set1 == my_set2)

str_set = set('python is interesting')
print(str_set)
