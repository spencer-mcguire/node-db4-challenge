exports.seed = function(knex, Promise) {
  return knex('quantities').insert([
    { quantity: 1 },
    { quantity: 0.75 },
    { quantity: 0.5 },
    { quantity: 0.25 },
    { quantity: 2 },
    { quantity: 2.5 }
  ]);
};
