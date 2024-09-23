// const num1 = 0;
// num1 = 1; // TypeError: Assignment to constant variable.

// const num2; // SyntaxError

// let num1 = 0;
// num1 = 3;
// console.log(num1);

let month = 4;
let day = 1;

const date = {month, day};
console.log(date);
date["month"] = 5;
console.log(date);