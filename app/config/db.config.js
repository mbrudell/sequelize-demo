// require('dotenv').config() 
// import  'dotenv/config'
// import * as dotenv from 'dotenv/config'
//dotenv.config()

console.log(process.env.MSEE)

export const HOST = process.env.HOST
export const USER = process.env.USER
export const PASSWORD = process.env.SIRI
export const DB = process.env.DB
export const dialect = "mysql";

export const pool = {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
};