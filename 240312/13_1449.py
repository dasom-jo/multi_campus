import sys
n,m = [int(i) for i in sys.stdin.readline().split(":")]
print(n,m)
    
#최대공약수
def gcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a
