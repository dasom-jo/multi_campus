//객체(object): 실제로 존재하는 사물을 의미하고 이름과값으로 구성된 속성을 가진 자바스크립트의 기본데이터 타입
//배열은 인덱스를 사용하지만 객체는 키를 사용합니다
//배열 내부의 값은 요소이지만 객체내부의 값은 속성입니다
//{ 키:값 }
const product = {
    제품명: '망고',
    유형: '당절임'
}
//접근가능법
product['제품명']
product.제품명

//객체의 속성중 함수 자료형인 속성을 메소드라고 합니다-------------------
const pet = {
    name:'구름',
    eat: function(food){} // eat메소드
}
//메소드를 호출합니다
pet.eat()

//메소드 내부에서 this키워드------------------------------------
const petThis = {
    name:'구름',
    eat: function(food){
        alter(this.name + '은' + food + '를 먹습니다')
        //this키워드를 사용해 자신이 가진 속성에 접근할수있습니다
    }
}
//메소드를 호출합니다
pet.eat('밥')

//객체를 처음 생성한후에 속성을 추가하거나 제거하는것을 '동적으로 속성을 추가/제거한다'라고 표현-------------------------
//stringfy() 추가하기
const student = {}
student.이름='윤인성'
student.취미 = "악기"

console.log(JSON.stringify(student,null,2));
//JSON.stringify 은 js객체를 json문자열로 반환하는데 사용하는데 세개의 매개변수를 받을수있따
//student: 변환할js객체입니다 이 객체를 json문자열로 반환
//null:replacer함수로 배열을 지정할수있습니다 null을 지정하여 모든 속성을 변환 만약 null이 아니라 '이름'만 잇으면 취미는 객체안에 들어갈수없음
//2:가독성을 위한 들여쓰기 지정

//delete 객체.속성 으로 제거하기
delete student.취미

console.log(JSON.stringify(student,null,2));

//메서드 간단선언-----------------------------------------------------
//function(){}에서 function제외
const petNoFunction = {
    name: 'cloud',
    eat(food){
        alert(this.name+food)
    }
}
petNoFunction.eat('밥')

//this 키워드 사용방식
//function(){} 익명함수와 ()=>{}화살표함수
const test = {
    a: function(){
        console.log(this);
    },
    b:()=>{
        console.log(this);
    }
}

test.a(); // 출력: {a: ƒ, b: ƒ}
// a 메서드는 익명 함수(function(){})로 정의되어 있습니다.
// 객체의 메서드로 호출되므로, this는 test 객체를 가리킵니다.
// 결과: test 객체

test.b(); // 출력: Window { ... }
// b 메서드는 화살표 함수(()=>{})로 정의되어 있습니다.
// 화살표 함수는 this를 자신이 정의된 문맥에서 상속받습니다. 여기서 b 메서드는 test 객체 내에서 정의되었지만, 화살표 함수의 this는 전역 문맥의 this를 가리킵니다.
// 브라우저 환경에서는 전역 객체인 window, Node.js 환경에서는 전역 객체인 global을 가리킵니다.
// 결과: 전역 객체 (window 또는 global)

//객체의 속성과 메소드 사용하기-------------------------------
//typeof 연산자를 활용하여 배열의 자료형을 확인하면ㅇ object라고 객체가 출력됨
//배열인지 확인하려며 Array.isArray() 메소드를 활용
//기본자료형을 객체로 선언하기
const 객체 = new 객체자료형이름()
const f = new Number(273)
typeof f
//object
f.sample = 10
f.sample//10
f//Number{273,sample:10} 객체형태로 출력
f+0 //273
f.valueOf()//273

//prototype
객체자료형이름.prototype.메소드이름 = function(){
}
Number.prototype.sample = 10
i.sample
//10
//ex) 포로토 타입으로 숫자메소드 추가
Number.prototype.power = function(n=2){
    return this.valueOf() ** n
}
//number객체에 새로운 power 메서드 추가
//this.valueOf()는 원시값ㅇ르 반환하는 number객체의 메서드
const a = 12 //숫자리터럴로 임시로numer객체 생성 기본자료형의 일시적 승급
console.log('a.power()',a.power());
console.log('a.power(3)',a.power(3));
console.log('a.power(4)',a.power(4));

//indexOf()
//문자열 '안녕하세요'내부에 '안녕','하세' ,없는 문자열 이 있는지 확인, 잇으면 시작 인덱스 출력,없으면 -1 출력
const j = '안녕하세요'
j.indexOf('안녕') //0
j.indexOf('하세') //2
j.indexOf('배고파')//-1

//문자열.contain(문자열) 를통해 boolean값을 출력할수잇음
string.prototype.contain = function(data){
    return this.indexOf(data)>=0
}

Array.prototype.contain = function(data){
    return this.indexOf(data)>=0
}

const b = '안녕하세요'
console.log('안녕 in 안녕하세요:', b.contain('안녕'));  //true
console.log('없는데 in 안녕하세요:', b.contain('없는데')); //false

const c = [273,32,103,57,52]
console.log('273 in [],',c.contain(273)); //true
console.log('0 in [],',c.contain(0));//false

//number 객체ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
//toFixed() : 숫자 n번째 자릿수까지 출력하기
const l = 123.456
l.toFixed(2)//123.45
l.toFixed(4)//123.4567
//isNaN(), isfinity():NaN (not a number )인지 Infinity(무한) 확인하기
const m = number('숫자가아닙니다')
number.isNaN(m) //true

const n = 10/0
n//infinity
const o = -10/0
o//-infinity
number.isFinite(n)//false
number.isFinite(o)//false
number.isFinite(1)//true
number.isFinite(10)//true

//string객체