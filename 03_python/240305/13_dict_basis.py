#딕셔너리(dictionary)는 파이썬에서 사용되는 데이터 구조 중 하나로, 
# 키(key)와 값(value)으로 이루어진 쌍(pair)들의 집합입니다
#딕셔너리는 중괄호 {}를 사용하여 정의하며

empty_dict1={}
empty_dict2= dict()
print(empty_dict1,empty_dict2)

son_dict = {
    'name' : '손흥민',
    'age' : 29,
    'address' : ['대한민국', '영국', '독일']
}

print(son_dict)

#키를 통한 값 조회
print(son_dict['name'])

#딕셔너리에 데이터 추가
son_dict['job'] = '축구선수'
print(son_dict)

#딕셔너리내 값 수정
son_dict['name'] ='son'
print(son_dict)

#딕셔너리 내 데이터 삭제
del son_dict['address']
print(son_dict)