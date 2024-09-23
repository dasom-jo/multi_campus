# sum = 0
# for x in range(1, 101): #마지막 숫자를 제외하기에 100까지 더하고싶으면 101로변경 
#     print(x)
#     sum += x
    
# print(sum)


dan = int(input())
i = 1
while i < 10:
    #print(dan, "*", i , '=' dan * i)
    #print("%d * %d = %d" % (dan, i, dan * i))
    #print('{0} * {1} ={2}'.format(dan, i, dan * i))
    print (f'{dan} + {i}= {dan * i}')
    i += 1