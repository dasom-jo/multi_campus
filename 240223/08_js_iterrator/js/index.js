//iterable : 순서대로 처리가 가능한
//이터러블 객체: 문자열 배열 맵 셋
//for -of 문 사가능
//...전개연산자  사용가능
//구조분해 할당 가능


//이터러블 객체 문자열
let str = 'Hello';
for (let char of str) {
    console.log(char);
}

let atr_arr = [...str];

let [h, e] = str;
console.log((h,e));

//이터러블 객체: 배열;
let arr = ['봄','여름','가을','겨울'];
console.log(arr[Symbol.asyncIterator()]);
