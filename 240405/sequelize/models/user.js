const Sequelize = require("sequelize"); //클래스라 대문자

class User extends Sequelize.Model{
    static initiate(sequelize){
        User.init({
            //테이블컬럼정의
            //사용자테이블[userid, name, password,profileimg]
            userId: {
                type: Sequelize.STRING(20),
                allowNull: false,
                primaryKey:true,
            },
            name:{
                type:Sequelize.STRING(10),
                allowNull: false
            },
            password:{
                type:Sequelize.STRING(20),
                allowNull: false
            },
            profileImg: {
                type: Sequelize.STRING(200),
                allowNull:false,
                defaultValue: 'default.jpg'
            }
        },{
            //모델과 테이블 간의 옵션정의
            sequelize,
            timestamps:true, //creatAt, updateAt 컬럼 자동생성
            underscored: false, //카멜케이스 -> 스네이크 케이스
            modelName: 'User',//모델이름
            tableName: 'Users',//실제 디비 테이블 이름
            paranoid: true,//deleteAt컬럼 생성(false가 기본값)
            charset: 'utf8mb4',
            collate:'utf8mb4_general_ci',
        });
    };
    static associate(db){
        db.User.hasMany(db.Post, { foreignKey:"userId", sourceKey: 'userId' });
    };
}

module.exports = User;