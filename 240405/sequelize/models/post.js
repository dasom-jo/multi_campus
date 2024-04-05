const Sequelize = require("sequelize"); //클래스라 대문자

class Post extends Sequelize.Model{
    static initiate(sequelize){
        Post.init({
            //테이블컬럼정의
            //게시물정의[id,content]
            content: {
                type: Sequelize.TEXT,
                allowNull:false,
            }
        },{
            //모델과 테이블 간의 옵션정의
            sequelize,
            charset: 'utf8mb4',
            collate:'utf8mb4_general_ci',
        });
    };
    static associate(db){
        db.Post.belongsTo(db.User, { foreignKey:"userId", targetKey: 'userId' });
    };
}

module.exports = Post;