#하노이탑

N = int(input())

def hanoi(n):
    if n == 1:
        return 1 
    first = hanoi(n-1)
    second = 1
    third = hanoi(n-1)
    return first + second + third

print(hanoi(N))

print(hanoi(N))

def hanoi_detail(n,start,mid,goal):
    if n == 1:
        print(start,goal)
        return
    hanoi_detail(n-1, start, goal, mid)
    print(start, goal)
    hanoi_detail(n-1,mid, start, goal)
    return 

hanoi_detail(N,1,2,3)