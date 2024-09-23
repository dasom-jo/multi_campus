#i는 줄순서
#    *    #  i = 1 , " " = 4, "*"=1
#   ***   #  i = 2 , " " = 3, "*"=3
#  *****  #  i = 3 , " " = 2, "*"=5
# ******* #  i = 4 , " " = 1, "*"=7
#*********#  i = 5 , " " = 0, "*"=9 
for i range(1, n+1):
        space = n - i #공백
        star = 2 * i - 1 #*
        print(" " * space + "*" * star )
        
# ******* #  i = 1 , " " = 1, "*"=7
#  *****  #  i = 2, " " = 2, "*"=5
#   ***   #  i = 3 , " " = 3, "*"=3
#    *    #  i = 4 , " " = 4, "*"=1
for i in range (1, n+1):
        space = i
        star = 2(n-i) - 1
        print (" " * space + "*"* star )

print('-------------------------------------')

n = int(input())
i = 1 
for i in range(1,n+1):
        print(" "*(n-i) + "*"*(2*i-1))
        i += 1
        
for i in range(1, n+1):
        print(" "*i + "*"*(2*(n-i)-1))
        i += 1

print('-------------------------------------')
        
N = int(input()) # 5


for i in range(1, 2 * N):
        space = abs(i-N) #절대값
        star = 2 * (N - space) - 1
        print(" " * space + "*" * star)