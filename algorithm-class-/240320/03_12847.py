#슬라이딩 윈도우 알고리즘
#12847
import sys
N, M = [int(i) for i in sys.stdin.readline().split()]
pay = [int(i) for i in sys.stdin.readline().split()]

window_pay = sum(pay[:M])
max_pay = window_pay

for i in range(N-M):#(5-3) range(2) -> 0부터 1까지
    window_pay = window_pay + pay[i+M] - pay[i]
    max_pay = max(max_pay,window_pay)

print(max_pay)
