#문제1
# score = 100 #전역변수

# def score_change(score):
#     score -= 5 #지역변수
    
# score_change(score)

# print(score)

#지역변수는 함수안에만 작동
#전역변수 //함수 내부에서 print 햇으면 95

#2 지역변수[global]
score = 100
def score_change():
    global score
    score -= 5 
score_change()
print(score)

#3  반환해서 재할당
score = 100 
def score_change(score):
    return score - 5
score = score_change(score)
print(score)