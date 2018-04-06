'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameTable('sepomexes', 'Sepomexes');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameTable('Sepomexes', 'sepomexes');
  }
};
