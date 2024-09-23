
#import math
def average(*scores):
    #합계/개수
    #return sum(scores) / len(scores)
    def my_sum():
        total = 0
        for s in scores:
            total += s
        return total#점수를 반복해서 합함
    def my_length():
        return len(scores) #스코어의 갯수를 셈 
    result = my_sum() / my_length()
    #return math.floor(result) 36점
    return round(result) #37점
print(average(10,60,80,50,1,20))