from regex_check import match_check as mc

# mc('a.b', 'a0b') # T
# mc('a.b', 'a00b') # F
# mc('a.b', 'aaab') # T
# mc('a.b', 'accb') # F

# mc('a.b', 'a\nb') # F (\n은 하나의 문자로 취급하지 않는다)
# mc('a.b', 'a\tb') # T (탭은 하나의 문자로 취급)
# mc('a.b', 'a b') # T
# mc('a.b', 'a   b') # F
# mc('a.b', 'acb') # T
# mc('a.b', 'a\n\tb') # F

mc('a[.]b', 'a.b') # T
mc('a[.]b', 'a0b') # F