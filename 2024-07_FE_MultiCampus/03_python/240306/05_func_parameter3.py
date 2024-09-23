def hello_names(*names, count = 1):
    for name in names:
        print("Hello" * count, name)


# hello_names('손흥민', '이강인', '황희찬', 2) # 2를 names의 일부로 인식
# hello_names(2, '손흥민', '이강인', '황희찬')  # 2를 names의 일부로 인식
# hello_names(count = 2, '손흥민', '이강인', '황희찬') # 문법 상 키워드 매개변수는 뒤에 있어야 해요.
hello_names('손흥민', '이강인', '황희찬', count=2) # 정상
hello_names('손흥민', '이강인', '황희찬')  # 정상