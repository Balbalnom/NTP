const userModel = require('../models/db').User;
const {encrypt} = require('../lib/bcrypt');
exports.register = function(req, res) {
  // res.send('NOT IMPLEMENTED: Book update GET');
  var body = req.body;
  const username = body.username;
  const password = body.password;
  if (body.password != body.confirmPassword) {
    res.status(400).render('sign-up', { message: 'Password not match' });
  } else if (username && password) { //check username and password is not null
    userModel.findOne({ where: { userName: username }}).then(function(checkUser) {
      if (checkUser) {
        res.status(400).render('sign-up', { message: 'User name has been used' });
      } else {
        encrypt(password).then(function(saltPassword) { 
          userModel.create({ email: body.email, userName: body.username, password: saltPassword, firstName: body.firstName, lastName: body.lastName });
          res.status(200).render('login', { message: 'You have been registered. Please login.' });
        });
      }
    });
  } else {
    res.status(400).render('sign-up', { message: 'User name or password cannot be empty' });
  }
};

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
