const passport = require("passport");
const User = require('../models/user');
const { ExtractJwt } = require("passport-jwt");
const JWTStrategy = require('passport-jwt').Strategy;
//"Authorization" 헤더 클라이언트가 서버로 보내는 요청에 JWT를 포함시키는데 사용
//즉 Authorization는 클라이언트가 서버로 보내는 요청에대한 인증정보를 담고있다
module.exports = () => {
    //JWTStrategy 사용자를 인증하는 Passport의 전략 중 하나
    //new 키워드를 사용하여 JWTStrategy를 생성하여 해당 전략을 사용
    passport.use(new JWTStrategy({
        // JWT를 추출하는 방법을 설정합니다. 일반적으로 Authorization 헤더에서 JWT를 추출합니다.
        jwtFromRequest: ExtractJwt.fromHeader('authorization'),
        // JWT의 시크릿 키를 설정합니다. 이것은 JWT를 생성할 때 사용된 시크릿 키와 일치해야 합니다.
        secretOrKey: process.env.JWT_SECRET
        // JWT를 검증하는 콜백 함수를 설정합니다.
    }, async (jwtPayload, done) => {
        try {
            const user = await User.findOne({ where : { id: jwtPayload.id }});
            if (user) {
                done(null, user);
                return;
            }
            done(null, false, { message: "유저를 찾을 수 없습니다."});
        } catch (err) {
            console.error(err);
            done(err);
        }
    }));
}