const express = require('express');
const helmet = require('helmet');
const logger = require('./middleware/logger');

const recepieRouter = require('../api/recepies/recepie-router');

const server = express();

server.use(helmet());
server.use(logger);
server.use(express.json());

server.use('/api/recepies', recepieRouter);

server.get('/', (req, res) => {
  res.json('API IS Running');
});

module.exports = server;
