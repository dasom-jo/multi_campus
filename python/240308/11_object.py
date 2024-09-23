#속성들을 확인 dir
class Animal:
    name = '동물'
    age = '1'

print(dir(object)) #객체가 가진 모든 속성 출력
print(dir(Animal))#애니멀이 가진 모든 속성 출력

print(set(dir(Animal))- set(dir(object))) #차집합\
print(set(dir(Animal)) & set(dir(object)) == set(dir(object)) )
