import Membership from './membership.model.js'
import { Module } from './sys.model.js'

Module.hasOne(Membership, {
    foreignKey: 'moduleid'
});
Membership.belongsTo(Module, {
    foreignKey: 'moduleid'
});

export { Membership, Module };