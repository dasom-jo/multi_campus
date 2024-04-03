
//콜백헬
// const fs = require('fs');

// fs.writeFile('./write.txt','글을 입력',(err)=>{//파일 글을 생성
//     if(err){
//         throw err;
//     }
//     fs.readFile('./write.txt','utf8',(err,data)=>{// 파일이잘되었는디
//         if(err){
//             throw err;
//         }
//         console.log(data);
//     })
// })

const fs =require('fs').promises;

fs.writeFile('./write.txt','프로미스방식')// 파일생성
    .then(()=>{
        return fs.readFile('./write.txt','utf8')
    })//파일확인햇어 여기잇네
    .then((data)=>{
        console.log(data); //그 데이터가 여기에 찍힘
    })
    .catch((err)=>{
        console.error(err);
    })