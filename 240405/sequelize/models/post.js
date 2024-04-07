const Sequelize = require('sequelize');//클래스라 대문자

// Sequelize의 Model클래스 정의
class Post extends Sequelize.Model{
    //initiate초기화
    //static 정적메서드와 속성을 정의할때사용
    static initiate(sequelize){
        Post.init({
            //테이블컬럼정의
            //게시물 테이블[id,content]
            content:{
                type:Sequelize.TEXT,
                allowNull:false,
            }
        },{
            //모델= 테이블간의 옵션정의
            sequelize,
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        });
    };
    //일대다 관계
    static associate(db) {
        db.Post.belongTo(db.User,{ foreignKey: 'userId', targetKey :'userId'})
    };
}
module.exports = Post;