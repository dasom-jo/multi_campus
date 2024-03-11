rainbow = ["빨","주",'노','초','파','님','보']

#리스트긴한데 인덱스와값으로 구분되있음 하나하나가 튜플로됨
enum_rainbow = enumerate(rainbow)
for a,b in enum_rainbow:
    print(a,b)