
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('kicks', table => {
      table.increments('id')
      table.string('name')
      table.string('brand')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('kicks')
};
