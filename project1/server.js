const { sequelize } = require('./db');
const express = require("express");
const app = express();
const {seed} = require("./seed")
const recipesRouter = require('./routes/recipes');
require('dotenv').config('.env');
// const cors = require('cors');
// const morgan = require('morgan');

const { auth } = require('express-openid-connect');

// parse request body
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const {
  AUTH0_SECRET ,
  AUTH0_AUDIENCE, 
  AUTH0_CLIENT_ID,
  AUTH0_BASE_URL 
} = process.env

const config = {
  authRequired: true,
  auth0Logout: true,
  secret: AUTH0_SECRET,
  baseURL: AUTH0_BASE_URL,
  clientID: AUTH0_CLIENT_ID,
  issuerBaseURL: AUTH0_AUDIENCE
} 

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 
  `<h2>Spongebob Recipes!</h2> 
  <h2>Welcome, ${req.oidc.user.given_name} </h2>
  <h2>Email: ${req.oidc.user.email} </h2>
  <img src ="${req.oidc.user.picture}" alt="${req.oidc.user.picture}">
  `
  : 'You have successfully logged out!');
});


const port = 3000;
app.use(express.json());
app.use('/recipes', recipesRouter);

app.use((error, req, res, next) => {
  console.error('SERVER ERROR: ', error);
  if(res.statusCode < 400) res.status(500);
  res.send({error: error.message, name: error.name, message: error.message});
});
app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})

