const express = require('express');

const router = express.Router();
const path = require('path');

router.route('/')
    // GET /users/ - "사용자 페이지 출력"
    .get((req, res) => {
        console.log(a);
        res.send('사용자 전체 조회 페이지');
    })
    // POST /users/ - "사용자 페이지 출력"
    .post((req, res) => {
        res.send('사용자 등록');
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

