//함수선언문
function sum1(x, y) {
    return x + y;
}

//함수표현식
let sum2 = function(x, y) {
    return x + y;
}
//함수표현식.화살표 function빼고 화살표발생 (매개변수 )=> {함수}
let sum3 = (x, y) => {
    return x + y;
}

//화살표 예제 한줄이면 중괄호와 return생략사능
let hello = () => { /*return*/ "hello";}  
let hello2 = () => console.log("hello");
let hello3= name =>console.log(`hello ${name}`);

hello(); //콘솔에 hello를 출력하는 함수동작
hello3('홍길동') //매개변수 홍길동을 이용해 hello홍길동 출력
console.log(hello2); //hello를 반환하는 함수동자갛여 반환값 콘솔에출력
//매개변수 한개면 소괄호 생략가능


//선어문을 이용한 덧셈 출력
function sum(x, y) {
    return x+y;
}

console.log(sum (2, 5));