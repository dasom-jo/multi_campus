prod_list = ['애플 아이폰','삼성 갤럭시','애플 아이패드','삼성 갤럭시탭','삼성 버즈']

ss_list=[i for i in prod_list if i[:2]== "삼성"]
ap_list=[i for i in prod_list if i[:2]== "애플"]
print(ss_list)
print(ap_list)

ss_dict = {i:1 for i in prod_list if i[:2]== "삼성"}
print(ss_dict)
