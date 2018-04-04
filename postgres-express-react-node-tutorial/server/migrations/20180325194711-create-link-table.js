'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('LinkTables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      todoItemId: {
        allowNull: false,
        primaryKey: true,
		    type: Sequelize.INTEGER,
		    references: {model: 'TodoItem', key: todoItemId}
      },
      todoId: {
        allowNull: false,
        primaryKey: true,
		    type: Sequelize.INTEGER,
		    references: {model: 'Todo', key: todoId}
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
    return queryInterface.dropTable('LinkTables');
  }
};
