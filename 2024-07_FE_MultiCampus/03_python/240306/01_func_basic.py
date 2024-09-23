# 함수의 정의
def hello1():
    print('안녕하세요')

def hello2(name):
    print(f'{name}님 안녕하세요')

def hello3(name, count):
    for _ in range(count) :
        print(f'{name}님 안녕하세요')
        
hello1()
hello2('최인규')
hello3("홍길동", 3)