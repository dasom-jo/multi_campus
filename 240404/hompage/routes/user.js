const express = require('express');
const multer = require('multer');
const router = express.Router();
const path = require('path');

const users = [];

const profileUpload = multer({
    // 파일 저장 위치 및 파일명을 설정
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'public/profile');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            const newFilename = path.basename(file.originalname, ext) + Date.now() + ext;
            done(null, newFilename);
        }
    }),
    limits: { fileSize: 5 * 1024 * 1024 } // 파일 크기 제한 byte -> KB -> MB (5MB)
});

router.route('/')
    // GET /users/ - "사용자 페이지 출력"
    .get((req, res) => {
        //console.log(users);
        res.render('index', {users});
    })
    // POST /users/ - "사용자 페이지 출력"
    .post( profileUpload.single('userprofile'),(req, res) => {
        console.log(req.file);
        console.log(req.body);
        users.push({
            id : req.body.userid,
            pw: req.body.userpw,
            name: req.body.username,
            birth: req.body.userbirth,
            tel: req.body.usertel,
            gender: req.body.gender,
            nation: req.body.nation,
            email: req.body.useremail,
            profile: req.file.filename
        });
        //req.locals.users = req.body;
        res.redirect('/users');
    })
    .put((req, res) => {
        res.send('사용자 수정');
    })
    .delete((req, res) => {
        res.send('사용자 삭제');
    })



router.get('/detail',(req, res)=>{
    res.send('내 정보 상세조회');
});

//get 사용자 아이디 풀력
router.get('/page/:id', (req, res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send(`${req.params.id}를 통한 사용자 정보조회`);
});

// router.get('/detail', (req, res)=>{
//     res.send(`내정보상세조회는 실행안됨 코드가 위에서 아래로 흘러서 아이디에걸림`);
// });


module.exports = router;

