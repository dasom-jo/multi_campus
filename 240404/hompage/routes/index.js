//라우터는 웹애플리케이션에서 클라이언트요청에 따라 적절한 함수를 실행하는데
//사용되는 기능입니다
//라우터는 클라이언트 요청의경로(path)를분석하고 해당경로에대한 처리를 담당하는
//핸들러 함수를 호출합니다

const express = require('express');

const router = express.Router();
const path = require('path');

// GET / - "메인화면 출력"
router.get('/', (req, res) => {
    res.render('index');
});

module.exports = router;
//res.render() Express.js에서 클라이언트에게
//HTML 페이지를 보낼 때 사용되는 메서드입니다
//템플릿 파일을 가져와서 특정 데이터와 결합하여
//  HTML을 생성하고,
// 그 결과를 클라이언트에게 보내는 역할을 합니다

module.exports = router;//파일내에서 내보내는 기능