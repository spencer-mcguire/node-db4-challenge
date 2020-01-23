exports.seed = function(knex, Promise) {
  return knex('recipe_ingredient_quantity').insert([
    { recipe_id: 1, ingredient_id: 1, quantity_id: 5 },
    { recipe_id: 1, ingredient_id: 2, quantity_id: 5 },
    { recipe_id: 2, ingredient_id: 3, quantity_id: 1 }
  ]);
};
