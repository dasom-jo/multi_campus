import math, random
print(math)
#<module 'math' (built-in)>
print(random)
#C:\\Users\\jody0\\AppData\\Local\\Programs\\Python\\Python312-32\\Lib\\random.py'>  

print("--------------------")

print(type(math))

print(dir(math))

#math모듈의 파이변수
print(math.pi)
#math모듈에있는 제곱근 구하는 함수
print(math.sqrt(9))

area = 78.539_816_339_744_83 #원의 넓이 (pi * r **2) _ 무시 숫자에 써도됨
print(f'반지름은 {math.sqrt(area / math.pi)}')