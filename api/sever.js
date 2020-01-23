const express = require('express');
const helmet = require('helmet');
const logger = require('./middleware/logger');

const recipeRouter = require('./recipes/recipe-router');

const server = express();

server.use(helmet());
server.use(logger);
server.use(express.json());

server.use('/api/recipes', recipeRouter);

server.get('/', (req, res) => {
  res.json('API IS Running');
});

module.exports = server;
