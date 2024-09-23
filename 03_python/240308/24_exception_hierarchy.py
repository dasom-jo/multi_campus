# 예외 계층 구조(Exception Hierarchy)란 예외 클래스들 간의 상속 관계를 나타내는 것을 말합니다. 파이썬에서는 예외 클래스들이 서로 상속 관계를 가지며, 
# 이를 통해 예외를 효율적으로 처리할 수 있습니다.

# 기본적으로 모든 내장 예외 클래스들은 Exception 클래스를 상속합니다. 따라서 모든 예외 클래스는 Exception 클래스의 서브클래스입니다. 
# 이렇게 상속 관계가 구성되어 있기 때문에 except 구문에서 Exception을 사용하면 모든 예외를 처리할 수 있습니다.

# Exception: 모든 내장 예외 클래스들의 부모 클래스입니다.
# ArithmeticError: 산술 연산 관련 예외의 부모 클래스입니다.
# ZeroDivisionError: 0으로 나누기와 관련된 예외입니다.
# OverflowError: 연산이 너무 크거나 작을 때 발생하는 예외입니다.
# FloatingPointError: 부동 소수점 연산과 관련된 예외입니다.
# LookupError: 시퀀스나 매핑이 올바르지 않은 인덱스나 키를 요청했을 때 발생하는 예외의 부모 클래스입니다.
# IndexError: 시퀀스의 인덱스가 범위를 벗어날 때 발생하는 예외입니다.
# KeyError: 매핑의 키가 존재하지 않을 때 발생하는 예외입니다.
# FileNotFoundError: 파일을 찾을 수 없을 때 발생하는 예외입니다.
# TypeError: 연산이나 함수 호출이 부적절한 형태의 객체에 대해 수행될 때 발생하는 예외입니다.
# ValueError: 인자의 값이 부적절한 경우에 발생하는 예외입니다.

def exception_hierarchy(e_class, indent=0):
    #들여쓰기를 이용해, 예외 클래스 이름출력
    print(" " * indent + e_class.__name__)
    
    #예외 클래스의 자식 클래스 목록 가져오기
    sub_e_classes = e_class.__subclasses__()
    for sub_class in sub_e_classes:
        exception_hierarchy(sub_class, indent + 2)
        
exception_hierarchy(BaseException)