from regex_check import match_check as mc

# mc('go*d','gd')
# mc('go*d','god')
# mc('go*d','goood')

# mc('go+d','gd')
# mc('go+d','god')
# mc('go+d','goood')

mc('g[A-Z]+d','gOOOOd')#T
mc('g[A-Z]+d','gooood')#F 소문자

mc('g[A-Z]+d','gABCd')#T
mc('g[A-Z]+d','gABcd')#F소문자