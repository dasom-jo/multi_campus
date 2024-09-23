#9번 숫자 입력받아오기

#max함수이용
# num_list = [int(input()) for _ in range(9)]
# n_max = max(num_list)
# print(n_max)
# print(num_list.index(n_max) + 1)

# list이용
num_list = [int(input()) for _ in range(9)]
n_max = num_list[0]
#index = 1
for i in range(1, len(num_list)):
    print(f'{num_list[i]}과 {n_max}을 비교합니다')
    
    if num_list[i] > n_max:
        print(f'이제 최대값은 {num_list[i]}이 됩니다.')
        
        #뒤에값이 크다면 n_max는 [0]에서 [i]값으로 변경
        n_max = num_list[i]
        
        #사용자가 알기쉽게 해당 번호를 인덱스를 넣고 1을 더하기
        index = i + 1
        
print("최대값은: ", n_max)
print("최댓값의 위치는:", index)
