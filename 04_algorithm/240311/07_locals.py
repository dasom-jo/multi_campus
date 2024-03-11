def long_method(a, b):
    c = 1000
    d = 2000
    # ...
    import pprint
    pprint.pprint(locals())  # 함수 스코프에서의 변수 정보 모두 조회
    print(locals())  # 함수 스코프에서의 변수 정보 모두 조회
    return a+b+c+d


print(long_method(2,3))