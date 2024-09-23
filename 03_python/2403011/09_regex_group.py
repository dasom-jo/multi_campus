import re

match_obj = re.search(
    '([가-힣]{2,4})\s+(010[-]\d{4}[-][0-9]{4})',
    '조다솜 010-1234-5678'
)

print(match_obj)
print(match_obj.group())
#조다솜 010-1234-5678
print(match_obj.group(0))
#조다솜 010-1234-5678
print(match_obj.group(1))
#조다솜
print(match_obj.group(2))
#010-1234-5678
#괄호 기준으로 나뉨 
name = match_obj.group(1)
tel  = match_obj.group(2)
print(name,tel) #조다솜 010-1234-5678