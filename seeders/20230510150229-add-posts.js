'use strict';

module.exports = {
  up:async (queryInterface, Sequelize)=> {
    await queryInterface.bulkInsert('Posts', [
      {
        title: "Title20",
        content: "About sport",
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Title21",
        content: "About books",
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Title22",
        content: "About cities",
        UserId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
     
    ], {});
  },

  async down (queryInterface, Sequelize) {
  
  }
};

