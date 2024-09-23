def hello(name = '', count = 1):
    if name != '':
        name += '님 '
    for _ in range(count):
        print(f"{name}안녕하세요")
        

hello()
hello(count = 4)
hello('최인규')
hello("홍길동", 3)