#디폴트 딕도 써보기
# from collections import Counter, defaultdict
def solution(N, stages):
    # stages = defaultdict(int)
    # stages[5] += 0
    stages_count = Counter(stages)
    sorted_stages = sorted(stages_count.items())
    for i,(stage, count) in enumerate(sorted_stages):
        # print(stage, count)
        result = []
        if stage > N:
            continue
            #print(pre_count) 3,2,1
            # print(sorted_stages)
            # #[(2, 3), (3, 2), (4, 1), (6, 1)]
        elif stage <= N:
            pre_stage, pre_count = sorted_stages[i]
            eve_count = 0
            fail = count/(len(stages) - eve_count)
            #print(len(stages) , pre_count , len(stages) - pre_count)
            eve_count += pre_count
            print(eve_count)
            # pre_count = 0
            #1--1/8
            #2--3/8-1
            #3--2/8-1-3(4)
            #4--1/8-1-3-2(2)
            #5--0/8-1-3-2-1(1)
            # 6step > N
            # print(count,(len(stages)-pre_count))
            # result.append(fail)
            #print(fail)
        # fail = i / len(stages)



print(solution(5,[2, 1, 2, 6, 2, 4, 3, 3]))
# # 1 8
# # 2 8
# 2 8
# 2 8
# 3 8
# 3 8
# 4 8
# 6

