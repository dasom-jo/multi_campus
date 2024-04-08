require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { sequelize } = require('./models')

const app = express();

sequelize.sync({ force: true })
    .then(() => {
        console.log('DB 연결 성공');
    })
    .catch (err => {
        console.error(err);
    });

app.set('port', process.env.PORT || 8000);

app.use(
    morgan('dev'),
    express.static(path.join(__dirname, 'public')),
    express.json(),
    express.urlencoded({ extended: true })
);

app.listen(app.get('port'), () => {
    console.log(app.get('port') + "번 포트 연결 완료");
});