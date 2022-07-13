const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('skylers_sep', 'root', 'User420#', {
    host: 'localhost',
    dialect: 'mysql'
});

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}