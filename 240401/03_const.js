//TypeError: Assignment to constant variable.
// const num1 = 0;
// num1 = 1;

//SyntaxError: Missing initializer inconst declaration
//const num2;

// let num1=0;
// num1=3;
// console.log(num1);

let month =4;
let day = 1;
const date = {month,day};
console.log(date);
date["month"] = 5; //덮어쓰여짐
console.log(date);