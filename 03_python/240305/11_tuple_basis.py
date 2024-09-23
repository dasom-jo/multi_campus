'''tuple은 파이썬에서 사용되는 데이터 유형 중 하나로, 여러 항목을 묶어서 저장할 수 있는 불변(immutable)한 순차적 자료형입니다. 
즉, 한 번 생성된 튜플은 수정할 수 없습니다. 
튜플은 소괄호 ()를 사용하여 정의하며, 각 항목은 쉼표로 구분됩니다. 
예를 들어, (1, 2, 3)은 정수형을 포함하는 튜플입니다'''
empty_tuple = ()
print(empty_tuple)
print(type(empty_tuple)) #<class 'tuple'>

my_int = (1) #하나의 숫자
print(type(my_int)) #<class 'int'>
my_tuple = (1,) #여러항목을 묶어서
print(type(my_tuple)) #<class 'tuple'>

my_tuple1 = (1,2,3)
my_tuple2 = 1,2,3 
print(my_tuple1 == my_tuple2) #True

my_tuple3 = ('a','b',('c','d'))
print(my_tuple[0]) 
print(my_tuple[1:])

#my_tuple[1] = 'b' 에러남  튜풀은 불변성이라 변경불가
#del my_tuple3[1] 에러남  삭제불가

print(my_tuple3) #('a', 'b', ('c', 'd'))

my_tuple4 = (1,2,4,8)
odd, *even = my_tuple4 #*을 붙이니, 리스트가 되었다
print(odd, even) #odd 는 해당요소 를 뺸다 *는 리스트로 묶움
