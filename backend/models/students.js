const Sequelize = require('sequelize');
const sequelize = require('../database/connection');

const Student = sequelize.define('students', {
    email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    user_password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false   
    }
});

module.exports = Student;