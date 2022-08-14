import { DataTypes } from 'sequelize'
import sequelize from './index.js'

const Membership = sequelize.define('memberships', {
    id:{
        type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
        autoIncrement: true,
        primaryKey: true
    },
    membershipno: DataTypes.STRING(50),
    member_ref: { 
        type: DataTypes.INTEGER,
        notNull: true
    },
    memberid: {
        type: DataTypes.INTEGER,
        notNull: true
    },
    moduleid: {
        type: DataTypes.INTEGER,
        notNull: true
    },
    status: {
        type: DataTypes.ENUM('Active','Inactive','Transferred','Withdrawn','Suspended'),
        defaultValue: 'Inactive'
    },
    date_registered: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
}, {
    tableName: 'memberships'
})

export default Membership