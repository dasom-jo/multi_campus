def exception_hierarchy(e_class, indent=0):
    # 들여쓰기를 이용해, 예외 클래스 이름 출력
    print(" " * indent + e_class.__name__)
    
    # 예외 클래스의 자식 클래스 목록 가져오기
    sub_e_classes = e_class.__subclasses__()
    for sub_class in sub_e_classes:
        exception_hierarchy(sub_class, indent + 2)

exception_hierarchy(BaseException)