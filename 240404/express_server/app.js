const path = require('path');
const fs = require('fs');

try {
    fs.readdirSync('public/uploads');
} catch(err) {
    console.log('uploads 폴더가없어서 생성됩니다');
    fs.mkdirSync('public/uploads');
}

const express = require('express');
const morgan = require('morgan');

const multer = require('multer');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();

require('dotenv').config();//.env파일을 읽어서 process.env에추가


app.set('port', process.env.PORT || 8000);

// const user = {
//     1234:'조다솜',
//     4567:'이대희',
//     8910:'이성경'
// }

// app.get('/', (req, res)=>{
//     res.send("안녕익스프레스? user넣으면 이름도 들어간단다");
// })


//미들연산(반복문)코드는위에서아래로흐르지만 미들웨어는선택에따라 app내부에서 작성되는콜백함수
//요청과응답사이에 거쳐가는 함수
//req:요청객체,res:응답객체,next:그다음의 미들웨어에대한 엑세스권한을갖는함수
//미들웨어는 여러개가능 그래서 순서가 중요하다
// app.use((req, res, next)=>{
//     console.log('1무조건 실행되는 연산');
//     next();//res.sendFile 진행을위해,
// },(req, res, next)=>{
//     console.log('1-1연결짓기닥가능');
//     next();//res.sendFile 진행을위해,
// },(req, res, next)=>{
//     console.log('1-2연결짓기닥가능');
//     next();//res.sendFile 진행을위해,
// })

// app.use((req, res, next)=>{
//     console.log('2반복가능');
//     next();//res.sendFile 진행을위해,
// })

// app.use((req, res, next)=>{
//     console.log('3순서몹시중요');
//     next();//res.sendFile 진행을위해,
// })

// app.use(morgan('dev'));
app.use(
    /*정적파일제공 */
    morgan(process.env.NODE_ENV == 'development'? 'dev' : 'combined'),
    /*프론트에서 json 데이터를 보냈을때 , 파싱 */
    express.json(),
    /*FORM 데이터를 파싱 */
    //extended: true [qs라는 패키지사용]
    //extended : false [기본모듈로 쿼리스트링해석]
    express.urlencoded({ extended : true }),
    //요청(req)에 들어있는 쿠키를 해석해 req.cookies라는 객체에 담아줌
    //cookieParser((process.env.COOKIE_SECRET))
    cookieParser(),
    session({
        resave: false, //req가 들어올때 세견변경이 없어도 다시 저장할까?
        saveUninitialized: false, //세션에 저장할내역이없는데,초기화하지말까
        secret:process.env.COOKIE_SECRET,
        cookie: {
            httpOnly:true //클라이언트에서 쿠키확인불가능(보안)
        },
        name: 'connect.sid' //세션쿠키이름
    })
);

// app.use((req,res,next)=>{
//     console.log('더블미들웨어실행');
//     cookieParser()(req,res,next);
// });

//multer미들웨어 생성
const imageUpload = multer({
    //파일저장위치및 파일명을 설정
    storage: multer.diskStorage({
        destination(req, file, done){
            done(null, 'public/uploads');
        },
        filename(req, file, done){
            //file.originmame [jju.jpg]
            const ext = path.extname(file.originalname);//[jpg]
            const newFilename = path.basename(file.originalname, ext) + Date.now() + ext;//[jju4564.jpg]
            done(null, newFilename);
        }
    }),
    limits:{ fileSize: 5 * 1024 * 1024 }//파일크기 제한 byte -> kb -> mb(5mb)
});

app.get('/', (req,res)=>{
    //쿠키설정
    res.cookie('name','쿠키의값',{
        expires: new Date(Date.now() + 10000),
        httpOnly:false,
        path: '/'
    })
    //세션설정
    req.session.name = '세션의 값';
    req.session.save(()=>{
        res.sendFile(path.join(__dirname,"views/index.html"));
    })
});

// app.get('/', (req, res)=>{
//     res.sendFile(path.join(__dirname,"views/index.html"));
// })

app.get('/about', (req, res)=>{
    console.log(req.cookies);//수정?
    console.log(req.session);//확인?
    // console.log('무조건진행되는연산');
    res.send('어바웃입니다');
});

app.get('/service', (req, res)=>{
    req.session.destroy();//삭제
    // console.log('무조건진행되는연산');
    res.send('서비스입니다');
});

//사진업로드
app.get('/upload', imageUpload.single('image') ,(req, res)=>{

    res.sendFile(path.join(__dirname,"views/upload.html"));
});
//사진업로드
app.post('/upload',(req, res)=>{
    console.log(req.body.image);
    console.log(req.body.username);
    res.send('ok')
})

// app.get('/login', (req, res)=>{
//     // console.log('무조건진행되는연산');
//     throw new Error ('에러를 반환해봅시다')
// });

//정해지지않은 요청에대해서 404에러처리
app.use((req, res, next)=>{
    //res.status(404).sendFile(path.join(__dirname,"view.index.html"))
    res.status(404).send('접근할수없는경우')
    //next(new Error('없는페이지'))
})
//에러처리를 위한 미들웨어
app.use((err, req, res, next)=>{
    console.error(err);//터미널에찍히는 에러사유
    res.status(500).send('에러 미들웨어,에러'+ err.message)//사용자한테보여지는에러
}) //listen 보다 위에


app.listen(app.get('port'), ()=>{
    console.log(`익스포트 ${app.get('port')}}번스프레스 서버 실행`);
})