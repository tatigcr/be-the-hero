
exports.up = function(knex) {
   return knex.schema.createTable('ongs', function(table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').primary();
      table.string('whatsapp').primary();
      table.string('city').primary();
      table.string('uf', 2).primary();
  });
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
};
