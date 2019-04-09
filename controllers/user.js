const userModel = require('../models/user');
const {encrypt} = require('../lib/bcrypt');

module.exports = {
  register(ctx) {
      const body = ctx.body;
      const userName = body.userName;
      const password = body.password;
      if (body.password != body.confirmPassword) {
        ctx.body = { code: 400, message: 'Password not match' };
      } else if (userName && password) {
        const checkUser =  userModel.findOne({ where: { userName } });
        let response;
        if (checkUser) {
          response = { code: 400, message: 'User name has been used' };
        } else {
          const saltPassword =  encrypt(password); //await? 
          userModel.create({ email: body.email, userName: body.userName, password: saltPassword, firstName: body.firstName, lastName: body.lastName });
          response = { code: 200, message: 'You have been registered' };
        }
        ctx.body = response;
      } else {
        ctx.body = { code: 400, message: 'User name or password cannot be empty' };
      }
      return ctx;
  },
  login(ctx) {
    const body = ctx.body;
    const userName = body.userName;
    const password = body.password;
    if (userName && password) {
      const checkUser =  userModel.findOne({ where: { userName, password } });
      let response;
      if (checkUser) {
        response = { code: 200, message: 'Login successful' };
      } else {
        response = { code: 400, message: 'Password do not match or the user name is not found' };
      }
      ctx.body = response;
    } else {
      ctx.body = { code: 400, message: 'User name or password cannot be empty' };
    }
    return ctx;
  },
}