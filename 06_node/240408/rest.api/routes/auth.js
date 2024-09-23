const express = require('express');
const { join } = require('../controllers/auth');

const router = express.Router();
//회원가입하기
// router.post('/join',(req,res)=>{
//     //(req,res) 컨트롤로 auth.js에서
//     res.send('가입성공')
// });
//상위것을 아래로변경
router.post('/join', join);


module.exports = router;