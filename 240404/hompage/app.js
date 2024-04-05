/*app.js:Express 애플리케이션의 설정과 라우팅 관련 로직
Express 애플리케이션의 진입점(entry point) 역할을 합니다.
애플리케이션의 설정 및 미들웨어를 구성합니다.
라우팅을 설정하고, 각 경로에 대한 요청을 처리할 핸들러 함수를 정의합니다.
HTTP 서버를 생성하고, 해당 서버를 특정 포트에서 실행시킵니다.
일반적으로 전체 애플리케이션의 설정과 주요 로직을 담당합니다 */

require('dotenv').config();

const  morgan = require('morgan');
const express = require('express');

const app = express();

const fs = require('fs');
const path = require('path');

try {
    fs.readdirSync('public/profile');
} catch (err) {
    console.error('profile 폴더가 없어서, 생성합니다');
    fs.mkdirSync('public/profile');
}
//넌적스:동적인 HTML을 생성
const nunjucks = require('nunjucks');
nunjucks.configure('views',{
    //템플릿파일이 위치한 디렉토리설정
    express: app,//익스플레스와통합하여 render가능
    watch:true, //새로고침시 변경사항반영
    autoescape: true//자동이스케이프
});


const indexRouter = require('./routes');//index.js
const userRouter = require('./routes/user');//user.js

app.set('view engine', 'html');
//뷰엔진,익스프레스에게 html파일을 렌더링할때 사용할 뷰엔진이  html임을통보
app.set('views', path.join(__dirname, 'views'))
//뷰파일이 위치하는 디렉토리 설정
app.set('port', process.env.PORT || 8001);

app.use(
    morgan(process.env.NODE_ENV == 'development' ? 'dev' : 'combined'),
    express.static(path.join(__dirname, 'public')),
    express.json(),
    express.urlencoded({ extended : true })
);


// '/' 메인화면 뿌려주기
app.use('/', indexRouter);
// '/users' -> 사용자
app.use('/users', userRouter);
// "/posts" -> 게시물

//404
app.use((req, res, next) => {
    const err = new Error(`${req.url}은 접근할 수 없습니다.`)
    err.status = 404;
    next(err);
});

//에러처리
app.use((err, req, res, next) => {
    console.error(err);
    res.locals.error = process.env.NODE_ENV == 'development' ? err : {};
    res.locals.message = err.message;
    res.status(err.status || 500).render('error');
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '포트 익스프레스 연결 완료');
})