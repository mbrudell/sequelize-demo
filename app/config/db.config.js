// require('dotenv').config() 

// import * as dotenv from 'dotenv/config'
//dotenv.config()

// console.log(process)

// export const HOST = process.env.HOST
// export const USER = process.env.USER
// export const PASSWORD = process.env.SIRI
// export const DB = process.env.DB

export const HOST = "localhost"
export const USER = "root"
export const PASSWORD = "User420#"
export const DB = "skylers_sep"
export const dialect = "mysql";

export const pool = {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
};