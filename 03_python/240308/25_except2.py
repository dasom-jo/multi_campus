def divisor_game(number:int):
    try :
        num = int(input(f'{number}의 약수를 입력하세요'))
        if number % num == 0:
            print('맞습니다.')
        else:
            print('틀립니다')
    except ValueError as e:
        print('정수 형태로 입력하지 않아, 프로그램을 종요합니다.', e)
    except ZeroDivisionError as e:
        print('아니,, 0으로 나눌 생각을 하시다니! 기회를 더 드리죠..')
        divisor_game(number)
    except Exception as e:
        print('띠용!! 알 수 없는 에러다', e)
    else : # except를 만나지 않았을 때, 실행된다.
        print('게임 종료')
        
divisor_game(5)
