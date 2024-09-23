son_dict = {
    'name' : '손흥민',
    'age' : 29,
    'address' : ['한국','영국','독일']
}

print(son_dict.keys()) #key들을 모아서 반환
print(son_dict.values()) #value들을 모아서 반환
print(son_dict.items()) #key와 value를 각각 튜플로 묶어서 반환

print(son_dict.get('name')) 
#get() 함수는 딕셔너리(Dictionary)에서 특정 키(key)에 해당하는 값을 반환하는 메서드입니다
#print(son_dict['job']) 그냥쓰면 에러
print(son_dict.get('job')) #없으면 none
print(son_dict.get('job', '무직')) #없으면 기본값 출력

son_dict.clear()
print(son_dict)