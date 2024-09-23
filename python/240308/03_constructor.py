#oop: object oriented progranmming(객체지향프로그래밍)

class Animal:
    #생성자
    def __init__(self): #이함수바를 먼저 실행해줌
        self.name = 'unnamed'
        self.age = -1
    #클래스변수
    
    #클래스함수
    def info(self):
        print(f'{self.name}는{self.age}살입니다')
    
    #인스턴스함수
    pass

pig = Animal()
# pig.name = '꿀꿀이'
# pig.age = 5
pig.info()
print(pig.name, pig.age) 