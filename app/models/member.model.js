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
    krapin: {
        type: DataTypes.STRING,
    },
    mobileno: {
        type: DataTypes.STRING,
    },
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
        validate:{
            isInt: true
        } 
    },
    createdAt: {
        field: 'createdon',
        type: DataTypes.DATE
    },
    createdby: {
        type: DataTypes.INTEGER,
    },
    updatedAt:{
        field:  'lasteditedon',
        type: DataTypes.DATE
    },
    lasteditedby: {
        type: DataTypes.INTEGER
    }

}, {
    tableName: 'members'
}
);

export default Member