require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const path = require('path');
const { sequelize } = require('./models');

const app = express();

nunjucks.configure('views', {
    express: app,
    watch: true,
    autoescape: true
});

/* 시퀄라이즈 초기화 + (DB에 필요한 테이블을 생성해준다.) */
sequelize.sync({ force : false })
    .then(()=> {
        console.log('데이터베이스 연결 성공');
    })
    .catch (err => {
        console.error(err);
    });

app.set('port', process.env.PORT || 8001);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));

app.use(
    morgan('dev'),
    express.static(path.join(__dirname, 'public')),
    express.json(),
    express.urlencoded({ extended: true })
);

app.get('/', (req, res) => {
    // user 데이터 전체와 post 데이터 전체가 화면에 나올 것
    res.render('index');
});

app.post('/users', (req, res) => {
    console.log(req.body);
    res.send('OK');
    // 사용자 추가
});

// MULTER 를 설치하고, 싱글 이미지 업로드 될 수 있도록 해보기
// 업로드 경로 : public/img
app.post('/users/img', (req, res) => {

    res.send('OK');
})
// -----------------------
/*
    GET / -> 메인페이지 로드 (index.html)
    POST /users -> 사용자 추가
    POST /users/img -> 프로필 사진 업로드

*/
// -----------------------

app.use((req, res, next)=> {
    const err = new Error('없는 페이지 경로');
    err.status = 404;
    next(err);
})

app.use((err, req, res ,next)=>{
    res.send('에러');
})

app.listen(app.get('port'), () => {
    console.log(app.get('port') + "번 포트 연결 완료");
});