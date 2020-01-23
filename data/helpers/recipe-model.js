const db = require('../db-config');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db('recipes as r').select('r.id', 'r.recipe_name');
}

function getShoppingList(id) {
  return db('recipe_ingredient_quantity as a')
    .select('a.id', 'q.quantity', 'i.ingredient_name')
    .join('quantities as q', 'a.quantity_id', 'q.id')
    .join('ingredients as i ', 'a.ingredient_id', 'i.id')
    .where({ recipe_id: id });
}

function getInstructions(id) {
  return db('recipes as r ')
    .select('r.steps')
    .where({ id })
    .then(step => step[0]);
}
