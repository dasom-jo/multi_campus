//fs 18,19번을 이용해 폴더 생성, 파일 생성, 이름 변경,
//파일 삭제, 폴더 삭제 진행해보는 파일 생성하기 (주석 필수!!!!)
//fs내장모듈중하나로 파일시스템관련하여다양한작업을수행
//w는 파일쓰기전용
//fd파일을 열거나 쓸때
//선언후 모듈사용가능

const fs = require('fs').promises;
const constants = require('fs').constants;

async.function.creatFile() {
    try{
        //fs.access()파일권한:내부에서 파일이 존재하는지 먼저 찾는다!
        //await는 함수호출앞에사용
        await fs.access('./folder', constants.F_OK | constants.W_OK | constants.R_OK);
        //파일이있을경우 해당 출력
        throw '파일이있습니다';
    }//파일을 못찾아 에러가 뜰경우
        catch(err){
        //만약 에러로 ENOENT가 뜰경우
            if (err.code === 'ENOENT') {
            console.log('폴더 없음');
            //파일을 만들어준다
            await fs.mkdir('./folder');
        } else {
        //그것도 아니면 거부이행 에러 출력
            throw err;
    }}
    //fs.open():폴더만들기
    console.log('폴더 만들기 성공');
    const fd = await fs.open('./folder/file.js', 'w');
    console.log('빈 파일 만들기 성공', fd);
    //fs.rename()이름바꾸기
    const fs = fs.rename('./folder/file.js', './folder/newfile.js');
    console.log('이름 바꾸기 성공');
}
creatFile().catch(err => console.error(err));