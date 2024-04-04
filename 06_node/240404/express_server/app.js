const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();

require('dotenv').config(); // .env 파일을 읽어서 process.env에 추가


app.set('port', process.env.PORT || 8000);

// 미들웨어는 app 내부에서 작성되는 콜백함수! [요청과 응답 사이에 거쳐가는 함수]
// req : 요청 객체, res : 응답 객체, next : 다음의 미들웨어에 대한 액세스 권한을 갖는 함수
// 미들웨어는 여러 개도 가능하다. [그래서 순서가 중요하다.]
app.use(
    /* 요청, 응답 콘솔에 기록 */
    morgan(process.env.NODE_ENV == 'development' ? 'dev' : 'combined'),
    /* 정적 파일 제공 */
    express.static(path.join(__dirname, 'public')),
    /* 프론트에서 json 데이터를 보냈을 때, 파싱 */
    express.json(),
    /* FORM 데이터를 파싱 */
    // extended : true [ qs라는 패키지 사용 ]
    // extended : false [ 기본 모듈로 쿼리스트링 해석 ]
    express.urlencoded({ extended : true }),
    /* 요청(req)에 들어있는 쿠키를 해석해 req.cookies 라는 객체에 담아줌 */
    // cookieParser((process.env.COOKIE_SECRET))
    cookieParser()(req, res, next),
    session({ 
        resave: false, // req가 들어올 때, 세션 변경이 없어도 다시 저장할까?
        saveUninitialized : false, // 세션에 저장할 내역이 없는데, 초기화하지말까?
        secret: process.env.COOKIE_SECRET, // [필수 항목] 비밀키
        cookie : {
            httpOnly: true // 클라이언트에서 쿠키 확인 불가능 (보안)
        },
        name: 'connect.sid' // 세션 쿠키 이름
    })
);

app.get('/', (req, res) => {
    /* 쿠키 설정 */
    res.cookie('name', '쿠키의 값', {
        expires : new Date(Date.now() + 10000),
        httpOnly : false,
        path: '/'
    })

    /* 세션 설정 */
    req.session.name = '세션의 값';
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/about', (req, res) => {
    console.log(req.cookies);
    console.log(req.session);
    res.send('어바웃 입니다.');
});

app.get('/service', (req, res) => {
    req.session.destroy();
    res.send('서비스 입니다.');
});


/* 정해지지 않은 요청에 대해서 404 에러 처리 */
app.use((req, res, next) => {
    res.status(404).send('접근할 수 없는 경로');
});

/* 에러처리를 위한 미들웨어 */
app.use((err, req, res, next)=> {
    console.error(err);
    res.status(500).send('서버에 이상이 생겼으니, 관리자에게 문의해주세요.');
});

app.listen(app.get('port'), () => {
    console.log(`포트 ${app.get('port')}번 익스프레스 서버 실행`);
});