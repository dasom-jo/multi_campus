# def hellos(*names): # names는 튜플
#     for n in names:
#         print(f'{n}님 안녕하세요')

# hellos('김철수', '홍길동')

def hello_player(**players):
    for k, v in players.items():
        print(f"Hello, {v}-{k}")
    
hello_player(손흥민 = 'FW', 이강인 = 'MF', 황희찬 = 'MF')