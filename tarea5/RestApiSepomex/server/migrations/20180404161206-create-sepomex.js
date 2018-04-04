'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sepomexes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idestado: {
        type: Sequelize.INTEGER
      },
      estado: {
        type: Sequelize.TEXT
      },
      idmunicipio: {
        type: Sequelize.INTEGER
      },
      municipio: {
        type: Sequelize.TEXT
      },
      ciudad: {
        type: Sequelize.TEXT
      },
      zona: {
        type: Sequelize.TEXT
      },
      cp: {
        type: Sequelize.INTEGER
      },
      asentamiento: {
        type: Sequelize.TEXT
      },
      tipo: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('sepomexes');
  }
};