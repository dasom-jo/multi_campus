#2953
import sys

cook_list = []
for i in range(3):
    score = [int(i) for i in sys.stdin.readline().split()]
    cook_list.append(sum(score))

winner_score = max(cook_list)
print(cook_list.index(winner_score)+1,winner_score)