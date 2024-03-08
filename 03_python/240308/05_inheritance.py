# OOP : Object Oriented Programming (객체지향 프로그래밍)
class Animal:
    # 생성자
    def __init__(self, name='unnamed', age='0'):
        self.name = name
        self.age = age
    # 클래스 변수
    # 클래스 함수
    def info(self):
        print(f"name : {self.name}, age : {self.age}")
    # 인스턴스 함수

class Human(Animal):
    def speak(self, data):
        print(f'{self.name} : {data}')

choi = Human('최인규', 5)
choi.info()
choi.speak('안녕하세요')