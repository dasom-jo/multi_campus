#여러 매개변수
def hello_names(*names, count = 1):
    for name in names:
        print('hello' * count, name)

#가변 매개변수와 일반 매개변수가 오면 가변 매개변수를 먼저 작성할것
        
#hello_names('손흥민','이강인','황희찬',2) 
#2를 names 의 일부로 인식

#hello_names(2,'손흥민','이강인','황희찬') 
#2를 names 의 일부로 인식

#hello_names(count=2'손흥민','이강인','황희찬') 


hello_names('손흥민','이강인','황희찬',count = 2) 


#hello_names('손흥민','이강인','황희찬')
