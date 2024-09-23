import sys

def snail_slow(A, B, V):
    now = 0
    day = 0
    while now < V:
        # 낮이 되었습니다.
        day += 1
        now += A
        if now >= V:
            break
        # 밤이 되었습니다.
        now -= B
    print(day)


def fast_snail(A, B, V):
    every_day = A - B
    real_v = V - B
    if real_v % every_day:
        day = real_v // every_day + 1
    else:
        day = real_v // every_day
    print(day)

A, B, V = [int(i) for i in sys.stdin.readline().split()]
fast_snail(A, B, V)