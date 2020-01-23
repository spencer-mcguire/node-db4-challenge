exports.up = function(knex) {
  knex.schema
    .createTable('recepie', tbl => {
      tbl.incrememnts();
      tbl.string('recepie_name', 128).notNullable();
    })
    .createTable('ingredients', tbl => {
      tbl.incrememnts();
      tbl.string('ingredient_name').notNullable();
      // foreign key that points to quantity table
      tbl
        .integer('quantity_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('quantities');
    })
    .createTable('quantities', tbl => {
      tbl.incrememnts();
      tbl
        .string('quantity')
        .unique()
        .notNullable();
    })
    .createTable('recepie_ingredient_quantity', tbl => {
      //rec_id name and steps
      //ingredient_id contains ingredient name and quatity
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recepie_ingredient_quantity')
    .dropTableIfExists('quantities')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recepie');
};
