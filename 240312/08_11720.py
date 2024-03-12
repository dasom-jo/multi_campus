#input바꾸는법
import sys
sys.stdin.readline()
nums_str = sys.stdin.readline().rstrip() #엔터까지 포함

total = 0
for i in nums_str:
    total += int(i)
    
print(total)