let number = 15;

console.log(number++); // 15
console.log(number); // 16
console.log(++number);  // 17
console.log(number); // 17

console.log("-----------------");

let my_num = Number(prompt('숫자를 입력하세요'));
let isOdd = Boolean(my_num % 2);
console.log(isOdd); // 짝수면 false, 홀수면 true

console.log("-----------------");

let age = 30;
age += 1; 
console.log(age);
age -= 1; 
console.log(age);
age *= 2; 
console.log(age);
age **= 2; 
console.log(age);
age /= 3; 
console.log(age);
age %= 3; 
console.log(age);

