//클래스의 고급기능
class Rectangle {
    constructor (width,height){
        this.width = width
        this.height = height
    }

    //사각형의 둘레를 구하는 메소드
    getPerimeter(){
        return 2 * (this.width + this.height)
    }
    //사각형의 넓이
    getArea() {
        return this.width * this.height
    }
}

const rectangle = new Rectangle(10, 20)
console.log(`사각형의 둘레 : ${rectangle.getPerimeter()}`);

//상속
//class 클래스 이름 extends 부모 클래스 이름{}
//정사각형 둘레 넓이 구하는 코드
class Square extends Rectangle {
    constructor (length) {
        super(length, length)
    }
}

const square = new Square(10,20)

class 클래스이름{
    get 이름 () { return 값 } //속성값을 확인할때
    set 이름 (value) { } //속성에 값을 지정할때
}

//static속성과 메소드
class 클래스이름 {
    static 속성= 값
    static 메소드() {
        
    }
}