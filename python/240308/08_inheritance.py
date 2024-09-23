#oop: object oriented progranmming(객체지향프로그래밍)

#전자제품(ElecProduct)  클래스
#   [price:가격, product_name: 상품명]
#   [info()가격과 상품명을 출력하는 메서드 ]

#휴대폰(SmartPhone)클래스 - 전자체품 클래스 상속
#[phone_name:,volumn:용량]
#[call():여보세요 출력 메서드]
#[info(): 가격과 상품명 폰이름,용량까지 출력하는 메서드] 오버라이딩

class ElecProduct:
    def __init__(self,product_name='상품명', price='가격'):
        self.product_name = product_name
        self.price = price
    def info(self):
        print(f'상품종류 {self.product_name}은 가격 {self.price}원대에 판매중입니다')
        
class SmartPhone(ElecProduct):
    def __init__(self,product_name='스마트폰',price:int = 0, phone_name='휴대폰기종명',volume:int = 0 ):
        super().__init__(product_name,price)
        self.phone_name = phone_name
        self.volume = str(volume) + 'GB'
    def call(self):
        print('연락주셔서 감사합니다, 고객님. 찾으시는 상품에 대한 정보를 말씀드리겠습니다.')
    def phone(self):
        print(
            f"고객님께서 찾으시는 상품은 {self.phone_name} 은 {self.volume}의 메모리용량입니다"
        )
    def info(self):
        return super().info(), self.phone()
    
    ep = ElecProduct("ipone", 100)
    ep.info()
    print()
    
    iphone = SmartPhone()
    iphone.info()
    print()
    
    iphone =SmartPhone('아이폰', 50, '아이폰 XR', 256)
    ipone.call()
    ipone.info()
    
    
    