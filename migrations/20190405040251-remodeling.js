'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Listings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER
      },
      picture: {
        type:Sequelize.STRING //store the path for .jpg file
      },
      zipCode:{
        type: Sequelize.STRING
      },
      address:{
        type: Sequelize.STRING
      },
      descripiton:{
        type: Sequelize.STRING
      },
      houseSize:{
        type: Sequelize.DOUBLE
      },
      numOfBathroom:{
        type: Sequelize.INTEGER
      },
      numOfBedroom:{
        type: Sequelize.INTEGER
      },
      allowPets:{
        type: Sequelize.BOOLEAN
      },
      hasRoomate: {
        type: Sequelize.BOOLEAN
      },
      houseType:{
        type: Sequelize.INTEGER
      },
      parking:{
        type: Sequelize.BOOLEAN
      },
      UserId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
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
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.dropTable('Listings');
  }
};
