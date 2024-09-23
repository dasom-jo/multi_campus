'''*args:위치 인자들을 받아들이는 매개변수입니다. 
이름이 args인 변수는 함수에 전달된 위치 인자들을 튜플(tuple)로 처리합니다.

**kwargs: 키워드 인자들을 받아들이는 매개변수입니다. 이름이 kwargs인 
변수는 함수에 전달된 키워드 인자들을 딕셔너리(dictionary)로 처리합니다

'''
#*튜플이라는 뜻 *args:
def hellos(*names): 
    for n in names:
        print(f'{n}님 안녕하세요')
    
hellos('조다솜','이대희')

#**kwargs: 딕셔너리
# def hello_player(**players):
#     for k, v in players.items(): #items은 키와 쌍값 다 가져옴
#         print(f'hello,{v}-{k}')
        
# hello_player(손흥민 = 'FW', 이강인 = 'MF', 황희찬 = 'MF')