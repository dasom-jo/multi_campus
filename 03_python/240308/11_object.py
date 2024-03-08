class Animal:
    name = '동물'
    age = 0

print(dir(object)) # object가 가진 모든 속성 출력
print(dir(Animal)) # Animal이 가진 모든 속성 출력

print(set(dir(Animal)) - set(dir(object))) # Animal에서 object가 가진 차집합 출력

print((set(dir(Animal)) & set(dir(object))) == set(dir(object)))
