#2953
import sys

cook_list = []
for _ in range(5):
    score = sum([int(i) for i input()split()])
    cook_list.append(score)

winner_score = max(cook_list)
print(cook_list.index(winner_score)+1, winner_score)

# input = sys.stdin.readline()

# win_num = 0
# win_score = 0

# for i in range(5):
#     score = sum(list(map(int, input().aplit())))
#     if score > win_score:
#         win_score = score

# print(win_num, win_score)