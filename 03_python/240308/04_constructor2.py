#oop: object oriented progranmming(객체지향프로그래밍)

class Animal:
    #생성자
    def __init__(self, name= 'unnamed', age = '0'): #이함수바를 먼저 실행해줌 /기본값
        self.name = name
        self.age = age
    #클래스변수
    
    #클래스함수
    def info(self):
        print(f'{self.name}는{self.age}살입니다')
    
    #인스턴스함수
    pass

pig = Animal("꿀꿀이",5)
# pig.name = '꿀꿀이'
# pig.age = 5
pig.info()

panda = Animal("푸바오",10)
panda.info()

mokey = Animal()
mokey.info()