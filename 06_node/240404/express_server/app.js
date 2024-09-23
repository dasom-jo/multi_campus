const path = require('path');
const fs = require('fs');

//폴더를생성
try {
    fs.readdirSync('public/uploads');
    //readdirSync():디렉토리를 동기적으로 읽음/파일과 디렉토리 목록을 얻을수잇음
} catch (err){
    console.log('uploads 폴더가 없어서 생성합니다');
    fs.mkdirSync('public/uploads');
    //Sync동기적
}

const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const cookieParser = require('cookie-parser');
const session = require('express-session');
//express애플리케이션을 생성하는모습
const app = express();

//환경변수를 로드하기위해 사용되는 코드
 //.env 파일을 읽어서 process.env에 추가
 //프로세스는 현재실행중인 프로세스에대한 정보를 제공하는 전역객체이다
require('dotenv').config();

//.env에 3000번 포트임안되면 8000번으로
app.set('port',process.env.PORT || 8000);

//미들웨어는 app 내부에서 작성되는 콜백함수 [요청과 응답사이에 거쳐가는 함수]
//req:요청객체, res:응답객체, next:다음의 미들웨어에 대한 엑세스권한을 갖는 함수
//미들웨어는 여러개도 가능하다[순서 중요]
//app.use()메서드를 사용하여 특정경로 또는 라우터에 미들웨어 함수에 마운트할수있습니다
app.use(
    //요청, 응답 콘솔에 기록
    //morgan 기록하는것 dev:간단한형태 / combined: 표준형식
    morgan(process.env.NODE_ENV == 'development' ? 'dev' : 'combined'),
    //정적파일제공:이미지,css,js
    //path.join():해당코드로 플랫폼과의 호환성으로 경로 찾기
    express.static(path.join(__dirname,'public')),
    //프론트에서 json 데이터를 보냈을때,파싱()
    //파싱:데이터를 읽고 정보를 추출
    express.json(),
    //form 데이터를 파싱
    //extended: true [qs 라는 패키지 사용]
    //extended: false [기본 모듈로 쿼리스트링 해석]
    //urlencoded: URL-encoded 형식으로 전송된 요청의 본문을 해석
    express.urlencoded({extended: true}),
    //요청(req)에 들어있는 쿠키를 해석해 req.cookies라는 객체에 담아줌
    // cookieParser((process.env.COOKIE_SECRET))
    cookieParser(),
    session({
        resave: false,//req가 들어올때 세션 변경이없어도 다시 저장할까요?
        saveUninitialized: false,//세션에 저장할 내역이 없는데, 초기화하지말까?
        secret: process.env.cookie_SECRET,//[필수항목] 비밀키
        cookie: {
            httpOnly: true //클라이언트에서 쿠키확인불가능 [보안]
        },
        name: 'connect.sid' //세션쿠키이름
    })
);

//multer 미들웨어 생성(장착x)
const imageUpload = multer({
    //파일 저장 위치및 파일명을 설정
    storage: multer.diskStorage({
        destination(req, file, done){
            done(null, 'public/uploads');
            //done은 콜백함수//uploads폴더는 위에서 이미생성됨
        },
        file(req,file,done){
            //extname는 path 함수로써 확장자를 추출 <jpg,txt...>
            const ext = path.extname(file.originalname);
            //basename은 확장자를제외한 기본이름을 추출
            const newFilename = path.basename(file.originalname, ext) + Date.now() + ext;
            //null은 에러를 가르킴
            done(null, newFilename)
        }
    }),
    limits:{ fileSize: 5 * 1024 * 1024 }// 파일 크기 제한 byte -> KB -> MB (5MB)
});

app.get('/',(req,res)=>{
    //쿠키설정
    res.cookie('name','쿠키의값',{
        expires: new Date(Date.now() + 10000),//쿠키만료시간
        httpOnly: false,
        path:'/'//유효한 경로를 지정하는옵션
    })
    //세션에 접근하면 해당세션을 사용가능
    req.session.name = '세션의 값';
    //sendFile 클라이언트에 전달
    res.sendFile(path.join(__dirname,'views/index.html'));
});

app.get('/about',(req,res)=>{
    console.log(req.cookies);
    console.log(req.session);
    res.send('어바웃입니다.')
});

app.get('/service',(req,res)=>{
    req.session.destroy(); //삭제
    res.send('서비스입니다.')
});

app.get('./upload',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/upload.html'))
});

app.post('/upload', imageUpload.single('image'),(req,res)=>{
    console.log(req.file);
    console.log(req.body.username);
    res.send('ok');
});
/* 정해지지 않은 요청에 대해서 404 에러 처리 */
app.use((req,res,next)=>{
    res.status(404).send('접근할수없는 경로');
});
/* 에러처리를 위한 미들웨어 */
app.use((err, req, res, next)=>{
    console.log(err);
    res.status(500).send('서버에 이상이 생겼으니, 관리자에게 문의해주세요.');
});

app.listen(app.get('port'),()=>{
    console.log(`포트${app.get('port')}번 익스프레스 서버실행`);
});

//기타
// const user = {
//     1234:'조다솜',
//     4567:'이대희',
//     8910:'이성경'
// }

//app.get('/',(req, res)=>{
//    res.send("안녕익스프레스? user넣으면 이름도 들어간단다");
//})

// app.use((req,res,next)=>{
//     console.log('1무조건실행되는연산');
//     next();
// },(req,res,next)=>{
//     console.log('1-1연결짓기닥가능');
//     next();
// })