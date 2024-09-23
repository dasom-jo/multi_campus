import re

#정규표현식 대체하기
target = "aabbcc"
result = re.sub('[^a]',"",target)
print(result) #aa /a가 아니면 공백



