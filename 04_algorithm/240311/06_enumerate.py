rainbow = ['빨', '주', '노', '초', '파', '남', '보']

# for i in range(len(rainbow)):
#     print(i, rainbow[i])

# for i in rainbow:
#     print(i)

enum_rainbow = enumerate(rainbow)
for a, b in enum_rainbow:
    print(a, b)