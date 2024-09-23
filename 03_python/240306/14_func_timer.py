import time
N = 20 
def hanoi(n):
    if n == 1: return 1
    first = hanoi(n-1)
    second = 1
    third = hanoi(n-1)
    return first + second + third

start = time.time()
print(hanoi(N))# 함수의 연산속도를 측정하고 싶다면, 해당 부분에 입력
end = time.time()

print('{0:0.20} sec'.format(end-start))