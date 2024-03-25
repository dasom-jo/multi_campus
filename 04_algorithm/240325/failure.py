def solution(N: int, stages: list[int]) -> list[int]:
    input()
    answer = []
    failure = {}
    tryer_num = len(stages)
    for i in range(1, N+1):
        if tryer_num != 0:
            failer_num = stages.count(i) 
            failure[i] = failer_num / tryer_num
            tryer_num -= failer_num
        else:
            failure[i] = 0
    answer = sorted(failure, key= lambda x: failure[x], reverse=True)
    return answer

solution(5, [2,1,4,1,2,3,4,2,1,1,2])