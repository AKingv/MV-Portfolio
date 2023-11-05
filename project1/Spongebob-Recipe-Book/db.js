const { Sequelize, DataTypes } = require('sequelize')

const db = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite',
    storage: './recipe_list.sqlite',
    logging: false
})


module.exports = { db, DataTypes }