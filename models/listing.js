'use strict';
const sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Listing = sequelize.define('Listing', {
    picture: DataTypes.STRING, //store the path for .jpg file
    zipCode: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    address: DataTypes.STRING,
    descripiton: DataTypes.STRING,
    houseSize: DataTypes.DOUBLE,
    numOfBathroom: DataTypes.INTEGER,
    numOfBedroom: DataTypes.INTEGER,
    allowPets: DataTypes.BOOLEAN,
    hasRoomate: DataTypes.BOOLEAN,
    houseType: DataTypes.INTEGER, //different house type return to different integer
    parking: DataTypes.BOOLEAN
  }, {});
  Listing.associate = function(models) {
    // associations can be defined here
  };
  return Listing;
};