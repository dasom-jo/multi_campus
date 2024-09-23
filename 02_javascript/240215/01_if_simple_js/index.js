let number = Number(prompt('숫자를 입력해주세요'));

if (number >= 50) {
    document.write (`크다`);
} else {
    document.write (`작다`);
}



// 간단하게 쓰는법 small = (num < num2) ? num1 : num2;

msg = (number >= 50) ? "크다" : "작다";
console.log(msg) 