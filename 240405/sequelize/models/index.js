'use strict';//문법엄격사용

const Sequelize = require('sequelize');
const User = require('./user');
const Post = require('./post');
const process = require('process');//env사용을위해
const { initiate } = require('./user');

const config ={
  "username": process.env.DB_USER,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_DATABASE,
  "host": process.env.DB_HOST,
  "dialect": "mysql"
}

let sequelize;//변수할당
  sequelize = new Sequelize(config.database, config.username, config.password, config);

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = User; //user 모델을 db객체에 연결
db.Post = Post;

User.initiate(sequelize);
Post.initiate(sequelize);

User.associate(db);
Post.associate(db);

module.exports = db;
