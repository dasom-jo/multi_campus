strs = ['9', '90', '900', '9000', '90000']
strs.sort(key=lambda x: x*2 ,reverse=True)
#x*2 두번반복reverse=True역순정렬
print(strs)