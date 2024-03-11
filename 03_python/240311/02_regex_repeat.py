from regex_check import match_check as mc

mc('go*d', 'gd') # T
mc('go*d', 'god') # T
mc('go*d', 'good') # T

mc('go+d', 'gd') # F
mc('go+d', 'god') # T
mc('go+d', 'good') # T

mc('g[A-Z]+d', 'gooooood') # F
mc('g[A-Z]+d', 'gOOOOOOd') # T

mc('g[A-Z]+d', 'gABCd') # T
mc('g[A-Z]+d', 'gAbCd') # F
