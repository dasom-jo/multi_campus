#https://www.acmicpc.net/problem/1629
#분할정복
import sys
A, B, C = [int(i) for i in sys.stdin.readline().split()]

def power_rest(a,b,c):
    if b == 1:
        return a % c
    else:
        if b%2 == 0:
            return power_rest(a,b//2,c) * power_rest(a,b//2,c) % c
        else:
            return power_rest(a,b//2,c) * power_rest(a,b//2,c)* power_rest(a,1,c) % c


print(power_rest(A,B,C))
