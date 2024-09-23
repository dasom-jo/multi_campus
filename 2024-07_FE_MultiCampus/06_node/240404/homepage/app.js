require('dotenv').config();

const morgan = require('morgan');
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

const nunjucks = require('nunjucks');
nunjucks.configure('views', {
    express: app,
    watch: true,
    autoescape: true
});

const indexRouter = require('./routes');
const userRouter = require('./routes/user');

app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'))
app.set('port', process.env.PORT || 8001);

app.use(
    morgan(process.env.NODE_ENV == 'development' ? 'dev' : 'combined'),
    express.static(path.join(__dirname, 'public')),
    express.json(),
    express.urlencoded({ extended : true })
);

// "/" -> 메인 화면 뿌려주기
app.use('/', indexRouter);
// "/users" -> 사용자
app.use('/users', userRouter);
// "/posts" -> 게시물

// 404 처리
app.use((req, res, next) => {
    const err = new Error(`${req.url}은 접근할 수 없습니다.`)
    err.status = 404;
    next(err);
});

// 에러 처리
app.use((err, req, res, next) => {
    console.error(err);
    res.locals.error = process.env.NODE_ENV == 'development' ? err : {};
    res.locals.message = err.message;
    res.status(err.status || 500).render('error');
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '포트 익스프레스 연결 완료');
})