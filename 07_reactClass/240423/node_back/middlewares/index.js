const passport = require("passport");
//verifyToken: 유효성을 검사하는 함수
exports.verifyToken = (req, res, next) => {
    try { // (info, user, authErr) 콜백함수로 유효성을 검증하고 사용자를 인증
        passport.authenticate('jwt', {session: false}, (info, user, authErr) => {
            if (authErr) { //오류가있으면
                if (authErr.message === "jwt expired") { //오류메세지
                    authErr.status = "EXPIRED_TOKEN"; //만료토큰속성
                }
                return next(authErr);
            }
            if (!user) { //유저가 없을시
                const err = new Error('토큰이 유효하지 않습니다.');
                err.status = 401;
                return next(err);
            }
            req.user = user;
            return next();
        })(req, res, next);
    } catch (err) {
        console.error(err);
        next(err);
    };
}