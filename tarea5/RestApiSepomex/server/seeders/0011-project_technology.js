'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('project_technology', [{
      project_id: 1,
      technology_id: 1,
      version: "1.0"
    },
    {
      project_id: 2,
      technology_id: 2,
      version: "1.0"
    },
    {
      project_id: 3,
      technology_id: 3,
      version: "1.0"
    },
    {
      project_id: 4,
      technology_id: 4,
      version: "1.0"
    },
    {
      project_id: 5,
      technology_id: 5,
      version: "1.0"
    }
    ], {});;
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('project_technology', [{
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    },
    {
      id: 4
    },
    {
      id: 5
    },
  ]);
  }
};
