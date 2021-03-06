'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    userType: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    models.User.hasMany(models.Listing);
  };
  return User;
};