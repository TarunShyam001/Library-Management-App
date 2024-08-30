const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const returnedBook = sequelize.define('returnedBook', {
  id : {
    type : Sequelize.INTEGER,
    autoIncrement : true,
    allowNull : false,
    primaryKey : true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  fine: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = returnedBook;
