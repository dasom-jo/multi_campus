//문자열의 길이가 홀수인지 짝수인지 반환하는 프로그램
const { oddchecker } = require('./oddCheck');
//{} 를하는건 여러 모듈중에 해당 모듈만 할당하기위해서
//안쓰면 코드가 길고 복잡해진다
function strLenOddOrEven(str) {
    let strLen = str.length;
    return oddchecker(strLen)
}

let result = strLenOddOrEven('모듈만들어보기')
console.log(result);