const fs = require('fs');

console.log('시작');
fs.readFile('./readme2.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log('1번', data);
});
fs.readFile('./readme2.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log('2번', data);
});
fs.readFile('./readme2.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log('3번', data);
});
console.log('끝');
