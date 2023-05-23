const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const db = require('./dbconnection/db');
var path = require('path');
const pool = require('./dbconnection/db');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/user');
const bikeRentalRouter = require('./routes/bikeRental');
const bikeDetailsRouter = require('./routes/bikeDetails');
const authRouter = require('./routes/userAuth');

const app = express();
app.use(express.json());

// allow to server static files from this directory
app.use(express.static('public'));

// Session middleware
app.use(
  session({
    secret: 'your_secret_key', // Change this to a random secret key
    resave: false,
    saveUninitialized: true
  })
);

app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to check if the user is authenticated
const requireAuth = (req, res, next) => {
  if (req.session.isAuthenticated) {
    next();
  } else {
    res.redirect('/login');
  }
};

// view engine setup and pages
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/', authRouter);
app.use('/login', authRouter); // Login route does not require authentication
app.use('/', requireAuth, authRouter); // Protect index route with authentication
app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/bikeRental', bikeRentalRouter);
app.use('/bikeDetails', bikeDetailsRouter);

app.listen(3000, () => {
  console.log('Listening on '+ 3000);
});

module.exports = app;
