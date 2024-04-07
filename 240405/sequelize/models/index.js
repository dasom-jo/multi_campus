//엄격한분석
'use strict';

const Sequelize = require('sequelize');
const User = require('./user');
const Post = require('./post');
const process = require('process');//env사용을위해

const config = { //변수할당
  'username': process.env.DB_USER,
  'password': process.env.DB_PASSWORD,
  'database': process.env.DB_DATABASE,
  'host' : process.env.DB_HOST,
  'dialect' : 'mysql'
}

let sequelize;//db 객체생성
sequelize = new Sequelize(config.database, config.username, config.password, config);

const db = {};

/*db.sequelize = sequelize;
  (같은뜻)db = {
  sequelize: sequelize,
};*/

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = User; // User 모델을 db 객체에 연결
db.Post = Post;

User.initiate(sequelize); // User 모델을 초기화
Post.initiate(sequelize);

/*associate()는 sequelize의 메서드로 모델간의
관계를 설정하는데 사용
user 모델을 db객체에 연결*/
User.associate(db);
Post.associate(db);

module.exports = db;