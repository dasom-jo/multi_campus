const express = require('express');
const router = express.Router();

module.exports = router;

// 게시물 관련된 작업
// 8.  localhost:8000/v1/posts/ [GET - 전체 게시물 조회] 로그인 X
// 9.  localhost:8000/v1/posts/ [POST - 게시물 작성]
// 10. localhost:8000/v1/posts/image [POST - 게시물 이미지 업로드]
// 11. localhost:8000/v1/posts/:id [PUT - 게시물 수정]
// 12. localhost:8000/v1/posts/:id [DELETE - 게시물 삭제]