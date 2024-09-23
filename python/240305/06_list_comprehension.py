# List Comprehesion
#list = [ 변수를 활용한값 for 변수명 in 반복객체 ]

#숫자 세개를 받고 평균을 반환하는 프로그램 만들기

# user_input = input()
#번호를 받는다 

# user_input_list = user_input.split()
#번호를 받고 공백기준으로 나눈다

# number_list = []
# for i in user_input_list:
#     number_list.append(int(i))
#새로운 공백을 만들고 받은 번호를 공백안에 숫자로 변경하여 추가한다

# sum = 0 
# for i in number_list:
#     sum+=i
# avg = sum/len(number_list)
# print(avg)
#숫자로 받은 번호들을 합계로 돌리고 평균구하기

user_input_list = input().split()

number_list = [int(i) for i in user_input_list]
avg = sum(number_list)/len(number_list)
print(avg)