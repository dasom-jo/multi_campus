import sys, collections

N = int(sys.stdin.readline())

balloon_input = [int(i) for i in sys.stdin.readline().split()]
balloon = collections.deque(enumerate(balloon_input))

result = []
while balloon:
    move_list = balloon.popleft()
    # print(f"터진 풍선정보 : {move_list}")
    result.append(move_list[0]+1)
    # print(f"남은 풍선정보(순서 변경 전) : {balloon}")
    move = move_list[1]
    if move > 0:
        balloon.rotate(-1 * (move-1))
    else:
        balloon.rotate(-1 * (move))        
    # print(f"남은 풍선정보(순서 변경 후) : {balloon}")
print(*result)