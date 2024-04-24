const passport = require("passport")
const { User } = require("../models")
const local = require("./local");
const jwt = require("./jwt");

module.exports = () => {
    local();
    jwt();

    // 전략 성공 시 호출
    passport.serializeUser((user, done) => {
        done(null, user.id);
    })
    // 매 요청 시마다
    passport.deserializeUser((id, done) => {
        User.findOne({
            where: { id },
            include: [
                {
                    model: User,
                    attribute: ['id' , 'nickname'],
                    as: 'Follwers'
                },
                {
                    model: User,
                    attribute: ['id', 'nickname'],
                    as: 'Follwings'
                }
            ]
        })
        .then(user => {
            done(null, user);
        })
        .catch(err => done(err));
    })
}