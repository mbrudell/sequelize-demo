import { DataTypes } from 'sequelize'
import sequelize from './index'

const GJaccount = sequelize.define('generaljournalaccounts', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
        autoIncrement: true,
        primaryKey: true
    },
    moduleid: {
        type: DataTypes.INTEGER,
        notNull: true
    },
    member_ref: { 
        type: DataTypes.INTEGER,
        notNull: true
    },
    accname: DataTypes.STRING,
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

},{
    tableName: 'fn_generaljournalaccounts'
})

