
//fs 18,19번을 이용해 폴더 생성, 파일 생성, 이름 변경,
//파일 삭제, 폴더 삭제 진행해보는 파일 생성하기 (주석 필수!!!!)
//fs.readdir(경로,콜백):(배열안에)폴더안에 내용물확인
//fs.unlink(경로,콜백):파일삭제(파일없음에러)
//fs.rmdir(경로,콜백):폴더삭제/폴더안에 파일이잇다면 에러

//19.폴더 내용확인및삭제
const fs = require('fs').promises;

async function deleteFolder() {
    try{
        //폴더내용을 확인
        const dir = await fs.readdir('./folder');
        console.log('폴더내용 확인',dir);
        //만약에 newfile이라면
        if(dir[0]=='newfile.js'){
            //삭제합시다
            //파일삭제
            await fs.unlink('./folder/' + dir[0]);
            console.log('파일삭제 성공');
            //폴더삭제
            await fs.rmdir('./folder');
            console.log('폴더삭제 성공');
        }
    } catch (err) {//만약 폴더가 이미 삭제되는등 존재하지않는다면
        console.error('폴더 혹은 파일이 존재하지않습니다',err);
    }
}


//fs 18,19번을 이용해 폴더 생성, 파일 생성, 이름 변경,
//파일 삭제, 폴더 삭제 진행해보는 파일 생성하기 (주석 필수!!!!)
//fs.readdir(경로,콜백):(배열안에)폴더안에 내용물확인
//fs.unlink(경로,콜백):파일삭제(파일없음에러)
//fs.rmdir(경로,콜백):폴더삭제/폴더안에 파일이잇다면 에러

//19.폴더 내용확인및삭제
const fs = require('fs').promises;

async function deleteFolder() {
    try{
        //폴더내용을 확인
        const dir = await fs.readdir('./folder');
        console.log('폴더내용 확인',dir);
        //만약에 newfile이라면
        if(dir[0]=='newfile.js'){
            //삭제합시다
            //파일삭제
            await fs.unlink('./folder/' + dir[0]);
            console.log('파일삭제 성공');
            //폴더삭제
            await fs.rmdir('./folder');
            console.log('폴더삭제 성공');
        }
    } catch (err) {//만약 폴더가 이미 삭제되는등 존재하지않는다면
        console.error('폴더 혹은 파일이 존재하지않습니다',err);
    }
}

deleteFolder()