require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const path = require('path');
const { sequelize } = require('./models');
const multer = require('multer');
const fs = require('fs');
const User = require('./models/user');
const Op = require('sequelize').Op;


const app = express();
try {
    fs.readdirSync('public/img');
} catch (err) {
    console.log('foler maker');
    fs.mkdirSync('public/img');
}
nunjucks.configure('views',{
    express: app,
    watch: true,
    autoescape: true
})
//시퀄라이즈 초기화 (db에 필요한테이블을 생성해준다))
sequelize.sync({ force: false }) //여기트루면 할때마다 지워짐
    .then(()=>{
        console.log('데이터베이스연결성공');
    })
    .catch(err=>{
        console.error(err);
    })

app.set('port', process.env.PORT || 8001);
app.set('view engine', 'html');
app.set('views', path.join(__dirname,'views'))

app.use(
    morgan('dev'),
    //css추가
    express.static(path.join(__dirname, 'public')),
    express.json(),
    express.urlencoded({extended: true})
);

    //user 데이터 전체와 post 데이터 전체가 화면에 나올것 (1)
app.get('/',async(req,res)=>{
    const users = await User.findAll({
        attributes:['userId',"name","user.profileImg"],
    });
    res.render('index');
});

//유저등록[개발완료]
app.post('/users',async(req,res) => {
    const exUser = await User.findOne({
        where: {
            userId : { [Op.eq] : req.body.userId }
        }
    });
    if(exUser){
        res.send('NOT OK');
    }else{
        await User.create(req.body.userDate);
        res.send('OK');
    //사용자추가
    }
    await User.create(req.body.userDate);
    //console.log(req.body);
    res.send('OK');
    //사용자추가
});
//multer 를 설치하고 싱글 이미지 업로드 될수있도록해보기
const profileUpload = multer({
    storage: multer.diskStorage({
        destination(req,file, done){
            done(null, 'public/img/');
        },filename(req,file, done){
            const ext = path.extname(file.originalname);
            const newFilename = path.basename(file.originalname,ext)+Date.now()+ext;
            done(null, newFilename)
        }
    }),
    limits: { fileSize: 5 * 1024 * 1024 }
});



//업로드경로 :public/img //프로필사진등록 [개발완료]
app.post('/users/img',profileUpload.single("profileImage"), (req,res) => {
    res.send(req.file.filename)//업로드경로이름
})
//-----------------
/*
(1)/GET / -> 메인페이지 로드 (index.html)
(2)POST /users -->사용자 추가 ()
(3)POST /users/img --> 프로필사진업로드()
(4)수정삭제(과제)
*/



//------------------------
//404
app.use((req,res,next)=>{
    const err = new Error('찾을수없는 경로입니다 (404)');
    err.status = 404;
    next(err);
})

//에러처리미들웨어
app.use((err,req,res,next)=>{
    res.send('error')
})



app.listen(app.get('port'),()=>{
    console.log(app.get('port') + '번포트연결완료');
});
