const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

//const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const searchRouter = require('./routes/search');

var app = express();

var PORT = 5000;
app.listen(PORT, () => console.log('Server started on port '+PORT+''));
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
app.use('/', usersRouter);
app.use('/',searchRouter);

module.exports = app;
