/* [1] */
// // 매개변수 없는 함수 정의
// function errMsg() {
//     console.error('에러 발생하였습니다!');
// }

// let number = prompt('숫자를 입력하세요');
// if(!isNaN(number)) {
//     document.write(number * 10);
// } else {
//     errMsg(); // 매개변수 없는 함수 호출
// }

/* [2] */
function errMsg(errCode = '알 수 없음') {
    // let newErrCode = errCode || '알 수 없음'
    // console.error(`에러 발생! 에러코드: ${newErrCode}`);
    console.error(`에러 발생! 에러코드: ${errCode}`);
}

let number = prompt('숫자를 입력하세요');
if (!isNaN(number)) {
    document.write(number * 10);
} else {
    errMsg('Number_001');
    errMsg('Login_002');
    errMsg();
}