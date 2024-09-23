const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const { uploadPost, uploadImg,modifyPost,deletePost  } = require('../controllers/post');
const { verifyToken } = require("../middlewares");
const {getPosts} =require('../controllers/post');

const storage = multer.diskStorage({
    destination(req,file,cb){
        cb(null, 'public/uploads')
    },
    filename(req, file, cb){
        const ext = path.extname(file.originalname);
        cb(null, path.basename(file.originalname,ext) + Date.now()+ext)
    }
})
const limits = { fileSize:10 * 1024* 1024 };

const impUpload = multer({
    storage,
    limits
});


// 8.  localhost:8000/v1/posts/ [GET - 전체 게시물 조회] 로그인 X
// 8-1. /v1/posts?hashtag=love[GET - 해시태그 게시물 조회]
// 8-1. /v1/posts?userId=10 [GET - 특정작성자의 게시물 조회]
router.get('/', getPosts);

//POST/v1/posts-게시물작성
router.post('/',verifyToken, uploadPost);
//POST/v1/posts/image - 게시물이미지업로드
router.post('/image',verifyToken, impUpload.single('img'), uploadImg);
//PUT/v1/posts/:id - 특정게시물 수정
router.put('/:id',verifyToken,modifyPost);
// DELETE/v1/posts/:id - 특정게시물 삭제
router.delete('/:id',verifyToken, deletePost);

module.exports = router;



// 게시물 관련된 작업

// 9.  localhost:8000/v1/posts/ [POST - 게시물 작성]
// 10. localhost:8000/v1/posts/image [POST - 게시물 이미지 업로드]
// 11. localhost:8000/v1/posts/:id [PUT - 게시물 수정]
// 12. localhost:8000/v1/posts/:id [DELETE - 게시물 삭제]