#여러 매개변수 순서
def hello_names(count = 1, *names):
    for name in names:
        print('hello' * count, name)

        
#hello_names('손흥민','이강인','황희찬',2) 
#can't multiply sequence by non-int of type 'str'
#손흥민은 카운터로 인식해 에러 

hello_names(2,'손흥민','이강인','황희찬') 
# 실행

#hello_names(count=2'손흥민','이강인','황희찬') 
#문법 오류 문법상키워드는  무조건뒤에있어야한다
#키워드인자는 매개변수(count)와 값(2)이 함께 전달되는거
#키워드 인자는 반드시 위치인자 뒤에


#hello_names('손흥민','이강인','황희찬',count = 2) 
#hello_names() got multiple values for argument 'count'
#매개변수 입력순서 오류 

#hello_names('손흥민','이강인','황희찬')
#카운터에 손흥민 들어가서 에러 