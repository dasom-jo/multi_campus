//순서 안맞음 -비동기
//async 키워드 함수앞에 사용하여 항상 promise를 반환한다고 선언
//async 함수 내부에서 await 키워드를 사용하야 promise가 처리될떄가지기다림
const fs = require('fs');

console.log('시작');

fs.readFile('./25-1_readmeto.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log('1번', data);
});
fs.readFile('./25-1_readmeto.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log('2번', data);
});
fs.readFile('./25-1_readmeto.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log('3번', data);
});

console.log('끝');