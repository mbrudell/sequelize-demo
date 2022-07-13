const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = new Sequelize('mysql::memory:')

const Member = sequelize.define('members', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
        autoIncrement: true,
        primaryKey: true
    },
    names: {
        type: DataTypes.STRING
    },
    idno: {
        type: DataTypes.BIGINT,
        validate: isNumeric,
    },
    krapin: {
        type: DataTypes.STRING,
    },
    mobileno: {
        type: DataTypes.STRING,
    },
    date_registered: {
        type: DataTypes.DATETIME,
        defaultValue: DataTypes.NOW
    },
    email: {
        type: DataTypes.STRING,
        validate: isEmail
    },
    gender: {
        type: DataTypes.ENUM("Male","Female"),
    },
    county: {
        type: DataTypes.STRING,
    },
    photo: {
        type: DataTypes.STRING,
    },
    idcopy: {
        type: DataTypes.STRING,
    },
    krapincopy: {
        type: DataTypes.STRING,
    },
    agent: {
        type: DataTypes.INTEGER,
        validate: isInt
    }

}, {
    tableName: 'members'
}
);