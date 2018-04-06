'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('sepomexes', 'updatedAt', {
        allowNull: true,
        type: Sequelize.DATE
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('sepomexes', 'updatedAt', {
      allowNull: false,
      type: Sequelize.DATE
  });
  }
};
