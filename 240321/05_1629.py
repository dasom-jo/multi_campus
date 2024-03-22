#https://www.acmicpc.net/problem/1629
#분할정복
import sys
A, B, C = [int(i) for i in sys.stdin.readline().split()]

def power_rest(a, b, c):
    if b == 1:
        return a % c
    else:
        pr = power_rest(a, b//2, c) #문제를 작게 쪼개기
        if b % 2 == 0:
            return pr * pr % c
        else:
            return pr * pr * a % c

print(power_rest(A, B, C))
