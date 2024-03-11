import re

match_obj = re.search(
    '([가-힣]{2,4})\s+(010[-]\d{4}[-]\d{4})',
    '홍길동 010-1234-5678')

print(match_obj)
print(match_obj.group())
print(match_obj.group(0))
name = match_obj.group(1)
tel = match_obj.group(2)
print(name, tel)