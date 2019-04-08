'use strict';
module.exports = (sequelize, DataTypes) => {
  const Landlord = sequelize.define('Landlord', {
    landlordId: DataTypes.INTEGER
  }, {});
  Landlord.associate = function(models) {
    // associations can be defined here
  };
  return Landlord;
};