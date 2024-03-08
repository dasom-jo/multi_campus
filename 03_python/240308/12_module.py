import math, random

print(math)  # <module 'math' (built-in)>
print(random)  # <module 'random' from 'C:\\~~~\\Python\\Python311\\Lib\\random.py'>

print('-------')

print(type(math))
print(type(random))

print(math.pi) # math 모듈에 있는 파이 변수
print(math.sqrt(16)) # match 모듈에 있는 제곱근 구하는 함수

area = 78.539_816_339_744_83 # 원의 넓이 (pi * r ** 2)
print(f'반지름은 {math.sqrt(area / math.pi)}')