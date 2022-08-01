import Membership from './membership.model.js'
import { Module } from './sys.model.js'

Membership.hasMany(Module);
Module.belongsTo(Membership, {
    foreignKey: 'moduleid'
});

export { Membership, Module };