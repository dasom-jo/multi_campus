#close를 자동으로 해주는 구문
#with open () as f :

with open('with.txt' , 'w' , encoding= 'utf-8') as f:
    f.write('현재블럭을 벗어나느 순간 자동으로 클로즈')