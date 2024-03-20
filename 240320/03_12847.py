#슬라이딩 윈도우 알고리즘
#12847
import sys
N, M = [int(i) for i in sys.stdin.readline().split()]
pay = [int(i) for i in sys.stdin.readline().split()]

max_pay = sum(pay[:M])


print(max_pay)
