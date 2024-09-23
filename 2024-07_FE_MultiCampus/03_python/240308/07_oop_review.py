# OOP : Object Oriented Programming (객체지향 프로그래밍)

# 스포츠 클래스 [팀1, 팀2, 승자결정]
class Sports:
    def __init__(self):
        self.home_team = '대한민국'
        self.away_team = '일본'
    def get_winner(self):
        result = len(self.home_team) - len(self.away_team)
        if result:
            if result > 0:
                return self.home_team
            return self.away_team
        return '비김'

# 축구 클래스 [팀1, 팀2, 승자결정(MVP 뽑는다)] [축구공]
class FootBall(Sports):
    def __init__(self):
        super().__init__()
        self.home_team = '리버풀'
        self.away_team = '맨유'
    def get_winner(self):
        print('MVP는 손흥민입니다.')
        return super().get_winner()

# normal_sports = Sports()
# print(normal_sports.home_team)
# print(normal_sports.away_team)
# print(normal_sports.get_winner())

epl = FootBall()
print(epl.home_team)
print(epl.away_team)
print(epl.get_winner())
