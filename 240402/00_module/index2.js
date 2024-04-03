//문자열을 숫다로  홀수인지 짝수인지 반환하는 프로그램



function strNumOddOrEven(str) {
    let number = Number(str)
    if (number % 2) {
        return '홀수입니다'
    }
    return '짝수입니다'
}

let result = strNumOddOrEven('301')
console.log(result);