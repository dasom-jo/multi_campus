/*iterable : 순서대로 처리가 가능한 */
/*이터러블 객체 : 문자열,배열,맵,셋 */

//for ~ of 문 사용 가능
//spread 연산자 [...]사용가능
//구조 분해 할당 가능 

/*이터러블 객체 : 문자열  */

let str = "hello";

for(let char of str) {
    console.log(char);
} //각 문자 순회 세로로 출력


let str_arr = [...str]; //str.split('');/특정문자기준 분열
console.log(str_arr); //가로로 출력

let[h, e] = str;
console.log(h,e);

/*이터러블 객체: 배열 */
let seasons = ['봄','여름','가을','겨울'];
// 제너레이터(Generator)와 일반적인 이터레이터(Iterator) 사이의 주요 차이점은 
// 제너레이터가 코드 블록을 통해 값을 반환하는 함수로서 동작한다는 것입니다. 
// 이는 함수를 잠시 중단하고 나중에 돌아올 수 있는 기능을 제공합니다. 
// 이에 반해 일반적인 이터레이터는 반복 가능한 객체의 요소를 반복하는 데 사용되는 객체입니다.

//이터레이터 : 컬렉션 (문자열, 배열, 맵 , 셋 등)을 순회하는 방법을 통일한 인터페이스
let seasons_iterator = seasons[Symbol.iterator](); //심볼은 유일한 식별자
console.log(seasons_iterator.next()); // {value: '봄', done: false}
console.log(seasons_iterator.next()); // {value: '여름', done: false}
console.log(seasons_iterator.next()); // {value: '가을', done: false}
console.log(seasons_iterator.next()); // {value: '겨울', done: false}
console.log(seasons_iterator.next()); // {value: undefined, done: true}
