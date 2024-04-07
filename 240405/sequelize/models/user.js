const Sequelize = require('sequelize');

class User extends Sequelize.Model {
    static initiate(sequelize){
        User.init({
            //테이블컬럼정의
            //사용자 테이블 [userId, name, password, profileImg]
            userId: {
                type: Sequelize.STRING(20),
                allowNull: false,
                primaryKey: true,
            },
            name: {
                type:Sequelize.STRING(10),
                allowNull:false
            },
            password: {
                type: Sequelize.STRING(20),
                allowNull: false
            },
            profileImg:{
                type: Sequelize.STRING(200),
                allowNull: true,
                defaultValue: 'default.jpg'
            }
        },{
            //모델 - 테이블 간의 옵션정의
            sequelize,
            timestamps: true, //creatAt, updateAt 컬럼자동생성
            erscored: false,//카멜케이스->스네이크케이스
            elName:'User',//모델이름
            leName: 'Users', //실제 db테이블이름
            anoid: true,//deletAt 컬럼생성(false가 기본값)
            charset: 'utf8mb4',
            collate: 'utf8b4_gerneral_ci',
        });
    };
    static associate(db) {
        db.User.hasMany(db.Post, { foreignKey:'userId', sourceKey: 'userId' })
    };
}
module.exports = User;