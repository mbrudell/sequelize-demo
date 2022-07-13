import Sequelize from "sequelize"
import { DB, USER, PASSWORD, HOST, dialect as _dialect, pool as _pool } from "../config/db.config.js";

const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: _dialect,
  operatorsAliases: 0,
  pool: {
    max: _pool.max,
    min: _pool.min,
    acquire: _pool.acquire,
    idle: _pool.idle
  }
});

// const db = {};
// db.Sequelize = Sequelize;
// db.sequelize = sequelize;
// db.Member = require("./member.model.js")(sequelize, Sequelize);
export default sequelize;