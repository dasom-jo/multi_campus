# def func1(x):
#     return x.split()[1], x.split()[0]

# s = ['5 A', '2 C', '1 A', '4 D', '3 B']
# print(sorted(s, key=lambda x:(x.split()[1], x.split()[0])))

name_list = [
    '김길동 50 50', # 100
    '최길동 80 20', # 100
    '홍길동 90 20', # 110
    '이길동 60 40', # 100
    '박길동 30 60', # 90
    '나길동 60 70', # 130
]
# 나 홍 김 이 최 박

# 국어, 수학 점수 합계가 높은 순서대로 정렬 (단, 점수가 같다면 이름순 정렬)
print(sorted(name_list, key=lambda x: (-1 * (int(x.split()[1])+int(x.split()[2])), x.split()[0])))
