'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
// const configPath = __dirname + '/../config/config.js';
// console.log('Loading config from:', configPath);
// const config = require(configPath)[env];
const config = require(__dirname + '/../config/config.js')[env];
 
const db = {};
// db.user = require('./user')(Sequelize, Sequelize.DataTypes);



let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1 && 
      file !=='associate.js'
    );
  })
  .forEach(file => {
    console.log('Loading model file:', file); // Add this line
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});


// const {user,country} = require('./associate');
// db.user= user;
// db.country = country;

db.User = require('./user')(sequelize, Sequelize.DataTypes);
db.country = require('./country')(sequelize, Sequelize.DataTypes);
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
