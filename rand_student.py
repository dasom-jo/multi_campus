students = [
'김다빈', '김민수', '김수아', '김우진', '김진영', '노성현', '노효민',
'손예림', '오동석', '이가영', '이은수', '박유진', '박형준', '박석원', '박소희',
'조다솜', '차민성', '최승관', '하성덕', '호경화'
]

import random

count = int(input("추출할 인원수를 입력하세요\n"))

idx_set = set([])
while count > len(idx_set):
    idx = random.randint(0, len(students) - 1)
    idx_set.add(idx)

with open('student.txt', 'w', encoding='utf-8') as f:
    for i in idx_set:
        f.write(f"{students[i]}\n")
