#백트래킹- 같은숫자를 여러번 사용할수없다
import sys, itertools

N, M = [int(i)for i in sys.stdin.readline().split()]
nums = [i for i in range(1,N+1)]
# itertools.product를 사용하여 nums 리스트에서 길이가 M인 모든 가능한 조합을 생성합니다.
result = list(itertools.product(nums,repeat=M))
for i in results:
    print(*i)