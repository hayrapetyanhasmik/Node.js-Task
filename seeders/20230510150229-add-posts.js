'use strict';

module.exports = {
  up:async (queryInterface, Sequelize)=> {
    await queryInterface.bulkInsert('Posts', [
      {
        title: "Title2",
        content: "About sport",
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Title3",
        content: "About books",
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Title4",
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

