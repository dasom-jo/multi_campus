if (true) {
    var num1 = 3; //var는 함수 스코프
    let num2 = 3; //let은 블록 스코프
    const num3 = 3; //const은 블록 스코프
}

console.log(num1);
// console.log(num2); 안됨
// console.log(num3); 안됨

//함수 스코프
//변수가 함수내에서 선언될때 생성 ,함수스코프는 변수가 함수내에서만유효
//블록스코프
//변수가 블록내{}에서만 유효