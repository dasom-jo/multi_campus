// x와 y를 합하기
function calcSum(x, y) {
    // let result = x + y;
    // return result;
    return x + y;
}

// x와 y를 빼기
function calcSubs(x, y) {
    return x - y;
}

// x와 y를 곱하기
function calcMulti(x, y) {
    return x * y;
}

// x와 y를 나누기
function calcDiv(x, y) {
    return x / y;
}

let firstNum = Number(prompt("첫번째 숫자를 입력하세요"));
let secondNum = Number(prompt("두번째 숫자를 입력하세요"));
let signal = Number(prompt("1-더하기, 2-빼기, 3-곱하기, 4-나누기"));

let result = 0;
switch (signal) {
    case 1:
        result = calcSum(firstNum, secondNum);
        break;
    case 2:
        result = calcSubs(firstNum, secondNum);
        break;
    case 3:
        result = calcMulti(firstNum, secondNum);
        break;
    case 4:
        result = calcDiv(firstNum, secondNum);
        break;
    default:
        console.error('고장');
        break;
}
document.write(result);
