f = open("hello.txt", "r",encoding = 'utf-8')
line = f.readline()
print(line)
line = f.readline()
print(line)
line = f.readline()
print(line)

while True:
line = f.readline()
if line:
    print(line)
else:
    break

f.close()