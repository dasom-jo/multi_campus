rainbow = ["빨","주",'노','초','파','님','보']

#리스트긴한데 인덱스와값으로 구분되있음 하나하나가 튜플로됨
enum_rainbow = enumerate(rainbow)
for a,b in enum_rainbow:
    print(a,b) #0 빨
    #print(type(enum_rainbow)) #<class 'enumerate'>
    print(f'인덱스: {a}, 값: {b}')
    #인덱스: 0, 값: 빨
    
'''enumerate() 함수는 순회가능한 객체를 입력받아서,각요소의 인덱스와 값을
포함하는 enumerate()객체를 반환합니다. 이때인덱스는 0부터 시작
일반적으로 enumerate()함수는 반복문과 함께 사용되어 순회하면서 인덱스와
값을 함께 활용할떄 유용합니다'''