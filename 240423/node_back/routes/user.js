
const express = require('express');
const { modifyUser, deleteUser, follow, unfollow } = require('../controllers/user');
const { verifyToken } = require("../middlewares");
const router = express.Router();
const {getUser ,getFollowers ,getFollowings} =require('../controllers/user');


// 7.   localhost:8000/v1/users/:id [GET - 특정 회원 조회] 로그인 X
router.get('/:id', getUser );

// PATCH /v1/users/
router.patch('/', verifyToken,  modifyUser)

module.exports = router;
// [DELETE - 회원 정보 삭제]
router.delete('/', verifyToken,  deleteUser);

//POST
router.post('/follow', verifyToken, follow);

//POST
router.delete('/follow', verifyToken, unfollow);
// 회원 관련된 작업


// 5.   localhost:8000/v1/users/followers/:id [GET - 특정 회원을 팔로우하는 사람들 조회] 로그인 X
router.get('/followers/:id', getFollowers);

// 6.   localhost:8000/v1/users/followings/:id [GET - 특정 회원이 팔로우하는 사람들 조회] 로그인 X
router.get('/followings/:id',getFollowings);

// 3.   localhost:8000/v1/users/follow [POST - 특정 회원 팔로우하기]
// 4.   localhost:8000/v1/users/follow [DELETE - 특정 회원 언팔로우하기]

