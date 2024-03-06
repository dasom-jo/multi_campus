def average(*scores):
    # 합계 / 개수
    def my_sum():
        total = 0
        for s in scores:
            total += s
        return total
    def my_length():
        return len(scores)
    return my_sum() / my_length

print(average(10,60,80,50,1,2))