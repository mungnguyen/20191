'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Association
// user - roomMember
console.log("íbs", db)
db.user.hasMany(db.roomMember, { foreignKey: { name: 'userId', allowNull: false } });
db.roomMember.belongsTo(db.user, { foreignKey: { name: 'userId', allowNull: false } });

// room - roomMember
db.room.hasMany(db.roomMember, { foreignKey: { name: 'roomId', allowNull: false } });
db.roomMember.belongsTo(db.room, { foreignKey: { name: 'roomId', allowNull: false } });

// user - message
db.user.hasMany(db.message, { foreignKey: { name: 'userId', allowNull: false } });
db.message.belongsTo(db.user, { foreignKey: { name: 'userId', allowNull: false } });

// room - roomMember
db.room.hasMany(db.message, { foreignKey: { name: 'roomId', allowNull: false } });
db.message.belongsTo(db.room, { foreignKey: { name: 'roomId', allowNull: false } });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;