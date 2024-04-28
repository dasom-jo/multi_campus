const bcrypt = require('bcrypt'); //비밀번호 암호화
const { User } = require('../models');
const passport = require('passport');//다양한인증전략을 제공하여 사용자가 로그인하고 보호된 엔드포인트에 접근할수있는 방법제공
const jwt = require('jsonwebtoken');



// 1.Passport 및 필요한 전략을 초기화합니다.
// 2.로그인 요청이 발생하면 Passport가 해당 요청을 처리하고 인증을 수행합니다.
// 3.인증이 성공하면 사용자 정보를 세션에 저장하거나 JWT 토큰을 발급하여 클라이언트에게 전달합니다.
// 4.보호된 엔드포인트에 접근할 때마다 Passport가 사용자 인증을 확인합니다.
// 5.사용자가 로그아웃하면 Passport는 세션을 제거하거나 JWT 토큰을 무효화합니다.

//토큰을 만듭시다
exports.createToken = async (req, res, next) => {
    try {
        // passport.authenticate('local') 미들웨어 실행
        //Json Web Token
        //local strategy로컬전략:passport.authenticate('local', { session : false }, ...)
        //로그인을 인증한다{ session : false }은 옵션세션을 사용하지않고 jwt를 사용하여 인증을처리
        passport.authenticate('local', { session : false }, (err, user, info)=>{
            if (err) {
                console.error(err);
                return next(err);//콘솔에 오류를 출력하고 다음미들웨어에 에러전달
            } else if (!user) {
                throw new Error(info.message);//사용자인증에 실패한경우,인증실패메세지를포함한에러를발생
            }
            // 정상 로그인
            return req.login(user, (err) => { //로그인성공시
                //jwt.sign() 함수는 페이로드를사용하여 사용자인증후 사용자에게전달되는토큰을 생성
                const accessToken = jwt.sign(
                    { id: user.id, nickname: user.nickname},
                    //토큰의 옵션 유효시간1시간,토큰발급자,목적
                    process.env.JWT_SECRET,
                    { expiresIn : '1h', issuer: "mini_project", subject: "accessToken"}
                );
                //7일짜리 토큰 ,db에 자동저장
                const refreshToken = jwt.sign(
                    { id: user.id, nickname: user.nickname},
                    process.env.JWT_SECRET,
                    { expiresIn : '7d', issuer: "mini_project", subject: "refreshTaken"}
                );
                User.update({ refreshToken }, {where: {id: user.id}});
                if(err) {
                    console.error(err);
                    return next(err);
                }

                if (err) {
                    console.error(err);
                    return next(err);
                };

                res.json({
                    code: 200,
                    message: '토큰이 발급되었습니다.',
                    accessToken,
                    userId : user.id
                })
            })
        })(req, res, next); //즉시실행함수
    } catch (err) {
        console.error(err);
        next(err)
    }
}
//클라이언트가 이메일닉네임 패스워드를 입력하면
//이메일을 통해 중복을 확인하고 중복이면 에러메세지
//최초가입이면 가입시켜주면서  비밀번호를 해싱/db에 해싱된비번저장
exports.join = async (req, res, next) => {
    console.log(req.body);
    const { email, nickname, password } = req.body;
    //req.body 클라이언트로부터 받은 요청을 통해 이메일닉네임비번을 추출
    try {
        const exUser = await User.findOne({where: { email: req.params.email },
            attributes: ['id', 'email', 'nickname']});
        //findOne첫번째로발견된 레코드만반환
        //where조건지정
        if (exUser) {
            throw new Error("이미 가입된 이메일입니다.")
        }
        const hash = await bcrypt.hash(password, 10);
        //bcrypt.hash() 메서드는 bcrypt 라이브러리를 사용하여 비밀번호를 해싱
        await User.create({
            email,
            nickname,
            password: hash
        });
        res.json({
            code: 200,
            message: '회원가입이 완료되었습니다.'
        })
    } catch (err) {
        console.error(err);
        return next(err);
    }
}

exports.refreshToken = async(req, res, next) =>{
    try{
        const { accessToken } = req.body;
        const accessResult = jwt.decode(accessToken, process.env.JWT_SECRET);
        const user = await User.findOne({where: {id: accessResult.id}});
        const refershResult = jwt.verify(user.refreshToken, process.env.JWT_SECRET);
        if(accessResult.id !== refershResult.id){
            throw new Error('토큰이일치하지않습니다')
        }

        const newAccessToken = jwt.sign(
            { id: accessResult.id, nickname:accessResult.nickname},
            process.env.JWT_SECRET,
            { expiresIn: '1h', issuer:'mini_project', subject: "accessToken"}
        );
        res.json({
            cede:200,
            message:"새로운 토큰이 발급되었습니다",
            accessToken: newAccessToken
        })
    }catch(err){
        console.error(err);
        next(err)
    }

}

exports.getMyinfo = async(req, res, next) =>{
    try{
        res.json({
            cede:200,
            payload:req.body
        })
    }catch(err){
        console.error(err);
        next(err)
    }

}

exports.kakaoLogin = async(req,res,next) =>{
    try{
        passport.authenticate('kakao',{session : false},(err, user, info)=>{
            if(err){
                return next(err);
            }
            if(!user){
                throw new Error(info.message);
            }
            return req.login(user,(err)=>{
                const accessToken = jwt.sign(
                    { id: user.id, nickname: user.nickname},
                    //토큰의 옵션 유효시간1시간,토큰발급자,목적
                    process.env.JWT_SECRET,
                    { expiresIn : '1h', issuer: "mini_project", subject: "accessToken"}
                );
                //7일짜리 토큰 ,db에 자동저장
                const refreshToken = jwt.sign(
                    { id: user.id, nickname: user.nickname},
                    process.env.JWT_SECRET,
                    { expiresIn : '7d', issuer: "mini_project", subject: "refreshTaken"}
                );
                User.update({ refreshToken }, {where: {id: user.id}});
                if(err) {
                    console.error(err);
                    return next(err);
                }
                if (err) {
                    console.error(err);
                    return next(err);
                };
                res.cookie('userId',user.id,{
                    httpOnly:false,
                    secure:false
                })
                res.cookie('accessToken', accessToken,{
                    httpOnly:false,
                    secure:false
                })
                res.status(302).redirect(process.env.CLIENT_URL);
            });
        })(req,res,next)
    }catch(err){
        return next(err);
    }
}

exports.IdSearch = async (req, res, next) => {
    console.log(req.body);
    const {nickname } = req.body;

    try {
        //닉네임조건이 일치하는 가입자의 정보를 가져온다
        const myNickname = await User.findOne({ where: { nickname }});
    //     console.log('조회된 사용자 정보:', myEmail.toJSON()); // 사용자 정보를 JSON 형태로 출력
    // console.log('사용자 ID:', myEmail.id);
    // console.log('사용자 이메일:', myEmail.email);
    // console.log('사용자 비밀번호:', myEmail.password);
        //유저가 있으면~
        if (User) {
            console.log(myNickname.id, myNickname.nickname);
            res.json({ code: 200, message: '사용자 정보를 찾았습니다.', user: myNickname});
        }
        else {
            throw new Error('회원가입 기록이 없습니다');
        }
    } catch (err) {
        console.error(err);
        next(err);
    }
};