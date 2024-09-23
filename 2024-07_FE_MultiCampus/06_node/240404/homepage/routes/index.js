const express = require('express');

const router = express.Router();
const path = require('path');

// GET / - "메인화면 출력"
router.get('/', (req, res) => {
    res.render('index');
});

module.exports = router;