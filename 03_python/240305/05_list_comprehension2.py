# List Comprehesion
# 리스트 = [ 변수를활용한값 for 변수명 in 반복객체 ]

name_list = [ '손흥민', '조규성', '김민재', '이강인', '이승우', '황희찬' ]

lee_list = [ name for name in name_list if name[0] == '이' ] # ['이강인', '이승우']
son_lee_list = [ name for name in name_list if name[0] == '이' or name[0] == '손' ] # ['손흥민, '이강인', '이승우']

print(lee_list)
print(son_lee_list)