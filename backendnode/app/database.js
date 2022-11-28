const Sequelize = require('sequelize')

const sequelize = new Sequelize('api-project', 'dorkenpg', 'powned', {dialect: "postgres"})
module.exports = sequelize;