# OOP : Object Oriented Programming (객체지향 프로그래밍)
class Animal:
    # 생성자
    def __init__(self):
        print('생성을 시작합니다')
        self.name = 'unnamed'
        self.age = -1
    # 클래스 변수
    # 클래스 함수
    def info(self):
        print(f"{self.name}는 {self.age}살입니다.")
    # 인스턴스 함수

pig = Animal()
pig.name = '꿀꿀이'
pig.age = 5
pig.info()

panda = Animal()
panda.info()