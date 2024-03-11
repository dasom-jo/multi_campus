def long_method(a,b):
    c=1000
    print(locals())
    #함수 스코프에서의 변수정보 모두 조회
    #{'a': 2, 'b': 3, 'c': 1000}
    d=2000
    print(locals())
    #{'a': 2, 'b': 3, 'c': 1000, 'd': 2000}
    import pprint
    pprint.pprint(locals())
    #{'a': 2,
    #  'b': 3,
    #  'c': 1000,
    #  'd': 2000}
    
    return a+b+c+d

print(long_method(2,3)) #3005

