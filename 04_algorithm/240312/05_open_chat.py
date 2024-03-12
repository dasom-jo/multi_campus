def solution(record):
    answer = []
    user_info = {}
    for msg in record:
        cmd, uid, *other = msg.split()
        if cmd == "Enter" or cmd == "Change":
            user_info[uid] = other[0]
    
    for msg in record:
        cmd, uid, *other = msg.split()
        if cmd == "Enter":
            answer.append(f"{user_info[uid]}님이 들어왔습니다.")
        elif cmd == "Leave":
            answer.append(f"{user_info[uid]}님이 나갔습니다.")
    return answer


record = ["Enter uid1234 Muzi",
          "Enter uid4567 Prodo",
          "Leave uid1234",
          "Enter uid1234 Prodo",
          "Change uid4567 Ryan"]

result = solution(record)
print(result)
# [
    # "Prodo님이 들어왔습니다.",
    # "Ryan님이 들어왔습니다.",
    # "Prodo님이 나갔습니다.",
    # "Prodo님이 들어왔습니다."
# ]
