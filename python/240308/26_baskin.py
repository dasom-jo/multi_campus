import random

def baskin_game():
    rand_num = random.randint(1,31)
    
    try: 
        while True:
            num = int(input('1부터 31까지의 숫자 입력 :'))
            if num < 1 or num > 31:
                raise Exception(f'범위를 벗어난 입력: {num}')
            #raise를 사용하여 예외를 발생시키면 해당 예외가 발생한 곳에서 예외 처리를 할 수 있습니다.
            if num == rand_num:
                print('정답')
                break
            else:
                print("up"if num < rand_num else "down")
    except Exception as e:
        print(e)
        print('한번 다 기회를 드리지요')
        baskin_game()

baskin_game()
