const userModel = require('../models/db').User;
const {encrypt} = require('../lib/bcrypt');

module.exports = {
  register(ctx) {
      var response = {};
      const body = ctx.body;
      const username = body.username;
      const password = body.password;
      if (body.password != body.confirmPassword) {
        response = { code: 400, message: 'Password not match' };
        console.log('response = ', response);
      } else if (username && password) {
        userModel.findOne({ where: { userName: username }}).then(function(checkUser) {
          if (checkUser) {
            response = { code: 400, message: 'User name has been used' };
            console.log('response = ', response);
          } else {
            encrypt(password).then(function(saltPassword) { 
              userModel.create({ email: body.email, userName: body.username, password: saltPassword, firstName: body.firstName, lastName: body.lastName });
              response = { code: 200, message: 'You have been registered' };
            });
            console.log('response = ', response);
          }
        });
      } else {
        response = { code: 400, message: 'User name or password cannot be empty' };
      }
      console.log('response = ', response);
      return response;
  }
  // login(ctx) {
  //   const body = ctx.body;
  //   const username = body.username;
  //   const password = body.password;
  //   if (username && password) {
  //     const checkUser =  userModel.findOne({ where: { username, password } });
  //     let response;
  //     if (checkUser) {
  //       response = { code: 200, message: 'Login successful' };
  //     } else {
  //       response = { code: 400, message: 'Password do not match or the user name is not found' };
  //     }
  //     ctx.body = response;
  //   } else {
  //     ctx.body = { code: 400, message: 'User name or password cannot be empty' };
  //   }
  //   return ctx;
  // },
}