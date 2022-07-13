import { DataTypes } from 'sequelize'
import sequelize from '../models/index.js'

const Member = sequelize.define('members', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
        autoIncrement: true,
        primaryKey: true
    },
    names: DataTypes.STRING,
    idno: {
        type: DataTypes.BIGINT,
        validate: {
            isNumeric: true
        }
    },
    krapin: DataTypes.STRING,
    mobileno: DataTypes.STRING,
    date_registered: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    email: {
        type: DataTypes.STRING,
        validate:{
            isEmail: true,
        } 
    },
    gender: DataTypes.ENUM("Male","Female"),
    county: {
        type: DataTypes.INTEGER,
        validate: {
            isInt: true
        }
    },
    photo: DataTypes.STRING,
    idcopy: DataTypes.STRING,
    krapincopy: DataTypes.STRING,
    agent: {
        type: DataTypes.INTEGER,
        validate:{
            isInt: true
        } 
    },
    createdAt: {
        field: 'createdon',
        type: DataTypes.DATE
    },
    createdby: DataTypes.INTEGER,
    updatedAt:{
        field:  'lasteditedon',
        type: DataTypes.DATE
    },
    lasteditedby: DataTypes.INTEGER

}, {
    tableName: 'members'
}
);

export default Member