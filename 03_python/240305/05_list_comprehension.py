# List Comprehesion
# list = [변수를 활용한 값 for 변수명 in 반복객체] 

name_list = [ '손흥민', '조규성', '김민재', '이강인', '이승우', '황희찬' ]

# lee_list = [name for name in name_list if name[0] == '이']
# #name은 변수명을 먼저 선언후 for~
# son_list = [name for name in name_list if name[0] == '손']

# print(lee_list)
# print(son_list)

lee_list=[]
for name in name_list:
    if name[0] == '이':
        lee_list.append(name)
    
print(lee_list)