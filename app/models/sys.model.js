import { DataTypes } from 'sequelize'
import sequelize from './index.js'

export const Module = sequelize.define('sys_modules', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        notNull: true
    },
    issystem: {
        type: DataTypes.ENUM('1','0'),
        defaultValue: '0'
    },
    active: {
        type: DataTypes.ENUM('1','0'),
        defaultValue: '0'
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
}, {
    tableName: 'sys_modules'
});

// Module.hasMany(Membership)
// Membership.belongsTo(Module, {
//     foreignKey: 'moduleid'
// })

export const County = sequelize.define('sys_counties', {
    id: { 
        type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
        autoIncrement: true,
        primaryKey: true
    },
    county: {
        type: DataTypes.STRING,
        notNull: true
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
}, {
    tableName: 'sys_counties'
}) 
