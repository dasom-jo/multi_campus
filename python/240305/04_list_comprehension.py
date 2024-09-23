# List Comprehesion

#리스트 컴프리헨션(List Comprehension)은 파이썬의 강력한 기능 중 하나로, 
#리스트를 간결하게 생성하는 방법을 제공합니다. 
#일반적으로 for 루프와 조건문을 한 줄에 표현하여 리스트를 생성할 수 있습니다.

#[표현식 for 요소 in iterable if 조건문]
#리스트 = [변수를 활용한 값 for 변수명 in 반복객체]
#표현식/변수를 활용한 값 이라는 뜻은 반복객체안의 요소를 변수명으로 선언한것
num_list = [1, 2, 3, 4]
# even_list = []
# for e in num_list:
#     even_list.append(e * 2)
even_list = [ e * 2 for e in num_list ]

print(even_list) #[2, 4, 6, 8]

