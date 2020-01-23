exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments();

      tbl
        .string('recipe_name', 128)
        .notNullable()
        .index();

      tbl.string('steps', 5000);
    })
    .createTable('ingredients', tbl => {
      tbl.increments();

      tbl.string('ingredient_name').notNullable();
    })
    .createTable('quantities', tbl => {
      tbl.increments();

      tbl.float('quantity').notNullable();
    })
    .createTable('recipe_ingredient_quantity', tbl => {
      tbl.increments();

      tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');

      tbl
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');

      tbl
        .integer('quantity_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('quantities')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipe_ingredient_quantity')
    .dropTableIfExists('quantities')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recepie');
};

/*
recipes = [
 {
   recipe_name: "",
   steps: "",
   ingredients: [],
 },
  {
   recipe_name: "",
   steps: "",
   ingredients: [],
 }
]
*/
