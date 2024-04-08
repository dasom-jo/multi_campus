const Sequelize = require('sequelize');

class User extends Sequelize.Model{
    static initiate(sequelize) {
        User.init({
            //[ID, 이메일, 닉네임, 비밀번호(암호화),provider(local,kakao),kakapId,refreshToken]
            //refreshToken:
            email:{
                type: Sequelize.STRING(50),
                allowNull: true,
                    unique:true,//중복가입제지
            },
            nickname:{
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            password:{
                type: Sequelize.STRING(200),
                allowNull:true,//카카오 로그인사용자를위해
            },
            provider:{
                type:Sequelize.ENUM('local','kakao'),
                allowNull:false,
                defaultValue:'local'
            },
            kakaoId:{
                type: Sequelize.STRING(30),
                allowNull:true,
            },
            refreshToken:{
                type: Sequelize.STRING(255),
                allowNull:true,
            },
        },{
            sequelize,
            paranoid: true,
            charset: 'utf8mb4',
            collate: "utf8mb4_general_ci",
        }
    )
    }

    static associate(db){
        db.User.hasMany(db.Post); //유저아이디안쓴이유:당시에우리가 아이디를 잡앗고 지금은 자동으로 잡앗기에 일대다 관계라는것만 알려주는것만으로 충분
        db.User.belongsToMany(db.User, { foreignKey: 'followingId', as:'Followers', through: 'Follow' }); //인스타 아이디 팔로우 하는 연결관계:유저:유저
        db.User.belongsToMany(db.User, { foreignKey: 'followerId',  as:'Followings',through: 'Follow' });
    }
}

module.exports = User;