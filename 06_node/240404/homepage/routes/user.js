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