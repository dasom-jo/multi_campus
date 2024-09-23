#03_list_destructuring_assignment
#구조분해할당
#a,b=[a,b]
# * 나머지 요소
#_, 제외 


h_info = ['홍길동',10]
name, age = h_info
print(name,age) #홍길동 10

eight_divior = [1,2,4,8]
odd, *even = eight_divior
#odd에 첫번째 요소 할당 *나머지 요소 even에 리스트로 할당
print(odd,even) #1 [2, 4, 8]

yoo_info = ['유재석', 'TMI1', 30, 'TMI2', '서울 강남구']
name,_, age, _,address = yoo_info
print(name, age, address) #유재석 30 서울 강남구

park_info = ['박서준', 'TMI1', 'TMI2', 'TMI3', '이태원클라쓰']
name, *_, work = park_infoeight_divior
print(name,work)