'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('member_task', [{
        member_id: "a00000000",
        task_id: 1
      },
      {
        member_id: "a00000000",
        task_id: 2
      },
      {
        member_id: "a11111111",
        task_id: 3
      },
      {
        member_id: "a00000000",
        task_id: 4
      },
      {
        member_id: "a33333333",
        task_id: 5
      }

    ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('member_task', [{
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