# OOP : Object Oriented Programming (객체지향 프로그래밍)
class Animal:
    # 클래스 변수
    age = 1
    # 클래스 함수
    def set_name(self, data):
        self.name = data
    # 생성자
    # 인스턴스 함수

pig = Animal()
pig.set_name('꿀꿀이') # Animal.set_name(pig, '꿀꿀이')
print(f"{pig.name}는 {pig.age}살입니다.")
print(type(pig))  # <class '__main__.Animal'>