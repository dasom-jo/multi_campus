#oop: object oriented progranmming(객체지향프로그래밍)

# class Animal:
#     #생성자
#     def __init__(self, name= 'unnamed', age = '0'): #이함수바를 먼저 실행해줌 /기본값
#         self.name = name
#         self.age = age
#     #클래스변수
    
#     #클래스함수
#     def info(self):
#         print(f'name: {self.name},age:{self.age}')
    
#     #인스턴스함수
    
# class Human(Animal):
#     def __init__(self):
#         # def __init__(self, name:'아무개', age = 5, job='무직'):
#         #매개변수의 등장으로 내꺼부터 하고 그다음에 부모
#         self.job ='무직'
#         super().__init__(self)
#         #super의등장으로 부모꺼 다시 가져다 씀
#         # super().__init__('아무개',2)안에꺼 써짐
#     def speak(self,data):
#         print(f'{self.name} : {data}')
        
#     def info(self):
#         print(f'name: {self.name},age:{self.age}, job: {self.job}')
        
# # choi = Human()
# #choi = Human()
# choi = Human('조다솜',3)
# choi.info()
# print(choi.job)
# choi.speak('안녕하세요')

#2
class Animal:
    #생성자
    def __init__(self, name: str = 'unnamed',age:int='0'):
        self.name = name
        self.age = age 
    #클래스변수
    #클래스함수
    def info(self):
        print(f'name: {self.name},age : {self.age}')
    #인스턴스함수

class human(Animal):
    def __init__(self, name = '아무개', age=0,job="unemployed"):
        self.job = job
        super().__init__(name, age)
    
    def speak(self, data):
        print(f'{self.name}:{data}')
    
    def info(self):
        print(f"name: {self.name}, age: {self.age}, job:{self.job}")
        
        choi = huamn("jody",20,"stu")
        choi.info()
        print(choi.job)
        choi.speak('hi')
        
        babby = human()
        baby.info()