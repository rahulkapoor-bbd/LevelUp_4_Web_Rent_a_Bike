const express = require('express');
const db = require('./dbconnection/db');
var path = require('path');
const pool = require('./dbconnection/db');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/user');
const bikeRentalRouter = require('./routes/bikeRental');
const bikeDetailsRouter = require('./routes/bikeDetails');
const checkoutRouter = require('./routes/checkout');

const app = express();
app.use(express.json());

// allows us to parse the form data sent in request body (for our post method)
app.use(bodyParser.urlencoded({extended: true}));

// allow to server static files from this directory
app.use(express.static('public'));

// view engine setup and pages
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/bikeRental', bikeRentalRouter);
app.use('/bikeDetails', bikeDetailsRouter);
app.use('/checkout', checkoutRouter)


app.listen(3000, () => {
  console.log('Listening on '+ 3000);
});

module.exports = app;
