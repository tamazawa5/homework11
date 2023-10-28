'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'jons light',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('todos', [
    {
      title: 'solat subuh',
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'breakfast',
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'kuliah',
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'daily makan',
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Tidur',
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('todos', null, {});
  }
};