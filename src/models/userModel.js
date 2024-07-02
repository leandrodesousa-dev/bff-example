const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mfaSecret: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

sequelize.sync();

module.exports = User;
