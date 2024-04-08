const { getPosts, uploadPost } = require('../controllers/post');
const express = require('express');

const router = express.Router();

// GET /post - 게시물 전체 목록
router.get("/", getPosts);
// POST /post - 게시물 작성
router.post("/", uploadPost);
// // POST /post/img - 이미지 업로드
// router.post("/post/img", ___);
// // PUT /post/:id  - 게시물 수정
// router.put("/post/:id", ___);
// // DELETE /post/:id - 게시물 삭제
// router.delete("/post/:id", ___);

module.exports = router;