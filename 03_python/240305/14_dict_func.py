son_dict = {
    'name': '손흥민',
    'age': 29,
    'address': ['대한민국', '영국', '독일']
}

print(son_dict.keys()) # key들을 모아서 반환
print(son_dict.values()) # value들을 모아서 반환
print(son_dict.items()) # key와 value를 각각 튜플로 묶어서 반환

print(son_dict.get('name')) # print(son_dict['name'])
# print(son_dict['job']) # 없으면 에러!!!
print(son_dict.get('job'))  # 없으면 None
print(son_dict.get('job', '무직')) # 없으면 기본값 출력

for k, v in son_dict.items():
    print(f"키: {k}, 값 : {v}")

son_dict.clear()
print(son_dict)