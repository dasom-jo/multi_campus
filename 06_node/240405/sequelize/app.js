require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { sequelize } = require('./models');
const User = require('./models/user');
const Op = require('sequelize').Op;

const app = express();

try {
    fs.readdirSync('public/img');
} catch (err) {
    console.log('img 폴더 생성');
    fs.mkdirSync('public/img')
}

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

// user 데이터 전체와 post 데이터 전체가 화면에 나올 것
app.get('/', async (req, res) => {
    const users = await User.findAll({
        attributes: ['userId', 'name', 'profileImg'],
        order: [[ 'createdAt', 'ASC' ]]
    });
    res.render('index', { users });
});

// 유저 등록 [개발 완료]
app.post('/users', async (req, res) => {
    const exUser = await User.findOne({
        where: {
            userId: { [Op.eq]: req.body.userData.userId }
        }
    });
    console.log(exUser);
    if (exUser) {
        // [과제] 존재하면 NOT OK가 아니라, 수정하고 OK로 반환되도록 수정 가능~
        res.send('NOT OK');
    } else {
        await User.create(req.body.userData);
        res.send('OK');
    }
});

const profileUpload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'public/img/');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    limits: {fileSize : 5 * 1024 * 1024}
});

// 프로필 사진 등록 [개발 완료]
app.post('/users/img', profileUpload.single("profileImage"), (req, res) => {
    res.send(req.file.filename);
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