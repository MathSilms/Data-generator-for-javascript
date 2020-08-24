
exports.up = function(knex) {
    return knex.schema.createTable('good_user', function(t){
      t.string('name');
      t.string('age');
      t.string('cpf').primary();
      t.string('individamento');
      t.string('poupança');
      t.string('liquidez');
      t.string('cobertura');
      t.string('riqueza');
      t.string('score');
      t.string('salario');
      t.string('tempo_serviço');
  
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('good_user');
  };
  