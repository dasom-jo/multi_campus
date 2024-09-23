from regex_check import match_check as mc

#하나의 문자만 사이에 들어갈수잇음
# mc("a.b","a0b")
# mc("a.b","a00b")
# mc("a.b","aaab")
# mc("a.b","accb")

# mc("a.b","a\nb")#F
# mc("a.b","a\tb")#T
# mc("a.b","a b")#T 탭은 하나의 문자 취급
# mc("a.b","a  b")#F

# mc("a.b","acb")#T
# mc("a.b","a\n\tb")#F

# mc("a..b",'a  b')
# #a..b: a  b is ok\
# mc("b..k",'book')
# #b..k: book is ok
# mc("p....n","python")
# #p....n: python is ok
# mc('이.희',"이철희")

# mc('최인규[.]',"최인규.")
#최인규[.]: 최인규. is ok

# mc("a[.]b",'acb')
# #a[.]b:acbis  not  ok

