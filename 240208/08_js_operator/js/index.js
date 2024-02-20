let number = 15;

console.log(number++); //15
console.log(number);//16
console.log(++number);//17
console.log(number);//17
//t시험에 낼것임 뒤에 ++붙으면 일단 원래값 나오고 다시 되물으면 값이 변경되서 나옴
//앞으로 쓰면 바로나옴 
console.log("----------------")
let my_num = Number(prompt('숫자를 입력하세요'));
let isOdd = Boolean(my_num % 2);
console.log(isOdd); //짝수면 false 홀수면 true

console.log("----------------")

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

console.log("----------------")

let age1 =10;
let exAge1 = --age1;

console.log(age1); //9
console.log(exAge1);//9


// age = 10;
// let newAge = ++age;
// console.log(age);//10
// console.log(newAge);//11

// let age = 10;
// let exAge = Age--;
// console.log(age);//9
// console.log(exAge);//10

// age = 10;
// let newAge = age++;
// console.log(age);//11
// console.log(newAge);//10


console.log("----------------")
// <,>,<=,>=, ==, !=

