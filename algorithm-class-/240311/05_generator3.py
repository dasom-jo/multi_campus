def get_many_type_data():
    while True:
        yield 1
        yield '문자열'
        yield False
    
data = get_many_type_data()

for _ in range(10):
    print(next(data))
    #열번 반복인데 yield하나가 각 한번씩
    # 1
    # 문자열
    # False
    # 1
    # 문자열
    # False
    # 1
    # 문자열
    # False
    # 1