import random

# rand_num10.txt에 무작위 숫자 10개 write ('w')
# 파일 열기
with open('rand_num10.txt', 'w') as f:
    # 10번 반복
    for _ in range(10):
        rand_num = random.randint(1, 30)
        # 파일에 랜덤숫자 쓰기
        # f.write(str(rand_num))
        # f.write("{0}".format(rand_num))
        f.write(f"{rand_num}\n")

# 숫자를 입력받는다.
N = int(input())

def find_num(n):
    # 파일을 읽어온다. (f 객체)
    with open('rand_num10.txt', 'r') as f:
        idx_num = 0
        # f를 반복해서
        for line in f:
            # 텍스트(각 숫자)를 가져온다. -> int 변환
            num = int(line.strip())
            # 혹시 각 숫자가 내가 입력한 숫자와 같은지
            if num == n:
                # 같으면 해당 인덱스(라인번호) 출력
                return idx_num
            idx_num += 1
        return -1

def find_num2(n):
    with open('rand_num10.txt', 'r') as f:
        data = [ int(i) for i in f.read().split()]
        if n in data:
            return data.index(n)
        return -1

# result = find_num2(N)
result = find_num(N)
print(result)