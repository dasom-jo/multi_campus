def recursive_sum(start, end):
    if start ==end:
        return start
    if end == start + 1:
        return start * end
    else:
        half = (start + end) // 2
        return divide_conquer(start,end)* divide_conquer(half+1,end)
