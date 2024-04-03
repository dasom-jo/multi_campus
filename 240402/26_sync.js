//순서 맞음 - 동기매서드
const fs = require('fs');

console.log('시작');

let data = fs.readFileSync('./25-1_readmeto.txt', 'utf-8');
console.log('1번',data);

data = fs.readFileSync('./25-1_readmeto.txt', 'utf-8');
console.log('2번',data);

data = fs.readFileSync('./25-1_readmeto.txt', 'utf-8');
console.log('3번',data);

console.log('끝');