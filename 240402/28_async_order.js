//비동시 메서드로 순서 유지하기

const fs = require('fs');
console.log('시작');

fs.readFile('./25-1_readmeto.txt', 'utf8')
    .then((data)=>{
        console.log('1',data);
        return fs.readFile('./25-1_readmeto.txt', 'utf8')
    })
    .then((data)=>{
        console.log('2',data);
        return fs.readFile('./25-1_readmeto.txt', 'utf8')
    })
    .then((data)=>{
        console.log('3',data);
        return fs.readFile('./25-1_readmeto.txt', 'utf8')
    })
    .catch((err)=>{
        console.error(err);
    })

console.log('끝');