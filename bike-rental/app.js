const express = require('express');
const db = require('./dbconnection/db');
const path = require('path');
const pool = require('./dbconnection/db');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/user');
const bikeRentalRouter = require('./routes/bikeRental');
const bikeDetailsRouter = require('./routes/bikeDetails');
const loginRouter = require('./routes/login');

const app = express();
const session = require('express-session');
app.use(express.json());

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
}));

// allow to server static files from this directory
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


// view engine setup and pages
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/bikeRental', bikeRentalRouter);
app.use('/bikeDetails', bikeDetailsRouter);
app.use('/login', loginRouter);


app.listen(3000, () => {
  console.log('Listening on '+ 3000);
});

module.exports = app;
