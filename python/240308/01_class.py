#oop: object oriented progranmming(객체지향프로그래밍)
'''클래스(Class): 클래스는 객체를 만들기 위한 틀 또는 설계도입니다.
클래스는 객체의 속성(변수)과 동작(메서드)을 정의합니다. 
예를 들어, 자동차 클래스는 자동차의 속성(색상, 모델 등)과 동작(주행, 정지 등)을 정의합니다.'''
class Animal:
    #클래스변수
    age = 1
    #클래스함수
    def set_name(self, data):
        self.name = data
    #생성자
    #인스턴스함수
    pass

pig = Animal()
#pig.set_name('꿀꿀이')
Animal.set_name(pig, '꿀꿀이')
print(f'{pig.name}는{pig.age}살입니다')
print(type(pig)) #<class '__main__.Animal'>


