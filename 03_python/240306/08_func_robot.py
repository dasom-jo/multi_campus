#고차함수 : 다른 함수를 인자로 받거나 함수를 반환하는 함수
#robot이 고차 cal_func인자에 plus또는 minus와 같은 함수를 전달하여 실행
#def A(B)
#reult = B(1,2)
#def C(1,2)
#def D(1,2)

def robot(cal_func):
    print('삐리릭--삐빅! 로봇계산기입니다.')
    num1 = int(input('첫번째 숫자를 입력하세요!'))
    num2 = int(input('두번째 숫자를 입력하세요!'))
    print("치치직... 삐빅!! 삐빅!!")
    result = cal_func(num1, num2)
    print("...휴.. 삐빅! 계산 결과는...")
    print(f"{result}")

def plus(a, b):
    return a + b

def minus(a, b):
    return a - b

robot(plus)
robot(minus)