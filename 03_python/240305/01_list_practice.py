#list
#리스트이 길이
#특정부분 수정
#특정부분보다 긴 길이의 인덱스로 수정
#삭제하기(구조유지삭제,구조까지삭제,del삭제)

pra_list = [1, 2, 3, '파이', 'apple', ['가', '나', '다', '라']]

#리스트의 길이
print(len(pra_list)) #6

#파이를 3.14로 수정
pi_index = pra_list.index('파이') #해당 문자열의 인덱스 번호를 반환
pra_list[pi_index] = 3.14 
#[1, 2, 3, 3.14, 'Apple', ['가', '나', '다', '라']]
print(pra_list)

#3을 4,8로 수정하기
#pra_list[2] = [4,8] 
#배열 자체가 들어감 [1, 2, [4, 8], 3.14, 'Apple', ['가', '나', '다', '라']]

pra_list[2:3] = [4,8]
#[1, 2, 4, 8, 3.14, 'Apple', ['가', '나', '다', '라']]
print(pra_list)

#삭제하기-1
apple_index = pra_list.index('apple')
#pra_list[apple_index] = [] 
#[1, 2, 4, 8, 3.14, [], ['가', '나', '다', '라']]
#apple의 자리에 [] 요소가 들어온다
#구조를 변경하지않다 길이변화가없다

pra_list[apple_index:apple_index+1] = [] 
#[1, 2, 4, 8, 3.14, ['가', '나', '다', '라']]
#슬라이싱을 이용한 apple요소 삭제 
#완전 제거로 길이 감소 

print(pra_list)

#삭제하기-2
del pra_list[-1][-1]
#[1, 2, 4, 8, 3.14, ['가', '나', '다']]
print(pra_list)

del pra_list[-1][1:]
print(pra_list) #[1, 2, 4, 8, 3.14, ['가']]

#인덱싱은 요소 자체를 반환하지만, 슬라이싱은 요소를 리스트로 묶어서 반환한다

