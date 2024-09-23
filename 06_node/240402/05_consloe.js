const str = '가나다';
const num = 402;
const bool = false;
const obj = {
    outside: {
        inside: {
            key: 'value'
        }
    }
}

console.time('전체 시간');
console.log('평범함로그','쉼표로 구분해','여러값 출력가능');
console.log(str,num,bool);
console.error('에러 메세지는  error에 담아주세요');

console.table([{name:'짱구',birth:1998},{name:'유리',birth:1998}]);
//표를만드는법
console.log(obj, {colors: false, depth: 2});
//객체를 추가
console.log(obj, { colors: true, depth: 1});

console.time('시간측정');
for (let i = 0; i < 100; i++) {}
console.timeEnd('시간측정');

function a () {
    b();
}

function b() {
    console.trace('에러위치추적')
}

a();

console.timeEnd('전체시간');