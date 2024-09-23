f = open('hello.txt', 'r', encoding='utf-8')
data = f.read()
print(data)
f.close()