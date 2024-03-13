#input바꾸는법
import sys
#1 기본형
sys.stdin.readline()
nums_str = sys.stdin.readline().rstrip() #엔터까지 포함

total = 0
for i in nums_str:
    total += int(i)

print(total)

#2컴프리헨션
sys.stdin.readline()
nums_str = [int(i) for i in sys.stdin.readline().rstrip()]
print(sum(nums))