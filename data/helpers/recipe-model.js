const db = require('../db-config');

module.exports = { getRecipes };

function getRecipes() {
  return db('recipes');
}
