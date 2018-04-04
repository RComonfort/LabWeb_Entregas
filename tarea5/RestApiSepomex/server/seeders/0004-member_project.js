'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('member_project', [{
        member_id: "a00000000",
        project_id: 1,
        project_role: 'scrum_master'
      },
      {
        member_id: "a00000000",
        project_id: 2,
        project_role: 'scrum_master'
      },
      {
        member_id: "a00000000",
        project_id: 3,
        project_role: 'scrum_master'
      },
      {
        member_id: "a00000000",
        project_id: 4,
        project_role: 'scrum_master'
      },
      {
        member_id: "a00000000",
        project_id: 5,
        project_role: 'scrum_master'
      },
      {
        member_id: "a11111111",
        project_id: 2,
        project_role: 'product_owner'
      },
      {
        member_id: "a22222222",
        project_id: 3,
        project_role: 'developer'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('member_project', [{
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
      {
        id: 6
      },
      {
        id: 7
      },
    ]);
  }
};