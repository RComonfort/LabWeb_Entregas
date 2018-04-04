'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('member_project', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      project_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Projects',
          key: 'id',
          as: 'project_id'
        }
      },
      member_id: {
        type: Sequelize.STRING,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'Members',
          key: 'id',
          as: 'member_id'
        }
      },
      project_role: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ['product_owner', 'scrum_master', 'developer', 'tester', 'designer', 'architect']
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.dropTable('member_project');
  }
};