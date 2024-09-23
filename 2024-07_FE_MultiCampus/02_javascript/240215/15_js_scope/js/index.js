// 전역변수는 어디서든 사용이 가능하다.
let age = '300살';

function showAge(number) {
    // 지역변수는 함수 내부에서 사용가능하고,
    // let을 사용해야 전역변수와 독립적으로 사용가능하다.
    let age = number + '살';
    document.write(`${age}`);
}

showAge(20);
console.log(age);

/* 
    변수 간의 충돌을 예방하기 위해,
    공통적으로 사용되는 변수가 아니라면 지역변수로 선언하자.
    (함수 내부에서 전역변수로 사용된다면, 함수 호출 후 전역변수가 변경된다.)
*/