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
import sys

order = [i for i in sys.stdin.readline().split()]
request, uid, *other = order
record_dict = {uid: other}
record1_dict = {'uid1234': 'Muzi'}

while request == 'Enter' or request == 'Change':
    print(f'{other}님이 들어왔습니다')
    record1_list.append({uid: other})
    print(record1_list)
    break

if request == 'Leave':
    print(f'{record1_dict.values()}님이 나갔습니다')
