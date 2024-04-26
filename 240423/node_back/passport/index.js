const passport = require("passport")
const { User } = require("../models")
const local = require("./local"); //로컬 인증 전략은 사용자가 직접 이메일과 비밀번호를 제출하여 인증하는 전략
const jwt = require("./jwt");
const kakao = require("./kakao");
//세션에 저장된 사용자 정보를 관리하고, 사용자의 로그인 상태를 유지
module.exports = () => {
    local();
    jwt();
    kakao();
    // 전략 성공 시 호출/
    //done: 콜백 함수의 첫 번째 매개변수로, 작업이 완료되었을 때 호출되는 함
    passport.serializeUser((user, done) => {
        done(null, user.id); //null은 에러가 발생하지않음을나타냄
    })
    // 매 요청 시마다
    //deserializeUser:사용자를 식별자로부터 복구하는 역직렬화 함수
    passport.deserializeUser((id, done) => {
        User.findOne({
            where: { id },
            include: [
                {
                    model: User,
                    attribute: ['id' , 'nickname'],
                    as: 'Followers'
                },
                {
                    model: User,
                    attribute: ['id', 'nickname'],
                    as: 'Followings'
                }
            ]
        })
        .then(user => {
            done(null, user);
        })
        .catch(err => done(err));
    })
}