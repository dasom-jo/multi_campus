#Exception은 모든 예외의 기본 클래스입니다. 
# 즉, 모든 예외를 처리합니다

try : 
    num = int(input('정수를 입력하세요'))
    # 소수점 입력 시 -> ValueError: invalid literal for int() with base 10: '1.5'
    # 0 입력 시 -> ZeroDivisionError: division by zero
    print(100/num)
except Exception as e:
    print(f"{e.__class__}:{e}")
        # 에러에 대한 대처
        #.__class__는 해당 객체의 클래스를 반환합니다. 
        # 즉, 예외 객체의 클래스를 문자열로 표시합니다.
    print('정상종료')