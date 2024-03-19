#10814
import sys
n = int(sys.stdin.readline())
user_id = [(i, *sys.stdin.readline().split()) for i in range(n)]
user_list = sorted(user_id,key = lambda x:(int(x[1]),x[0]))

#썜풀이
#입력순으로하려면 기준을 하나만 정하면됨
