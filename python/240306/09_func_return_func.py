#리턴시 함수호출 가능 대신 함수는 아래부분에 작성할것

def say_hi():
    nation = input('국적입력바람')
    if nation.lower() == 'korea' or nation == '한국':
    #lower 소문자로 변경
        return hello_korean()
    else:
        return hello_english()
    
def hello_korean():
    print('안뇽')
    
def hello_english():
    print('fuck')
    
say_hi()