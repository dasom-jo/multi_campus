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
//op는 데이터베이스 쿼리에서 다양한 비교및 논리 연산을 수행

const app = express();
//express 애플리케이션 생성

try {
    fs.readdirSync('public/img');
} catch (err) {
    console.log('img 폴더 생성');
    fs.mkdirSync('public/img')
}
//nunjucks 템플릿 엔진 설정
//views템플릿 지정장소
nunjucks.configure('views',{
    express:app,
    watch:true, //파일변경을 감지
    autoescape:true
});

//시퀄라이스 초기화+db에 필요한 테이블을 생성해준다
//force: false 모델과 연결된 데이터베이스 동기화삭제
//sequelize.sync()시퀄라이즈와 디비간의 동기화담당
sequelize.sync({ force: false })//여기트루면 할때마다 지워짐
    .then(()=>{
        console.log('데이터베이스 연결 성공');
    })
    .catch(err =>{
        console.error(err);
    });

app.set('port',process.env.PORT || 8001);
app.set('view engine', 'html');
app.set('views', path.join(__dirname,'views'));

app.use(
    morgan('dev'),
    express.static(path.join(__dirname,'public')),
    //public에있는 정적파일을 클라이언트에게 제공
    express.json(),
    //클라이언트가json형태로 전달하면 js로 변환
    express.urlencoded({ extended: true })
);

//user 데이터 전체와 post 데이터 전체가 화면에 나올것
app.get('/',async(req, res)=>{
    //findAll:디비에서 조건에맞는 레코드조회
    const users = await User.findAll({
        attributes: ['userId','name','profileImg'],
        //attributes 어떤 열을 가져올지
        order: [['createdAt', 'ASC']]
        //createdAt오름차순으로
    });
    res.render('index',{users});
});

//유저등록[개발완료]
app.post('/user', async (req, res) => {
    const exUser = await User.findOne({
        where: {
            // /Op.eq 동등 비교연산자를 나타내는 특수한연산자
            //userId ==req.body.userDate.userId
            userId: {[Op.eq]: req.body.userDate.userId }
        }
    });
    console.log(exUser);
    //조회된 사용자정보가 존재하는지확인
    if (exUser){
        //이미존재하므로
        res.send('NOT OK');
    } else {
        //존재하지않으면 새롭게생성
        await User.create(req.body.userDate);
        res.send('OK');
    }
});

const profileUpload = multer({
    storage: multer.diskStorage({
        destination(req, file, done){
            done(null, 'public/img/');
        },
        filename(req,file, done){
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    limits:{ fileSize: 5* 1024 * 1024 }
});

//프로필 사진 등록[개발완료]
app.post('./users/img',profileUpload.single('profileImage'),(req, res) =>{
    res.send(req.file.filename);
} )
// -----------------------
/*
    GET / -> 메인페이지 로드 (index.html)
    POST /users -> 사용자 추가
    POST /users/img -> 프로필 사진 업로드

*/
// -----------------------

app.use((req, res, next)=>{
    const err = new Error('없는 페이지 경로');
    err.status = 404;
    next(err);
})

app.use((err, req, res, next)=>{
    res.send('에러');
})

app.listen(app.get('port'),()=>{
    console.log(app.get('port')+'번포트 연결완료');
});
