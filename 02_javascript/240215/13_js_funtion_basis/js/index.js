//버전1
//매개변수없는 함수정의
// function errMsg() {
//     console.error('에러가 발생하였습니다');
// }//에러메세지를 만듬
// let number = prompt('숫자를 입력하세요');
// if(!isNaN(number)) {//숫자가 유효한지확인
//     document.write(number *10) //유효하다면 출력 
//     } else {
//     errMsg(); //아니라면 에러 메세지
//     }

//버전2
function errMsg(errcode) {
    console.error(`에러발생: ${MessageChannel}`);
}
let number = prompt('숫자를 입력하세요');
 if(!isNaN(number)) {
     document.write(number * 10);
     }else {
         errMsg(); //매개변수 없는 함수 호출 
     }