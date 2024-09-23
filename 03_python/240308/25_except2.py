def divisor_game(number : int):
    try :
        num = int(input(f'{number}의 약수를 입력하세요'))
        if number % num == 0:
            print('맞습니다')
        else:
            print('틀립니다')
    except valueError as e:
        print('정수형태로 입력하지않아, 프로그램을 종료합니다',e)
    except ZeroDibisionError as e:
        print('0으로 나누셨네요 다시하세요')
        divisor_game(number)
    except Exception as e:
        print('알수없는 에러입니다',e)
    else : # except를 만나지 않았을 때, 실행된다.
        print('게임종료')      

divisor_game(5)  