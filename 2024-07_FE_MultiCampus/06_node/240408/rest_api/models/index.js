'use strict';
const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');
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

// 테이블 생성
const baseName = path.basename(__filename);
fs.readdirSync(__dirname)
  .filter(file => {
    return file.indexOf('.') !== 0 && file !== baseName && file.slice(-3) === ".js"
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file));
    db[model.name] = model; 
    model.initiate(sequelize);
  });

// 테이블 관계 설정
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;