//엄격한분석
'use strict';

const Sequelize = require('sequelize');
const User = require('./user');
const Post = require('./Post');
const process = require('process');//env사용을위해

const config = { //변수할당
  'username': process.env.DB_USER,
  'password': process.env.DB_PASSWORD,
  'database': process.env.DB_DATABASE,
  'host' : process.env.DB_HOST,
  'dialect' : 'mysql'
}

let sequelize; //객체생성 db연결
sequelize = new Sequelize(config.database, config.username,config.password,config);

const db = {};

/*db.sequelize = sequelize;
  (같은뜻)db = {
  sequelize: sequelize,
};*/

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = User;
db.Post = Post;

/*associate()는 sequelize의 메서드로 모델간의
관계를 설정하는데 사용
user 모델을 db객체에 연결*/
User.associate(db);//user가 관계를 설정하는측
Post.associate(db);

module.exports = db;