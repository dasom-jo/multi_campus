
n = int(input()) #5
i =1
while i <= n:
        print(" " * (n - i) + "*" * (2 * i - 1))
        i += 1

i =1
for i in range(1,n + 1):
        print(" " * i + "*" * (2 * (n - i) -1  ))
        i += 1
        
        #등차수열 : 2n-1 :1,3,5,7,9

#i는 줄순서
#    *    #  i = 1 , " " = 4, "*"=1
#   ***   #  i = 2 , " " = 3, "*"=3
#  *****  #  i = 3 , " " = 2, "*"=5
# ******* #  i = 4 , " " = 1, "*"=7
#*********#
# ******* #
#  *****  #
#   ***   #
#    *    #