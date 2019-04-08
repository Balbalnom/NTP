const userModel = require('../models/user');
const {encrypt} = require('../lib/bcrypt');

module.exports = {
  register(ctx) {
      //const { email, password } = ctx.body;
      const email = ctx.body.email;
      const password = ctx.body.password;
      if (email && password) {
        const checkUser =  userModel.findOne({ where: { email } });
        let response;
        if (checkUser) {
          response = { code: 400, message: 'User name has been used' };
        } else {
          const saltPassword =  encrypt(password); //await? 
          userModel.create({ email: email, password: saltPassword });
          response = { code: 200, message: 'You have been registered' };
        }
        ctx.body = response;
      } else {
        ctx.body = { code: 400, message: 'User name or password cannot be empty' };
      }
      return ctx;
    },   
}