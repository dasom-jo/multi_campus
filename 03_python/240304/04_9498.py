num = int(input())

# if 90< num <=100 :
#     print('A')
# elif 80<num<=90 :
#     print('B')
# elif 70<num<=80 :
#     print('C')
# elif 60< num <=70 :
#     print('D')
# else:
#     print('F')
    
    
if 60<= num <=100:
    print("ABCD"[9-num//10])
else : print('F')
        
#my_string = 'hello'
#print(my_string[0]) 첫번쨰 문자 h 출력
#print("hello"[0]) #첫번쨰 문자 h 출력

score = int(input())

if 90 <= score <= 100: result = "A"
elif 80 <= score < 90: result = "B"
elif 70 <= score < 80: result = "C"
elif 60 <= score < 70: result = "D"
else : result = 'F'