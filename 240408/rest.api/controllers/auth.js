const User = require('../models/user');

exports.join = async(req, res, next) =>{
    //res.send('가입완료(컨트롤러)')
    const  { email, nickname, password } = req.body;
    try {
        const exUser = await User.findOne({where: { email }});
        if (exUser) {
            throw new Error('이미가입된 이메일입니다');
        }
        await User.create({
            email,
            nickname,
            password
        });
        res.json({
            code:200,
            message: '회원가입이 완료되었습니다'
        })
    } catch (err) {
        console.error(err);
        next(err)
    }
};