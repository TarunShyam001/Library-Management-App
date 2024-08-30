const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Book = sequelize.define('book', {
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
  student: {
    type: Sequelize.STRING,
    allowNull: false
  },
  studentId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  returnTime : {
    type : Sequelize.VIRTUAL,
    get() {
        const createdAt = this.getDataValue('createdAt');
        if (createdAt) {
            const returnTime = new Date(createdAt);
            returnTime.setHours(returnTime.getHours() + 1);
            return returnTime;
        }
        return null;
    }
  } 
},{
    timestamps: true // It ensure 'createdAt' and 'updatedAt' fields are automatically handled by Sequelize
});

module.exports = Book;
