N, M = [int(x) for x in input().split()] #10 과 5를 받음
balls = [i for i in range(1, N + 1)] # 1-10개의 볼을 만듬

for _ in range(M):
    left, right = [int(x) - 1 for x in input().split()]
    balls[left], balls[right] = balls[right], balls[left]
    
print(*balls)