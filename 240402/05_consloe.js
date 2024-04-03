const str = '가나다';
const num = 402;
const bool = falsel;
const obj = {
    outside: {
        inside: {
            key: 'value'
        }
    }
}

console.time('전체시간');
console.log('평범함로그','쉼표로 구분해','여러값 출력가능');
console.log(str,num,bool);
console.error('에러 메세지는  error에 담아주세요');

console.table([{name:'dahea',birth:12998},{name:'dasom',birth:1998}]);

console.log();