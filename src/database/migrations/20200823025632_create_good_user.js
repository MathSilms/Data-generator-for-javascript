
exports.up = function(knex) {
    knex.schema.createTable('good_user', function(t){
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
      knex.schema.dropTable('good_user');
  };
  