#print('모듈이 읽혀짐', __name__)

def say():
    print('지금 say를 호출햇군요')
    if __name__ == "__main__":
        print('여기서 실행되는거')
    else:
        print('모듈로써 호출받아 실행되는거')
        
say()