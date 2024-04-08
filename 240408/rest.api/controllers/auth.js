const User = require('../models/user');
//exports.join클라이언트가 회원가입요청시
exports.join = async (req,res,next) => {
    const { email, nickname, password } = req.body;
    try {
        const exUser = await User.findOne({ where: { email } });
        // await :User.findOne가 비동기 작업이므로 await를 사용하여 해당작업을기다려
        if (exUser) {
            throw new Error('이미 가입된 이메일입니다.');
        }
        await User.create({
            email,
            nickname,
            password
        });
        res.json({
            code: 200,
            message: 'success'
        })
    } catch (err) {
        console.error(err);
        next(err)
    }
};