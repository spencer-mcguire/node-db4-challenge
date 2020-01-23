exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    { ingredient_name: 'Beef patties' },
    { ingredient_name: 'Bread' },
    { ingredient_name: 'Eggs' },
    { ingredient_name: 'Salt' }
  ]);
};
