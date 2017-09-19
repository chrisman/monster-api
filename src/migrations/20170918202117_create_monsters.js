exports.up = function(knex, Promise) {
  return knex.schema.createTable('monster', table => {
    table.increments();
    table.text('name').notNullable();
    table.text('description');
    table.text('image');
    table.integer('eyes');
    table.boolean('scary');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('monster');
};
