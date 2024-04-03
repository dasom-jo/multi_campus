//20.파일을감시
//fs.watch() 함수는 Node.js에서 파일 시스템의 변경 사항을 모니터링하기 위해 사용됩니다
//copyFile() 메서드는 파일을 복사하고 목적지에 새로운 파일을 생성
const fs = require('fs');

async function monitorFile(){
    try{
        await fs.writeFile('target','');
        if(err){
            console.log('파일생성중 오류발생:',err);
        } else {
            console.log('target.txt파일을 변경하거나 삭제하세요');
        }
    }
};



// fs.watch('./target.txt',(eventType,filename)=>{
//     console.log(eventType,filename);
// })

monitorFile()


