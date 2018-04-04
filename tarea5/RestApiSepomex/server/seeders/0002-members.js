'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Members',

      [
        {
          id: "l00000000",
          department_major: 'ITC',
          name: 'Dan Perez',
          photo_URL: 'test_url',
          password: '$2a$10$Ke6Aa11a.k2fu3UZ1zEL9.UqM63U720h/EwJ.DZMoXIA8ZRMNPY6y',
          createdAt: Sequelize.fn('NOW'),
          updatedAt: Sequelize.fn('NOW'),
          system_role: 'root'
        },
        {
          id: "a00000000",
          department_major: 'ITC',
          name: 'John Doe',
          photo_URL: 'test_url',
          password: '$2a$10$Ke6Aa11a.k2fu3UZ1zEL9.UqM63U720h/EwJ.DZMoXIA8ZRMNPY6y',
          createdAt: Sequelize.fn('NOW'),
          updatedAt: Sequelize.fn('NOW'),
          system_role: 'user'
        },
        {
          id: "a11111111",
          department_major: 'INT',
          name: 'Billy Joel',
          photo_URL: 'test_url',
          password: '$2a$10$Ke6Aa11a.k2fu3UZ1zEL9.UqM63U720h/EwJ.DZMoXIA8ZRMNPY6y',
          createdAt: Sequelize.fn('NOW'),
          updatedAt: Sequelize.fn('NOW'),
          system_role: 'user'
        },
        {
          id: "a22222222",
          department_major: 'ITC',
          name: 'Billy Joel',
          photo_URL: 'test_url',
          password: '$2a$10$Ke6Aa11a.k2fu3UZ1zEL9.UqM63U720h/EwJ.DZMoXIA8ZRMNPY6y',
          createdAt: Sequelize.fn('NOW'),
          updatedAt: Sequelize.fn('NOW'),
          system_role: 'user'
        },
        {
          id: "a33333333",
          department_major: 'ISD',
          name: 'Juanito Banana',
          photo_URL: 'test_url',
          password: '$2a$10$Ke6Aa11a.k2fu3UZ1zEL9.UqM63U720h/EwJ.DZMoXIA8ZRMNPY6y',
          createdAt: Sequelize.fn('NOW'),
          updatedAt: Sequelize.fn('NOW'),
          system_role: 'user'
        },
        {
          id: "a44444444",
          department_major: 'INT',
          name: 'Mary Vargas',
          photo_URL: 'test_url',
          password: '$2a$10$Ke6Aa11a.k2fu3UZ1zEL9.UqM63U720h/EwJ.DZMoXIA8ZRMNPY6y',
          createdAt: Sequelize.fn('NOW'),
          updatedAt: Sequelize.fn('NOW'),
          system_role: 'user'
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Members', 
    [
      {
        id: "L00000000"
      },
      {
        id: "A00000000"
      },
      {
        id: "A11111111"
      },
      {
        id: "A22222222"
      },
      {
        id: "A33333333"
      },
      {
        id: "A44444444"
      },
    ]);
  }
};