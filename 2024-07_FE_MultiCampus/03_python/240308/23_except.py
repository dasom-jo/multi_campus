try :
    num = int(input('정수를 입력하세요'))
    # 소수점 입력 시 -> ValueError: invalid literal for int() with base 10: '1.5'
    # 0 입력 시 -> ZeroDivisionError: division by zero
    print(100/num)
except Exception as e:
    print(f"{e.__class__} : {e}")
    # 에러에 대한 대처

print('정상 종료')
