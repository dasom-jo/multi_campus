require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { sequelize } = require('./models');
const User = require('./models/user');
const Post = require('./models/post');
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
sequelize.sync({ force : true })
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
app.get('/', async (req, res, next) => {
    try {
        const users = await User.findAll({
            attributes: ['userId', 'name', 'profileImg'],
            order: [[ 'createdAt', 'ASC' ]]
        });
        const posts = await Post.findAll({
            order: [['createdAt', 'DESC']]
        });
        res.render('index', { users, posts });
    } catch (err) {
        next(err);
    }
});

app.post('/posts', async (req, res, next) => {
    try {
        const writer = await User.findOne({
            where: {
                userId: { [Op.eq]: req.body.postData.userId }
            }
        });
        if (writer) {
            await Post.create( req.body.postData );
            return res.send('등록 완료')
        }
        res.send('없는 사용자')
    } catch (err) {
        console.error(err);
        next(err);
    }
});

// 유저 등록 [개발 완료]
app.post('/users', async (req, res, next) => {
    try {
        const exUser = await User.findOne({
            where: {
                userId: { [Op.eq]: req.body.userData.userId }
            }
        });
        if (exUser) {
            await exUser.update(req.body.userData);
            res.send('수정 완료');
        } else {
            await User.create(req.body.userData);
            res.send('등록 완료');
        }
    } catch (err) {
        next(err);
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
});

app.delete('/users/:id', async (req, res, next) => {
    console.log(req.params.id);
    try {
        await User.destroy({
            where: { userId: { [Op.eq]: req.params.id }}
        });
        res.send('OK')
    } catch (err) {
        console.error(err);
        next(err);
    }
});

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