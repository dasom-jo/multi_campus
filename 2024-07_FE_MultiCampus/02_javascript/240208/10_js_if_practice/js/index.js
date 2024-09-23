function chk() {
    let num = Number(document.getElementById('num_input').value);
    if (!num) {
        document.write('에러');
    } else if (num % 5 == 0 || num % 7 === 0) {
        document.write('통과');
    } else {
        document.write('통과 실패');
    }
}

console.log(Number('Two')) //  NaN
typeof(Number('Two')); // number
typeof(NaN); // number