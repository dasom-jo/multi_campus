
/*배열 foreach()
배열의 각요소에 대해 함수를 실행한다 */

const arr = ['최','이','박'];
arr.forEach((x, i) => console.log(x.repeat(i + 1)));

//repeat 메서드는 문자열을 주어진 횟수만큼 반복하여 새로운 문자열 생성
// 최
// 이이
// 박박박
