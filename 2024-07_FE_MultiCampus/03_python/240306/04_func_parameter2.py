def hello_names(count = 1, *names):
    for name in names:
        print("Hello" * count, name)

# hello_names('손흥민', '이강인', '황희찬', 2) # 손흥민을 count로 인식 ERROR
hello_names(2, '손흥민', '이강인', '황희찬') # 정상
# hello_names(count = 2, '손흥민', '이강인', '황희찬') # 문법 상 키워드 매개변수는 뒤에 있어야 해요.
# hello_names('손흥민', '이강인', '황희찬', count=2) # 매개변수 입력 순서가 틀렸다.
# hello_names('손흥민', '이강인', '황희찬')  # 손흥민을 count로 인식 ERROR