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
    express.json(),
    express.urlencoded({ extended: true })
);

app.listen(app.get('port'), () => {
    console.log(app.get('port') + "번 포트 연결 완료");
});