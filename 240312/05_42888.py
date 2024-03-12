# 채팅방에 들어오고 나가거나,
# 닉네임을 변경한 기록이 담긴 문자열 배열 record가 매개변수로 
# 주어질 때, 
# 모든 기록이 처리된 후, 
# 최종적으로 방을 개설한 사람이 보게 되는 
# 메시지를 문자열 배열 형태로 
# return 하도록 solution 함수를 완성하라.
#Enter uid1234 Muzi
#"Leave uid1234"
#"Change uid4567 Ryan"

#입장,퇴장,체인지 받음
user_id = input().split()


record_dict = {}

for k, v in record_dict.items():
    if user_id[0] == "Enter"or user_id[0] =="Change":
        print(f'{v}님이 들어왔습니다.')
    elif user_id[0] == "Leave":
        for k, v in record_dict.items():
            if user_id[1] == k:
                print(f'{v}님이 나갔습니다')
        
        
        

#들어올때
# enter_room = []
# leave_room = []

# for k, v in record_dict.items():
#     if (k,v) not in enter_room:
#         print(f'{v}님이 들어왔습니다.')
#         leave_room.append((k,v))     
        
# #나갈때 
#     for k, v in record_dict.items():
#         if (k,v) in leave_room:
#             print(f'{v}님이 나갔습니다.')
#             leave_room.remove((k,v))

#변경할때
# for k, v in record_dict.items():
#     elif user_id[0] == "Change":
#         print(f'{v}님의 닉네임이 변경되었습니다.')

#쌤풀이
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
