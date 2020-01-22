exports.up = function(knex) {
  knex.schema
    .createTable('recepie', tbl => {
      tbl.incrememnts();
      tbl.string('recepie_name', 128).notNullable();
    })
    .createTable('ingredients', tbl => {
      tbl.incrememnts();
      tbl.string('ingredient_name').notNullable();
    });
};

exports.down = function(knex) {};
