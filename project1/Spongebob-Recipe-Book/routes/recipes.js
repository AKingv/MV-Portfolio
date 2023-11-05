const express = require ('express');
const router = express.Router();
const {Recipes} = require("../models/Recipes");


router.get('/', async (req, res, error) => {
    try {
        const allRecipes = await Recipes.findAll()
        res.send(allRecipes);
    } catch (error) {
        console.log(error);
        next(error);
    }   
})

router.delete('/:id', async (req, res, next) =>{
    try {
      const deletedRecipe = await Recipes.findByPk(req.params.id)
       await deletedRecipe.destroy()
      res.send(await Recipes.findAll())
    } catch (error) {
      next(error)
    }
  })
	
router.post('/', async (req, res, next) =>{
    try {
        if (!req.user) {
            res.status(401).send('You must be logged in to create a new recipe!')
        } else {
            const newRecipe = await Recipes.create(req.body);
            res.json(await Recipes.findAll());
        }
    } catch (error){
        console.error(error);
        next(error);
    }
});

router.get('/:id', async (req, res) => {
    const individualRecipe = await Recipes.findByPk(req.params.id)
    res.send(individualRecipe);
})

router.put('/:id', async(req,res) => {
    try {
        const updateRecipe = await Recipes.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.send(updateRecipe);
    } catch (error) {
        next(error)
    }
})


module.exports = router;