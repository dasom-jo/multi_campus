const passport = require("passport");
const bcrypt = require("bcrypt");
const LocalStrategy = require('passport-local').Strategy;//"Strategy" 객체는 인증 전략(authentication strategy)을 정의하고 구현하는 데 사용
const User = require('../models/user');

module.exports = () => {
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: false //, 콜백 함수에 요청(request) 객체를 전달할지 여부를 결정
    }, async (email, password, done) => {
        try {
            const exUser = await User.findOne({where : { email }});
            if (exUser) {
                //bcrypt.compare() 함수는 입력한 비밀번호와 저장된 해시된 비밀번호를 비교하고, 일치하는 경우 true를 반환합
                const result = await bcrypt.compare(password, exUser.password);
                if (result) {
                    done(null, exUser);
                } else {
                    done(null, false, { message: "비밀번호가 일치하지 않습니다." });
                }
            } else {
                done(null, false, { message: "가입되지 않은 회원입니다." });
            }
        } catch (err) {
            console.error(err);
            done(err);
        }
    }))
}