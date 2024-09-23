let textTen = '10';
let textFive = '5';
let five = 5;

// 숫자 연산보다 문자 연결 연산이 우선 적용된다.
console.log(textTen + textFive); // '105'
console.log(textTen + five); // '105'
console.log(Number(textTen) + five); // 15
console.log("-------------");

// Promotion
console.log(-1 * '100'); // -100\
console.log("-------------");

// Number Casting
console.log(
    Number('7'),
    Number('Two'),
    Number(true), // 1
    Number(false), // 0
    Number(null),
    Number(undefined)
);

// String Casting
console.log(
    String(3),
    String(true),
    String(false),
    String(null),
    String(undefined)
);

console.log(
    Boolean(0), // false
    Boolean(-5), // true
    Boolean(1.2), // true
    Boolean(2), // true

    Boolean(''),  // false
    Boolean('0'), // true
    Boolean(' '), // true
    Boolean('true'), // true
    Boolean('false'), // true

    Boolean(null), // false
    Boolean(NaN), // false
    Boolean(undefined) // false
);
