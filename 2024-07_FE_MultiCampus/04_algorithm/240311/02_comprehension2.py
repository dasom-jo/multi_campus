prod_list = ['애플 아이폰', '삼성 갤럭시', '애플 아이패드', '삼성 갤럭시탭', '애플 에어팟', '삼성 버즈']

samsung_list = [ i for i in prod_list if i[:2] == '삼성']
apple_list = [ i for i in prod_list if i[:2] == '애플']

samsung_dict = { i[3:] : 1 for i in prod_list if i[:2] == '삼성' }

print(type(samsung_dict), samsung_dict)