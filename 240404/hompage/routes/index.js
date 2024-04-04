const express = require('express');
const router = express.Router();
const path = require('path');
//get 메인화면 출력
router.get('/',(req, res)=>{
    res.render('index');
    //res.sendFile(path.join(__dirname, '../views/index.html'));
});

module.exports = router;

