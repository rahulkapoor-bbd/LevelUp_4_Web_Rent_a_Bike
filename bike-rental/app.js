
const express = require('express');
const db = require('./dbconnection/db');
var path = require('path');

db.connect();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const bikeRentalRouter = require('./routes/bikeRental');

const app = express();
app.use(express.json());

// allow to server static files from this directory
app.use(express.static('public'));

// view engine setup and pages
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/bikeRental', bikeRentalRouter);




app.listen(3000, () => {
  console.log('Listening on '+ 3000);
});

module.exports = app;
