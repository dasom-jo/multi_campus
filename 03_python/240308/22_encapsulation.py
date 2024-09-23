from package import shape as s
#캡슐화 : 사용자 입장에서 중요한 부분은 드러내고 , 중요하지않은 부부은
#숨기는것
rect1 = s.Rectangle(3,2)
rect2 = s.Rectangle(10,20)

print(rect1.get_perimeter())
print(rect2.get_perimeter())