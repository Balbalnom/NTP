const sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', 
  {
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    timestamps: true
  });
  User.associate = function(models) {
    // associations is similiar to the xml class diagram def
    // associations can be defined here 
  };
  return User;
};