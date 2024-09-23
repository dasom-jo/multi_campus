//비동시 메서드로 순서 유지하기
// 콜백지옥
const fs = require('fs');
console.log('시작');

fs.readFile('./25-1_readmeto.txt', 'utf8',(err,data)=>{
    if(err)throw err;
    console.log('1',data);
    fs.readFile('./25-1_readmeto.txt', 'utf8',(err,data)=>{
        if(err)throw err;
        console.log('2',data);
        fs.readFile('./25-1_readmeto.txt', 'utf8',(err,data)=>{
            if(err)throw err;
            console.log('3',data);
    })
})
})