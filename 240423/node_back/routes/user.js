const express = require('express');
const { modifyUser } = require('../controllers/user');
const router = express.Router();

// PATCH /v1/users/
router.patch('/', modifyUser)
module.exports = router;

// 회원 관련된 작업
// 1.   localhost:8000/v1/users/ [PATCH - 회원 정보 수정]
// 2.   localhost:8000/v1/users/ [DELETE - 회원 정보 삭제]
// 3.   localhost:8000/v1/users/follow [POST - 특정 회원 팔로우하기]
// 4.   localhost:8000/v1/users/follow [DELETE - 특정 회원 언팔로우하기]
// 5.   localhost:8000/v1/users/followers/:id [GET - 특정 회원을 팔로우하는 사람들 조회] 로그인 X
// 6.   localhost:8000/v1/users/followings/:id [GET - 특정 회원이 팔로우하는 사람들 조회] 로그인 X
// 7.   localhost:8000/v1/users/:id [GET - 특정 회원 조회] 로그인 X