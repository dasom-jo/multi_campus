const express = require('express');

const router = express.Router();
const path = require('path');

// GET / - "사용자 페이지 출력"
router.get('/', (req, res) => {
    res.send('사용자 페이지');
});

// GET / - "사용자 아이디 출력"
router.get('/page/:id', (req, res) => {
    res.send(`${req.params.id}의 페이지`);
});

module.exports = router;