const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const listingRouter = require('./routes/listing');
const userModel = require('./models/db').User;

var app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/public/zephyr'));
var PORT = 8081;
app.listen(PORT, () => console.log('Server started on port '+PORT+''));
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public/zephyr')));

var session = require("express-session");
const {comparePassword} = require('./lib/bcrypt');

app.use(express.static("public"));
app.use(session({ secret: "cats" }));
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use('/', indexRouter);
app.use('/', usersRouter);
app.use('/', listingRouter);
app.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: 'Invalid username or password.',
                                   successFlash: 'Welcome!' }));

// passport user setup
passport.use(new LocalStrategy(
  function(username, password, done) {
    console.log(userModel);
    userModel.findOne({ userName: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!comparePassword(password, user.password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));
passport.serializeUser(function(user, done) {
    done(null, user.id);
});
  
passport.deserializeUser(function(id, done) {
    userModel.findById(id, function(err, user) {
      done(err, user);
    });
});

module.exports = app;
