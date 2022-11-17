const Sequelize = require("sequelize");
const sequelize = require("../database")

const User = sequelize.define("users", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    bestscores: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: 0
    }
});

module.exports = User;