#1
# def func(x):
#     print(x)
# func('출력')

#2
# func2 = lambda x : print(x)
# func2('출력')

#3
# def func(x):
#     return x.split()[1]
#s = ['2 C', '1 A','4 D','3 B']
# print(sorted(s,key=func)) #함수를 불러옴

#4
# print(sorted(s, key=lambda x:x.split()[1]))
# #['1 A', '3 B', '2 C', '4 D']

#5 우선순의 여러개 지정가능 .튜플형식
# s = ['2 C', '1 A','4 D','3 B','5 A']
# print(sorted(s, key=lambda x:(x.split()[1],x.split()[0])))
# 3['1 A', '5 A', '3 B', '2 C', '4 D']

#6 국어 수학점수가 높은순서대로 정렬(단,점수가 같다면 이름정려)
name_list = [
    '김길동 50 50',
    '최길동 80 20',
    '홍길동 90 20',
    '이길동 60 40',
    '박길동 30 60',
    '나길동 60 70',
]
print(sorted(name_list,key = lambda x:
            (-1*int(x.split()[1])-int(x.split()[2]),x.split()[0])))
