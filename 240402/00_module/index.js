//문자열의 길이가 홀수인지 짝수인지 반환하는 프로그램
const oddcheker=require("./oddcheck")


function strLenOddOrEven(str) {
    let strLen = str.length;
    if (strLen % 2) {
        return '홀수입니다'
    }
    return '짝수입니다'
}

let result = strLenOddOrEven('모듈 만들어보기')
console.log(result);

