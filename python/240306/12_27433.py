#팩토리얼
#n*(n-1)!
N = int(input())

def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n-1)

print(factorial(N))


