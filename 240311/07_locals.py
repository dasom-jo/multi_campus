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

'''locals()함수는 현재 지역 심볼테이블을 딕셔너리 형태로 반환합니다
이 딕셔너리에는 현재 지역 스코프에 정의된 모든 변수 및 해장 변수 가리키는 객체
포함됩니다 즉 현재 스코프에서 정의된 모든 변수의 이름 과 값에 접근'''
'''pprint 모듈은 데이터 구조를 좀더 보기 좋게 출력하기 위한 용도로 사용됩니다'''

