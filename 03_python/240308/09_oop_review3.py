# OOP : Object Oriented Programming (객체지향 프로그래밍)

# 전자제품(ElecProduct) 클래스
#   [price: 가격, product_name: 상품명]
#   [info() : 가격과 상품명을 출력하는 메서드]

# 스마트폰(SmartPhone) 클래스 - (ElecProduct) 클래스 상속
#   [phone_name: 폰이름, volumn: 용량]
#   [call() : 여보세요 출력하는 메서드]
#   [info() : 가격과 상품명, 폰이름, 용량까지 출력하는 메서드] - 오버라이딩
class ElecProduct:
    # [price: 가격, product_name: 상품명]
    def __init__(self, price='(w)', product_name='(제품명)'):
        self.price = price
        self.product_name = product_name

    # [info() : 가격과 상품명을 출력하는 메서드]
    def info(self):
        print(f"가격은 {self.price} 원, 상품명은 {self.product_name} 입니다. ")

# 스마트폰(SmartPhone) 클래스 - (ElecProduct) 클래스 상속
class Smartphone(ElecProduct):
    # [phone_name: 폰이름, volumn: 용량]
    def __init__(self, price='(w)', product_name='(상품명)', phone_name='(핸드폰 기종)', volumn='(용량)'):
        super().__init__(price, product_name)
        self.phone_name = phone_name
        self.volumn = volumn

    # [call() : 여보세요 출력하는 메서드]
    def call(self):
        print('여보세요~')

    # [info() : 가격과 상품명, 폰이름, 용량까지 출력하는 메서드] - 오버라이딩
    def info(self):
        super().info()
        print(f"핸드폰 기종: {self.phone_name} 이고, 핸드폰 용량은 {self.volumn} GB !")

ep = ElecProduct(710000, "에어팟 맥스 블루투스헤드셋")
ep.info()
sp = Smartphone(980000, "스마트폰", "갤럭시 Z 플립5", 256)
sp.call()
sp.info()
