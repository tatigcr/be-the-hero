
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        
        table.string('ong_id').notNullable();

        table.foreign('ong_id').references('id').inTable('ongs');
    });
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};

/* 
Para saber todos os comandos do knex, digita no terminal: npx knex
Para criar as entidades: npx knex migrate:make nome_tabela
Para executar a criacao das tabelas: npx knex migrate:latest
*/