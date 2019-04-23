const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const userModel = require('./models/db').User;;
var app = express();
var session = require("express-session");
const {comparePassword} = require('./lib/bcrypt');


// passport user setup
passport.use('local-login', new LocalStrategy(
    function(username, password, done) {
        userModel.findOne({ where: { userName: username }}).then(function(user, err) { //findOne() ajax call and nodejs called ajax as promise object
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
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/public/zephyr'));

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public/zephyr')));
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret

app.use(passport.initialize());
app.use(passport.session());

// routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const listingRouter = require('./routes/listing');
app.use('/', indexRouter);
app.use('/', usersRouter);
app.use('/', listingRouter);
app.post('/login', function(req, res, next) {
  passport.authenticate('local-login', {
    successRedirect : '/', // redirect to the secure profile section
    failureRedirect : '/login', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
    },function(err, user, info) {
        console.log('user = ', user);
        if (err) { return next(err); }
        if (!user) { return res.redirect('/login'); }
        req.logIn(user, function(err) {
            console.log('user = ', user);
            if (err) { return next(err); }
            return res.redirect('/');
        });
  })(req, res, next);
});

//session
passport.serializeUser(function(user, done) {
    return done(null, user.id);
});
  
passport.deserializeUser(function(id, done) {
    userModel.findByPk(id).then(function(user, err) {
        return done(err, user);
    });
});

var PORT = 8081;
app.listen(PORT, () => console.log('Server started on port '+PORT+''));
module.exports = app;
