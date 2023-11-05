const request = require('supertest');
const express = require("express");
const app = express();



// const recipesRouter = require('./routes/recipes');
// const {seed} = require("./seed");
// const recipes = require('../recipes');
// const {Recipes} = require("../models/Recipes");

describe('GET /', () => {
    it('should return all recipes', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.body).toEqual([
            {
                "name":" Classic Cheeseburger",
                "ingredients": "brioche bread, american cheese,lettuce,tomato",
                "prepTime": "30 seconds "           
            },
            {
                "name": "Pizza Burger",
                "ingredients": "brioche bread, mozzarela cheese, tomate sauce,fresh tomato",
                "prepTime": "45 seconds"            
            }
        ]);
    });
});


describe('DELETE /:id', () => {
    it('responds with 204 and deletes recipe', async () => {
        const response = await request(app).delete('/1');
        expect(response.statusCode).toBe(204);
    });

    it('should return 404 if the user does not exist', async () => {
       const response = await request(app).delete('/999'); 
    });
});


describe('POST /', () => {
    it('should create new recipe', async () => {
        const res = await request(app)
        .post('/')
        .send({
            name: "Krabby Patty",
            ingredients: "kelp, bread, patty, cheese",
            prepTime: "10 minutes",
        });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('recipe');
    });
});


describe('PUT /:id', () => {
    it('should update recipe and response with 200 status code', async () => {
        const recipeId = '1';
        const updatedInfo = {
            name: "Classic Cheeseburger",
            ingredient: "brioche bread, american cheese,lettuce",
        };

        const res = await request(app)
        .put('/${recipeId}')
        .send(updatedInfo);

    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('Recipe ${recipeId} has been updated');
    });
});

// tests finished