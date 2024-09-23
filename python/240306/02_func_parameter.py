#파라미터는 함수에 전달되는 값 name, count

def hello(name = '', count = 1):
    if name != '':
        name += '님 '
    for _ in range(count):
        print(f'{name}안녕하세요')
        
hello() #안녕하세요 카운터 기본 1번 이름제외 출력
hello(count = 4) # 안녕하세요*4
hello('조다솜') #조다솜님 안녕하세요 카운터 한번 이름출력
hello('조다솜',3) ##조다솜님 안녕하세요*3 카운터 세번 이름출력