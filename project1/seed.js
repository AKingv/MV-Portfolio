const path = require('path') 
const fs = require('fs').promises 

const {db} = require('./db')
const {Recipes} = require('./models/index')


const seed = async () => {

    await db.sync({ force: true }); // clear out database + tables

    const recipesSeedPath = path.join(__dirname, 'recipes.json');

    const recipesBuffer = await fs.readFile(recipesSeedPath); 

    const {recipesData} = JSON.parse(String(recipesBuffer)); 


    const RecipesPromises = recipesData.map(recipes => Recipes.create(recipes));

   
    await Promise.all(RecipesPromises); 
    console.log("Recipes database info populated!")
}

seed()

module.exports = seed;