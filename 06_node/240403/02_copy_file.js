//20.파일을복사
//copyFile() 메서드는 파일을 복사하고 목적지에 새로운 파일을 생성
const fs = require('fs').promises;

async function createCopyFile(){
    try{
        await fs.copyFile('readme.txt','copy.txt')
        console.log('복사완료');
    } catch (error) {
        console.error(error);
    };
}

createCopyFile()



