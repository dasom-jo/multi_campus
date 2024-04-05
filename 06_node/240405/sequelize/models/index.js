'use strict';
const Sequelize = require('sequelize');
const User = require('./user'); // User 모델을 불러온다.
const process = require('process');
const config = {
  "username": process.env.DB_USER,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_DATABASE,
  "host": process.env.DB_HOST,
  "dialect": "mysql"
};

let sequelize;
sequelize = new Sequelize(config.database, config.username, config.password, config);

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = User; // User 모델을 db 객체에 연결
User.initiate(sequelize); // User 모델을 초기화

module.exports = db;
