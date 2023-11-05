const { db, DataTypes } = require('../db')

const Recipes = db.define("recipes", {
    name: DataTypes.STRING,
    ingredients: DataTypes.STRING,
    prepTime: DataTypes.STRING,
});

module.exports = {Recipes};