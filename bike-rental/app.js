
const express = require('express');
const db = require('./dbconnection/db');
var path = require('path');

db.connect();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
app.use(express.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/', indexRouter);
app.use('/users', usersRouter);



app.listen(3000, () => {
  console.log('Listening on '+ 3000);
});

module.exports = app;
