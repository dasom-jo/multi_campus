#틀만 만듬...화이팅...


def solution(fees, records):
    dict = defaultdict(list)
    for i in records:
        time,car_num,status = i.split()
        h,m = [int(i)for i in time.split(':')]
        minute = h* 60 +m
        dict[car_num].append(minute)

    park_fee = defaultdict(int)
    for k, v inpark_info.items():
print(solution([180, 5000, 10, 600],["05:34 5961 IN"]))