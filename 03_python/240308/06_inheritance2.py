# OOP : Object Oriented Programming (객체지향 프로그래밍)
class Animal:
    # 생성자
    def __init__(self, name: str = 'unnamed', age:int='0'):
        self.name = name
        self.age = age
    # 클래스 변수
    # 클래스 함수
    def info(self):
        print(f"name : {self.name}, age : {self.age}")
    # 인스턴스 함수
class Human(Animal):
    def __init__(self, name='아무개', age=0, job='unemployed'):
        self.job = job
        super().__init__(name, age)
    def speak(self, data):
        print(f'{self.name} : {data}')
    def info(self):
        print(f"name : {self.name}, age : {self.age}, job : {self.job}")

choi = Human('최인규', 20, '학생')
choi.info()
print(choi.job)
choi.speak('안녕하세요')

baby = Human()
baby.info()