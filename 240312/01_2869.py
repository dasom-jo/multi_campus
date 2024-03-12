import sys
#정수를 입력받음 /int로 변경을위해 이런식으로 작성
#A,B,V = [int(i) for i in sys.stdin.readline().split()]
#print(A,B,V)
# def snail_slow(A,B,V):
#지금있는 위치
# now=0
# day=0
#     while now < v:
#         #낯이되었다
#         day+=1
#         now+=A
#         if now >=v:
#             break
#         #밤이되었다
#         now=-B
#     print(day)
def fast_snail(A,B,V):
    every_day = A-B
    real_v = V-B
    day = real_v//every_day
    if real_v%every_day !=0:
        day+=1
    print(day)

fast_snail(5,1,6)