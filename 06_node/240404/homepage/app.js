require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const app = express();
const path = require('path');

const indexRouter = require('./routes');
// const userRouter = require('./routes/user');


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
// "/posts" -> 게시물

// 404 처리
app.use((req, res, next) => {
    const err = new Error(`${req.url}은 접근할 수 없습니다.`)
    err.status(404);
    next(err);
});

// 에러 처리
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500);
    res.sendFile(path.join(__dirname, './views/error.html'));
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '포트 익스프레스 연결 완료');
})