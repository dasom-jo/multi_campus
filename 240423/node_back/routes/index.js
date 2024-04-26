const express = require('express');
const router = express.Router();
const userRouter = require('./user');
const postRouter = require('./post');
const { createToken, join, refreshToken,getMyinfo, kakaoLogin } = require('../controllers/auth');
const { verifyToken } = require("../middlewares");
const passport = require('passport');


// POST /v1/auth/join
router.post('/auth/join', join); //회원가입

// POST /v1/auth/login
router.post('/auth/login', createToken); //토큰발행

router.get('/auth/kakao', passport.authenticate('kakao'));
router.get('/auth/kakao/callback', kakaoLogin);

router.get('/auth/refresh',refreshToken);

router.get('/auth/info',verifyToken, getMyinfo);
// /v1/users
router.use('/users',userRouter);

///v1/posts
router.use('/posts',postRouter);

module.exports = router;