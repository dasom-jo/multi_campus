# try는 예외가 발생할 수 있는 코드 블록을 지정하는 데 사용되는 파이썬 키워드입니다. 
# try 블록 내에서 예외가 발생할 수 있는 코드를 작성하고, 
# 이에 대한 예외 처리를 except 블록에서 수행합니다.

def sum_odd_to_ten():
    try:
        number = get_number()
        sum = 0
        range_number = number
        if number % 2 == 1:
            range_number += 1
        for i in range(1, range_number,2):
            sum+=i
        print(f'1) 1 부터 {number}까지 홀수의 합은 {sum}입니다')
    except Exception as err:
        print(err)
        raise Exception("2)에러를 전달합니다.")
    
def get_number():
    number = int(int(input'숫자를 입력하세요: '))
    if number < 1:
        raise Exception("1) 예외가 발생했습니다. 자연수만 입력가능합니다")
    return number

try:
    sum_odd_to_ten()
except Exception as err:
    print(err)