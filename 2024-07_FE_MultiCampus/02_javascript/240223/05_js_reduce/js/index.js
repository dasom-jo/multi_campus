/* reduce */
// 배열의 각 요소에 대해 주어진 함수를 실행하고, "하나의 결과값을 반환"

let nums = [1, 2, 3, 4, 5];

// let total = 0;
// nums.forEach(num => total += num);
// console.log(total);

// forEach((요소, 인덱스, 배열) => {})
// map((요소, 인덱스, 배열) => {})
// filter((요소, 인덱스, 배열) => {})
// reduce((누산기, 요소, 인덱스, 배열) => {}, 초기값)
let total = nums.reduce((tot, num)=> {
    console.log(tot, num);
    return tot + num;
}, 0);
console.log(total);

let strArr = ["Hello", "Nice", "JavaScript"];
// let result = strArr.reduce((acc, str) => acc.concat(str.length), []);
let result = strArr.reduce((acc, str) => [...acc, str.length], []);
console.log(result); // [5, 4, 10]