f = open('hello.txt', 'r', encoding = 'utf-8')

data = f.read()
print(data) #데이타가 통으로 ,한번에 이루어짐
#

f.close()

