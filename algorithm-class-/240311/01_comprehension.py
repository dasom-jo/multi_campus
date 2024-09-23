# rainbow = ['빨강',"주황",'노랑','초록','파랑','남','보라']

# rainbow_color = [i + "색" for i in rainbow]
# print(rainbow_color)
rainbow_color = ['빨강색', '주황색', '노랑색', '초록색', '파랑색', '남색', '보라색']

# obj_list =['애플 아이폰','애플 아이패드','애플 에어팟','삼성 갤럭시','삼성 버즈']

# apple_list = [i for i in obj_list if i.split()[0] == '애플']
# print(apple_list)

rainbow1 = [i[0] for i in rainbow_color]
print(rainbow1)

rainbow_dict = {i:1 for i in rainbow1}
print(rainbow_dict)

