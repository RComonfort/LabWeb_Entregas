'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('sepomexes', 'createdAt', {
        allowNull: true,
        type: Sequelize.DATE
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('sepomexes', 'createdAt', {
      allowNull: false,
      type: Sequelize.DATE
  });
  }
};
