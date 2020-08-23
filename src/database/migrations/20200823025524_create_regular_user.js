
exports.up = function(knex) {
    return knex.schema.createTable('regular_user', function(t){
        t.string('individamento');
        t.string('poupança');
        t.string('liquidez');
        t.string('cobertura');
        t.string('riquesa');
        t.string('score');
        t.string('salário');
        t.string('tempo_serviço');
  
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('regular_user');
  };
  