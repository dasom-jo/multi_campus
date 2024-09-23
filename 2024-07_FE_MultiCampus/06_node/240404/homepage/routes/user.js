const express = require('express');
const multer = require('multer');

const path = require('path');
const router = express.Router();

const profileUpload = multer({
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
    limits: { fileSize: 5 * 1024 * 1024 }
});

const users = [];

router.route('/')
    // GET /users/ - "사용자 페이지 출력"
    .get((req, res) => {
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
    .put((req, res) => {
        res.send('사용자 수정');
    })
    .delete((req, res) => {
        res.send('사용자 삭제');
    })

// GET /users/detail - "사용자 페이지 출력"
router.get('/detail', (req, res) => {
    res.send(`내 정보 상세 조회`);
});

// GET /users/:id - "사용자 아이디 출력"
router.get('/:id', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(`${req.params.id}를 통한 사용자 정보 조회`);
});


module.exports = router;