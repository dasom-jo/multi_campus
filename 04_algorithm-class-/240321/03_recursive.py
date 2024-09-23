def recursive(start, end):
    if end == start + 1:
        return end * start
    else:
        return end * recursive_sum(start, end - 1)
print(recursive(1, 10))
