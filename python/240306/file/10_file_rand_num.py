#rand_num.txt에 무작위 숫자 10개 write ('w')
# 파일열기
#10번반복
#파일에 랜덤숫자 쓰기
#random_number = random.randint(1,30)
#파일에 랜덤숫자쓰기
#입력햇을때 몇번째 줄에있는지

import random
with open('rand_num.txt', 'w',encoding='utf-8') as f:

    for _ in range(10):
        random_number = random.randint(1,30)
        f.write(f"{random_number}\n")

#숫자를 입력받는다
num = input("숫자입력")
#파일을 읽어온다(f객체)
f = open("rand_num.txt", "r",encoding = 'utf-8')
data = [int(i) for i in f.read().split()]
#print(data)
f.close()
    #f를 반복해서
        #텍스트를 가져온다  - int 반환
        #혹시 각 숫자가 내가 입력한 숫자와 같은지 
            #같으면 해당 인덱스 반환
        #그래도 없으면, -1 반환
for i in range(len(data)):
    if num == range(len(data)):
        print ("1")
        
    else: print("-1")
        break
        
        