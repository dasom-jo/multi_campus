const express = require('express');
const multer = require('multer');

const path = require('path');
const router = express.Router();

const profileUpload = multer({
    //diskStorage()파일을 저장하는방법
    storage: multer.diskStorage({
        destination(req,file,done){
            done(null, 'public/profile')
        },//파일이름지정법
        filename(req,file,done){
            const ext = path.extname(file.originalname);
            const newFilename = path.basename(file.originalname, ext) + Date.now() + ext;
            done(null, newFilename);
        }
    }),
    limits: { fieldSize: 5 * 1024 * 1024 }
});

router.route('/')
    // GET /users/ - "사용자 페이지 출력"
    .get((req, res)=>{
        //form형식
        res.render('index', { users });
    })
    // POST /users/ - "사용자 페이지 출력"
    .post(profileUpload.single("userprofile"),(req, res) => {
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
        res.redirect('/users');
    })
    .put((req,res)=>{
        res.send('사용자 수정');
    })
    .delete((req,res)=>{
        res.send('사용자 삭제');
    })

// GET /users/detail - "사용자 페이지 출력"
router.get('/detail',(req,res)=>{
    res.send(`내 정보 상세 조회`);
});

// GET /users/:id - "사용자 아이디 출력"
router.get('/:id',(req, res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send(`${req.params.id}를 통한 사용자 정보조회`);
});

module.exports = router;

//user.js의 역할
/*사용자 관련 기능을 모듈화
1.사용자 관련된 기능을 담당하는 모듈입니다.
2.사용자 정보를 조회하거나 생성, 수정, 삭제하는 함수들을 포함합니다.
3.주로 MVC(Model-View-Controller) 아키텍처에서는 모델(Model) 역할을 수행하여
데이터베이스와의 상호작용을 담당합니다.
4.사용자 관련 로직을 분리하여 모듈화하고,
코드의 구조를 유지보수하기 쉽게 만듭니다.
*/