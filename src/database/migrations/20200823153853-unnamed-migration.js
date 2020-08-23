'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('inadimplente', { 
      name: {type:Sequelize.STRING}, 
      age: {type:Sequelize.STRING}, 
      cpf: {
        type:Sequelize.STRING,
        primaryKey:true
      }, 
      individamento: {type:Sequelize.STRING}, 
      poupanca: {type:Sequelize.STRING}, 
      liquidez: {type:Sequelize.STRING}, 
      cobertura: {type:Sequelize.STRING}, 
      riqueza: {type:Sequelize.STRING}, 
      score: {type:Sequelize.STRING}, 
      tempo_serviço: {type:Sequelize.STRING}
    });

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', { id: Sequelize.INTEGER });
  }
};
