//게시물쓰는곳
const { getPosts , uploadPost,afterUploadImg ,modifyPost } = require('../controllers/post');
const express = require('express');
const multer = require('multer');
const path = require('path')

const router = express.Router();

const imgUpload = multer({
    storage: multer.diskStorage({
        destination(req, file, callback) {
            callback(null, "public/uploads/");
        },
        filename(req, file, callback) {
            const ext = path.extname(file.originalname);
            callback(null, path.basename(file.originalname, ext) + Date.now() + ext);
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
});

//GET/post - 게시물전체목록
router.get('/', getPosts);
//POST/post - 게시물작성
router.post('/', uploadPost );
// //POST /post/img - 이미지 업로드
router.post('/img',imgUpload.single('img'), afterUploadImg);
// //PUT/post/:id - 게시물수정
router.get('/post/:id', modifyPost);
// //DELETE / post/:id -게시물삭제
// router.delete('/post/:id', __);


module.exports = router;